import http from '@ohos.net.http';
import { Chatlib } from '../lib/Chatlib';
import JSONUtils from './JsonUtils';
import { TestModel } from './TestModel';
import { ParsedUrl } from './ParsedUrl'
import { HashMap } from '@kit.ArkTS';
import Utils from './Utils';

export interface LineDetectDelegate {
  useTheLine(line: string): void;
  lineError(error: Result): void;
}


interface GeneratedObjectLiteralInterface_1 {
  "Content-Type": string;
  "x-trace-id": string;
}

export class LineDetectLib {
  private delegate: LineDetectDelegate | null = null;
  private urlList: string[] = [];
   static usedLine = false;
   static retryTimes = 0;
  private bodyStr = "";
  //private bodyStr: { [key: string]: string } = {};
  //private bodyStr: Map<string, string> = new Map();
 // private bodyStr: Json = new Json();
  private tenantId: number;
  headers = new HashMap<string, string>()

  constructor(urlStrings: string, delegate: LineDetectDelegate | null = null, tenantId: number) {
    this.delegate = delegate;
    this.urlList = urlStrings.split(",");
    LineDetectLib.usedLine = false;
    LineDetectLib.retryTimes = 0;
    this.tenantId = tenantId;
    //"wcs", tenantId
  }

  public getLine(): void {
    let foundLine = false;
    let myStep2Index = 0;
    //this.bodyStr ='{ "gnsId": "wcs", "tenantId": "${this.tenantId}" }';
    for (const txtUrl of this.urlList) {
      if (LineDetectLib.usedLine) break;
      if (foundLine) break;

      const urlString = this.checkUrl(`${txtUrl}/v1/api/verify`);
      //const urlString = "https://example.com/path?name=John&age=30";
      const url =  ParsedUrl.parse(urlString)

      if (!url) {
        console.debug(`Invalid URL: ${txtUrl}`);
        continue;
      }

      this.headers.set("Content-Type","application/json")
      this.headers.set("x-trace-id", Utils.generateUUID())
      // const headers: GeneratedObjectLiteralInterface_1 = {
      //   "Content-Type": "application/json",
      //   "x-trace-id": uuid,
      // };

      const httpRequest = http.createHttp();
      this.bodyStr = `{"gnsId": "wcs", "tenantId": "${this.tenantId}"}`;
      //let jsonObject: JSON = JSON.parse(this.bodyStr);
      httpRequest.request(
        urlString,
        {
          method: http.RequestMethod.POST,
          extraData: this.bodyStr,
          header: this.headers,
          connectTimeout: 60000,
        },
        (err, data) => {
          if (err) {
            console.debug(`line: ${txtUrl} 失败`);
            myStep2Index++;
            if (myStep2Index === this.urlList.length) {
              this.failedAndRetry();
            }
          } else {
            if (data != null && data.result != null) {
              //let responseBody: JSON = JSON.parse(data.result.toString());

              let dataBean = JSONUtils.json2Bean<TestModel>(TestModel, data.result.toString());

              if (dataBean?.code == 0) {
                foundLine = true;

                if (!LineDetectLib.usedLine) {
                  LineDetectLib.usedLine = true;
                  let line = url.hostname;
                  const port = Number.parseInt(url.hostname.toString());
                  if (port && port !== 80 && port !== 443) {
                    line = `${line}:${port}`;
                  }
                  this.delegate?.useTheLine(line);
                  console.debug(`Using line: ${line}`);
                }
              } else {
                console.debug(`Line failed: ${url}, invalid response data`);
                myStep2Index++;
                if (myStep2Index === this.urlList.length) {
                  this.failedAndRetry();
                }
              }
            }
          }
        }
      );
    }
  }

  private failedAndRetry(): void {
    if (LineDetectLib.usedLine) return;

    let result = new Result();
    if (LineDetectLib.retryTimes < 3) {
      LineDetectLib.retryTimes++;
      result.Code = 1009;
      result.Message = `Line acquisition failed, retry ${LineDetectLib.retryTimes}`;
      this.delegate?.lineError(result);
      this.getLine();
    } else {
      result.Code = 1008;
      result.Message = "No available line";
      this.delegate?.lineError(result);
    }
  }

  private checkUrl(str: string): string {
    const r = Math.floor(Math.random() * 100000);
    let newStr = str.trim();
    newStr = `${newStr}?${r}`;

    if (!newStr.startsWith("http")) {
      return "";
    }
    return newStr;
  }

}

export class Result {
  public Code: number = 0;
  public Message: string = "";
}
