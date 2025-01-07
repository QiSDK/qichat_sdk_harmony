/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.26.1
 * source: gateway/g_payload.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../validate/validate";
import * as dependency_2 from "./g_action";
import * as pb_1 from "google-protobuf";
export namespace gateway {
    export class Payload extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: number;
            act?: dependency_2.gateway.Action;
            data?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("act" in data && data.act != undefined) {
                    this.act = data.act;
                }
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get act() {
            return pb_1.Message.getFieldWithDefault(this, 2, dependency_2.gateway.Action.ActionForward) as dependency_2.gateway.Action;
        }
        set act(value: dependency_2.gateway.Action) {
            pb_1.Message.setField(this, 2, value);
        }
        get data() {
            return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0)) as Uint8Array;
        }
        set data(value: Uint8Array) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            id?: number;
            act?: dependency_2.gateway.Action;
            data?: Uint8Array;
        }): Payload {
            const message = new Payload({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.act != null) {
                message.act = data.act;
            }
            if (data.data != null) {
                message.data = data.data;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: number;
                act?: dependency_2.gateway.Action;
                data?: Uint8Array;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.act != null) {
                data.act = this.act;
            }
            if (this.data != null) {
                data.data = this.data;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id != 0)
                writer.writeUint64(1, this.id);
            if (this.act != dependency_2.gateway.Action.ActionForward)
                writer.writeEnum(2, this.act);
            if (this.data.length)
                writer.writeBytes(3, this.data);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Payload {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Payload();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readUint64();
                        break;
                    case 2:
                        message.act = reader.readEnum();
                        break;
                    case 3:
                        message.data = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Payload {
            return Payload.deserialize(bytes);
        }
    }
}
