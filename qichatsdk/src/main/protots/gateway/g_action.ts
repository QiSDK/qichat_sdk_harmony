/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.26.1
 * source: gateway/g_action.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace gateway {
    export enum Action {
        ActionForward = 0,
        ActionSCHi = 1,
        ActionCSSendMsg = 2,
        ActionSCSendMsgACK = 3,
        ActionSCRecvMsg = 4,
        ActionCSRecvMsgACK = 5,
        ActionCSReadMsg = 6,
        ActionSCReadMsg = 7,
        ActionCSDeleteMsg = 8,
        ActionSCDeleteMsgACK = 9,
        ActionSCDeleteMsg = 10,
        ActionCSEditMsg = 11,
        ActionSCEditMsgACK = 12,
        ActionSCEditMsg = 13,
        ActionInputtingBegin = 14,
        ActionInputtingEnd = 15,
        ActionSCChatChanged = 16,
        ActionSCWorkerChanged = 17,
        ActionSCUserConnectionChanged = 18,
        ActionSCSimSend = 19,
        ActionSystem = 20
    }
}
