
import { Chatlib, Resp, TeneasySDKDelegate } from 'qichatsdk/src/main/ets/lib/Chatlib';
import * as CMessage from 'qichatsdk/src/main/protots/api/common/c_message';
import * as GGateway from 'qichatsdk/src/main/protots/gateway/g_gateway';
import * as GPayload from 'qichatsdk/src/main/protots/gateway/g_payload';
import * as GAction from 'qichatsdk/src/main/protots/gateway/g_action';

@Entry
@Component
struct Index {

  private chatLib!: Chatlib;
  private token: string= "";
  private isConnected: boolean = false

  aboutToAppear() {
    // Initialize chatLib in the constructor
    this.chatLib = new Chatlib(
      "COYBEAUYASDyASiG2piD9zE.te46qua5ha2r-Caz03Vx2JXH5OLSRRV2GqdYcn9UslwibsxBSP98GhUKSGEI0Z84FRMkp16ZK8eS-y72QVE2AQ",
      "COYBEAIYqtgoIPIBKKm9qvrDMg.Fv93MWdBXnVjagSzUPcmTxV5pMtj20evCjx2xlg09V40hkvzAwPmU6xRGkF3s1bjcLeeOMunPUcTUN62bh1QCg",
      'wss://csapi.hfxg.xyz/v1/gateway/h5',
      666666,
      '9zgd9YUc'
    );
    // Set the listener and connect to WebSocket
    this.chatLib.listener = this;
    this.chatLib.connectWebSocket();
  }



  @State message: string = 'Hello World'
  i = 0;
  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .onClick(() =>{
            this.chatLib.sendMessage("/session/20250107/230/2/ASSET_KIND_SESSION/390c8bf7c7aafba1517b7c9ab327eff4.mp4", CMessage.api.common.MessageFormat.MSG_VIDEO, 1)
            //this.chatLib.sendMessage("/session/20250107/230/2/ASSET_KIND_SESSION/4483b9eec2235312a96a093711671c79.jpg", CMessage.api.common.MessageFormat.MSG_IMG, 1)
            //this.chatLib.sendMessage("hello Victor!", CMessage.api.common.MessageFormat.MSG_TEXT, 1);
          })
          .fontWeight(FontWeight.Bold)
      }
      .width('100%')
    }
    .height('100%')
  }


  // Received message
  receivedMsg(msg: CMessage.api.common.Message): void{
    if (msg.image != null){
      console.debug(msg.image.uri)
    }else if(msg.content != null){
      console.debug(msg.content.data)
    }else if(msg.video != null){
      console.debug(msg.video.uri)
    }else{
      console.debug('收到未知消息')
    }
  }

  /**
   * Message receipt
   * @param msg - Sent message
   * @param payloadId
   * @param msgId - If 0, it means the server didn't generate a message ID, meaning sending failed
   * @param errMsg - Error message
   */
  msgReceipt(msg: CMessage.api.common.Message | null, payloadId: number, msgId: number, errMsg: string): void{
    // Check if msg is null
    if (msg === null) {
      console.debug(`Received null message for payloadId: ${payloadId}, msgId: ${msgId}, error: ${errMsg}`);
      return;
    }

    // Log the message details
    console.debug(`Message received - msgId: ${msg.msg_id}, payloadId: ${payloadId}, msgId: ${msgId}, error: ${errMsg}`);
  };

  /**
   * Message deletion receipt
   * @param msg - Sent message
   * @param payloadId
   * @param msgId
   */
  msgDeleted(msg: CMessage.api.common.Message | null, payloadId: number, msgId: number): void{
    // Check if msg is null
    if (msg === null) {
      console.debug(`Received null message for payloadId: ${payloadId}, msgId: ${msgId}`);
      return;
    }

    // Log the message details
    console.debug(`Message received - msgId: ${msg.msg_id}, payloadId: ${payloadId}, msgId: ${msgId}`);
  }

  /**
   * System message for displaying a tip
   * @param msg
   */
  systemMsg(msg: Resp<string>): void{
    console.debug(msg.msg)
    if (msg.code == 1002){
      //无效token
    }else if(msg.code == 1010){
      //在别处登录了
    }else if(msg.code == 1005){
      //会话超时
    }
  }

  /**
   * Connection success callback
   * @param SCHi
   */
  connected(c: GGateway.gateway.SCHi): void{
    //this.token = c
    this.token = c.token
    console.log("连接成功!")
  }

  // Work change callback
  workChanged(msg: GGateway.gateway.SCWorkerChanged): void{
    const worker = msg.worker_name;
    console.debug(`客服更换成功：${worker}!`);
  }
}