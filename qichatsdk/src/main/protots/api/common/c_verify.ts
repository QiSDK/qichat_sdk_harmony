/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.26.1
 * source: api/common/c_verify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../validate/validate";
import * as pb_1 from "google-protobuf";
export namespace api.common {
    export enum ValidatorType {
        VALIDATOR_TYPE_UNKNOWN = 0,
        VALIDATOR_TYPE_SMS = 1,
        VALIDATOR_TYPE_CAPTCHA = 2
    }
    export enum VerifyFor {
        VERIFY_FOR_UNKNOWN = 0,
        VERIFY_FOR_RESET_PASSWORD = 1,
        VERIFY_FOR_RESET_PHONE = 2,
        VERIFY_FOR_RESET_EMAIL = 3,
        VERIFY_FOR_RESET_FINANCE_PASSWORD = 4,
        VERIFY_FOR_REGISTER = 5,
        VERIFY_FOR_LOGIN = 6,
        VERIFY_FOR_BIND = 7,
        VERIFY_FOR_BACKSTAGE_RESET_PASSWORD = 101
    }
    export class Verify extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2, 3]];
        constructor(data?: any[] | ({} & (({
            sms?: VerifyBySMS;
            pwd?: never;
            captcha?: never;
        } | {
            sms?: never;
            pwd?: VerifyByPassword;
            captcha?: never;
        } | {
            sms?: never;
            pwd?: never;
            captcha?: VerifyByCaptcha;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("sms" in data && data.sms != undefined) {
                    this.sms = data.sms;
                }
                if ("pwd" in data && data.pwd != undefined) {
                    this.pwd = data.pwd;
                }
                if ("captcha" in data && data.captcha != undefined) {
                    this.captcha = data.captcha;
                }
            }
        }
        get sms() {
            return pb_1.Message.getWrapperField(this, VerifyBySMS, 1) as VerifyBySMS;
        }
        set sms(value: VerifyBySMS) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_sms() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get pwd() {
            return pb_1.Message.getWrapperField(this, VerifyByPassword, 2) as VerifyByPassword;
        }
        set pwd(value: VerifyByPassword) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_pwd() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get captcha() {
            return pb_1.Message.getWrapperField(this, VerifyByCaptcha, 3) as VerifyByCaptcha;
        }
        set captcha(value: VerifyByCaptcha) {
            pb_1.Message.setOneofWrapperField(this, 3, this.#one_of_decls[0], value);
        }
        get has_captcha() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get way() {
            const cases: {
                [index: number]: "none" | "sms" | "pwd" | "captcha";
            } = {
                0: "none",
                1: "sms",
                2: "pwd",
                3: "captcha"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3])];
        }
        static fromObject(data: {
            sms?: ReturnType<typeof VerifyBySMS.prototype.toObject>;
            pwd?: ReturnType<typeof VerifyByPassword.prototype.toObject>;
            captcha?: ReturnType<typeof VerifyByCaptcha.prototype.toObject>;
        }): Verify {
            const message = new Verify({});
            if (data.sms != null) {
                message.sms = VerifyBySMS.fromObject(data.sms);
            }
            if (data.pwd != null) {
                message.pwd = VerifyByPassword.fromObject(data.pwd);
            }
            if (data.captcha != null) {
                message.captcha = VerifyByCaptcha.fromObject(data.captcha);
            }
            return message;
        }
        toObject() {
            const data: {
                sms?: ReturnType<typeof VerifyBySMS.prototype.toObject>;
                pwd?: ReturnType<typeof VerifyByPassword.prototype.toObject>;
                captcha?: ReturnType<typeof VerifyByCaptcha.prototype.toObject>;
            } = {};
            if (this.sms != null) {
                data.sms = this.sms.toObject();
            }
            if (this.pwd != null) {
                data.pwd = this.pwd.toObject();
            }
            if (this.captcha != null) {
                data.captcha = this.captcha.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_sms)
                writer.writeMessage(1, this.sms, () => this.sms.serialize(writer));
            if (this.has_pwd)
                writer.writeMessage(2, this.pwd, () => this.pwd.serialize(writer));
            if (this.has_captcha)
                writer.writeMessage(3, this.captcha, () => this.captcha.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Verify {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Verify();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.sms, () => message.sms = VerifyBySMS.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.pwd, () => message.pwd = VerifyByPassword.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.captcha, () => message.captcha = VerifyByCaptcha.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Verify {
            return Verify.deserialize(bytes);
        }
    }
    export class VerifyBySMS extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            key?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("key" in data && data.key != undefined) {
                    this.key = data.key;
                }
            }
        }
        get key() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set key(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            key?: string;
        }): VerifyBySMS {
            const message = new VerifyBySMS({});
            if (data.key != null) {
                message.key = data.key;
            }
            return message;
        }
        toObject() {
            const data: {
                key?: string;
            } = {};
            if (this.key != null) {
                data.key = this.key;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.key.length)
                writer.writeString(1, this.key);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): VerifyBySMS {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new VerifyBySMS();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.key = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): VerifyBySMS {
            return VerifyBySMS.deserialize(bytes);
        }
    }
    export class VerifyByPassword extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            passwd?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("passwd" in data && data.passwd != undefined) {
                    this.passwd = data.passwd;
                }
            }
        }
        get passwd() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set passwd(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            passwd?: string;
        }): VerifyByPassword {
            const message = new VerifyByPassword({});
            if (data.passwd != null) {
                message.passwd = data.passwd;
            }
            return message;
        }
        toObject() {
            const data: {
                passwd?: string;
            } = {};
            if (this.passwd != null) {
                data.passwd = this.passwd;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.passwd.length)
                writer.writeString(1, this.passwd);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): VerifyByPassword {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new VerifyByPassword();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.passwd = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): VerifyByPassword {
            return VerifyByPassword.deserialize(bytes);
        }
    }
    export class VerifyByCaptcha extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            key?: string;
            answer?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("key" in data && data.key != undefined) {
                    this.key = data.key;
                }
                if ("answer" in data && data.answer != undefined) {
                    this.answer = data.answer;
                }
            }
        }
        get key() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set key(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get answer() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set answer(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            key?: string;
            answer?: string;
        }): VerifyByCaptcha {
            const message = new VerifyByCaptcha({});
            if (data.key != null) {
                message.key = data.key;
            }
            if (data.answer != null) {
                message.answer = data.answer;
            }
            return message;
        }
        toObject() {
            const data: {
                key?: string;
                answer?: string;
            } = {};
            if (this.key != null) {
                data.key = this.key;
            }
            if (this.answer != null) {
                data.answer = this.answer;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.key.length)
                writer.writeString(1, this.key);
            if (this.answer.length)
                writer.writeString(2, this.answer);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): VerifyByCaptcha {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new VerifyByCaptcha();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.key = reader.readString();
                        break;
                    case 2:
                        message.answer = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): VerifyByCaptcha {
            return VerifyByCaptcha.deserialize(bytes);
        }
    }
}