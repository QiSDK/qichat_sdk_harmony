
const PARAM_USER_ID: string = "USER_ID";
const PARAM_CERT: string = "CERT";
const PARAM_MERCHANT_ID: string = "MERCHANT_ID";
const PARAM_XTOKEN: string = "HTTPTOKEN";
const PARAM_LINES: string = "LINES";
const PARAM_DOMAIN: string = "wssBaseUrl";
const PARAM_IMAGEBASEURL: string = "baseUrlImage";
const PARAM_USERNAME: string = "USER_NAME";
const PARAM_MAXSESSIONMINS: string = "MAXSESSIONMINS";
const PARAM_USER_LEVEL: string = "USER_LEVEL";

interface CustomParam {
  username: string;
  platform: number;
  userlevel: number;
}

export class Constants {
  static unSentMessage: Map<number, Array<MessageItem>> = new Map();

  // Configuration settings
  static lines: string = "https://csapi.hfxg.xyz,https://xxxapi.qixin14.xyz";
  static cert: string = "COYBEAUYASDyASiG2piD9zE.te46qua5ha2r-Caz03Vx2JXH5OLSRRV2GqdYcn9UslwibsxBSP98GhUKSGEI0Z84FRMkp16ZK8eS-y72QVE2AQ";
  static merchantId: number = 230;
  static userId: number = 666688;
  static baseUrlImage: string = "https://sssacc.wwc09.com";

  static userName: string = "Wang Wu";
  static maxSessionMins: number = 19999999;
  static userLevel: number = 88;

  // Runtime generated
  static xToken: string = "";
  static domain: string = "csapi.hfxg.xyz";
  static workerId: number = 0;
  static CONSULT_ID: number = 0;
  static workerAvatar: string = "";

  static withAutoReplyU: WithAutoReply | null = null;
  //static errorReport: ErrorReport = new ErrorReport([]);

  static baseUrlApi(): string {
    return `https://${Constants.domain}`;
  }

  static getCustomParam(): string {
    let custom: CustomParam = {
      username: Constants.userName,
      platform: 2,
      userlevel: Constants.userLevel
    };
    let cust = JSON.stringify(custom);
    return encodeURIComponent(cust);
  }
}

// Assuming these classes are defined elsewhere
class MessageItem {
  // Define properties and methods for MessageItem
}

class WithAutoReply {
  // Define properties and methods for WithAutoReply
}

// class ErrorReport {
//   constructor(public reports: Array<any>) {
//     // Initialize error report
//   }
// }