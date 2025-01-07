/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.26.1
 * source: api/core/auto_reply.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../option";
import * as dependency_2 from "./../../google/protobuf/empty";
import * as dependency_3 from "./../../validate/validate";
import * as dependency_4 from "./../common/c_reply";
import * as dependency_5 from "./../common/c_base";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace api.core {
    export enum AutoReplyField {
        AUTO_REPLY_FIELD_ALL = 0,
        AUTO_REPLY_FIELD_NAME = 1
    }
    export class AutoReplyTenantResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            items?: dependency_4.api.common.AutoReplyItem[];
            total?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("items" in data && data.items != undefined) {
                    this.items = data.items;
                }
                if ("total" in data && data.total != undefined) {
                    this.total = data.total;
                }
            }
        }
        get items() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.api.common.AutoReplyItem, 1) as dependency_4.api.common.AutoReplyItem[];
        }
        set items(value: dependency_4.api.common.AutoReplyItem[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get total() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set total(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            items?: ReturnType<typeof dependency_4.api.common.AutoReplyItem.prototype.toObject>[];
            total?: number;
        }): AutoReplyTenantResponse {
            const message = new AutoReplyTenantResponse({});
            if (data.items != null) {
                message.items = data.items.map(item => dependency_4.api.common.AutoReplyItem.fromObject(item));
            }
            if (data.total != null) {
                message.total = data.total;
            }
            return message;
        }
        toObject() {
            const data: {
                items?: ReturnType<typeof dependency_4.api.common.AutoReplyItem.prototype.toObject>[];
                total?: number;
            } = {};
            if (this.items != null) {
                data.items = this.items.map((item: dependency_4.api.common.AutoReplyItem) => item.toObject());
            }
            if (this.total != null) {
                data.total = this.total;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.items.length)
                writer.writeRepeatedMessage(1, this.items, (item: dependency_4.api.common.AutoReplyItem) => item.serialize(writer));
            if (this.total != 0)
                writer.writeInt32(2, this.total);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AutoReplyTenantResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AutoReplyTenantResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.items, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.api.common.AutoReplyItem.deserialize(reader), dependency_4.api.common.AutoReplyItem));
                        break;
                    case 2:
                        message.total = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AutoReplyTenantResponse {
            return AutoReplyTenantResponse.deserialize(bytes);
        }
    }
    export class AutoReplyWorkerRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            field?: AutoReplyField;
            worker_id?: number[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("field" in data && data.field != undefined) {
                    this.field = data.field;
                }
                if ("worker_id" in data && data.worker_id != undefined) {
                    this.worker_id = data.worker_id;
                }
            }
        }
        get field() {
            return pb_1.Message.getFieldWithDefault(this, 1, AutoReplyField.AUTO_REPLY_FIELD_ALL) as AutoReplyField;
        }
        set field(value: AutoReplyField) {
            pb_1.Message.setField(this, 1, value);
        }
        get worker_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, []) as number[];
        }
        set worker_id(value: number[]) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            field?: AutoReplyField;
            worker_id?: number[];
        }): AutoReplyWorkerRequest {
            const message = new AutoReplyWorkerRequest({});
            if (data.field != null) {
                message.field = data.field;
            }
            if (data.worker_id != null) {
                message.worker_id = data.worker_id;
            }
            return message;
        }
        toObject() {
            const data: {
                field?: AutoReplyField;
                worker_id?: number[];
            } = {};
            if (this.field != null) {
                data.field = this.field;
            }
            if (this.worker_id != null) {
                data.worker_id = this.worker_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.field != AutoReplyField.AUTO_REPLY_FIELD_ALL)
                writer.writeEnum(1, this.field);
            if (this.worker_id.length)
                writer.writePackedInt32(2, this.worker_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AutoReplyWorkerRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AutoReplyWorkerRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.field = reader.readEnum();
                        break;
                    case 2:
                        message.worker_id = reader.readPackedInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AutoReplyWorkerRequest {
            return AutoReplyWorkerRequest.deserialize(bytes);
        }
    }
    export class AutoReplyWorkerResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            field?: AutoReplyField;
            items?: Map<number, dependency_4.api.common.AutoReplyItem>;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("field" in data && data.field != undefined) {
                    this.field = data.field;
                }
                if ("items" in data && data.items != undefined) {
                    this.items = data.items;
                }
            }
            if (!this.items)
                this.items = new Map();
        }
        get field() {
            return pb_1.Message.getFieldWithDefault(this, 1, AutoReplyField.AUTO_REPLY_FIELD_ALL) as AutoReplyField;
        }
        set field(value: AutoReplyField) {
            pb_1.Message.setField(this, 1, value);
        }
        get items() {
            return pb_1.Message.getField(this, 2) as any as Map<number, dependency_4.api.common.AutoReplyItem>;
        }
        set items(value: Map<number, dependency_4.api.common.AutoReplyItem>) {
            pb_1.Message.setField(this, 2, value as any);
        }
        static fromObject(data: {
            field?: AutoReplyField;
            items?: {
                [key: number]: ReturnType<typeof dependency_4.api.common.AutoReplyItem.prototype.toObject>;
            };
        }): AutoReplyWorkerResponse {
            const message = new AutoReplyWorkerResponse({});
            if (data.field != null) {
                message.field = data.field;
            }
            if (typeof data.items == "object") {
                message.items = new Map(Object.entries(data.items).map(([key, value]) => [Number(key), dependency_4.api.common.AutoReplyItem.fromObject(value)]));
            }
            return message;
        }
        toObject() {
            const data: {
                field?: AutoReplyField;
                items?: {
                    [key: number]: ReturnType<typeof dependency_4.api.common.AutoReplyItem.prototype.toObject>;
                };
            } = {};
            if (this.field != null) {
                data.field = this.field;
            }
            if (this.items != null) {
                data.items = (Object.fromEntries)((Array.from)(this.items).map(([key, value]) => [key, value.toObject()]));
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.field != AutoReplyField.AUTO_REPLY_FIELD_ALL)
                writer.writeEnum(1, this.field);
            for (const [key, value] of this.items) {
                writer.writeMessage(2, this.items, () => {
                    writer.writeInt32(1, key);
                    writer.writeMessage(2, value, () => value.serialize(writer));
                });
            }
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AutoReplyWorkerResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AutoReplyWorkerResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.field = reader.readEnum();
                        break;
                    case 2:
                        reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.items as any, reader, reader.readInt32, () => {
                            let value;
                            reader.readMessage(message, () => value = dependency_4.api.common.AutoReplyItem.deserialize(reader));
                            return value;
                        }));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AutoReplyWorkerResponse {
            return AutoReplyWorkerResponse.deserialize(bytes);
        }
    }
    export class AutoReplyCreateRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            item?: dependency_4.api.common.AutoReplyItem;
            worker_id?: number[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("item" in data && data.item != undefined) {
                    this.item = data.item;
                }
                if ("worker_id" in data && data.worker_id != undefined) {
                    this.worker_id = data.worker_id;
                }
            }
        }
        get item() {
            return pb_1.Message.getWrapperField(this, dependency_4.api.common.AutoReplyItem, 1) as dependency_4.api.common.AutoReplyItem;
        }
        set item(value: dependency_4.api.common.AutoReplyItem) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_item() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get worker_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, []) as number[];
        }
        set worker_id(value: number[]) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            item?: ReturnType<typeof dependency_4.api.common.AutoReplyItem.prototype.toObject>;
            worker_id?: number[];
        }): AutoReplyCreateRequest {
            const message = new AutoReplyCreateRequest({});
            if (data.item != null) {
                message.item = dependency_4.api.common.AutoReplyItem.fromObject(data.item);
            }
            if (data.worker_id != null) {
                message.worker_id = data.worker_id;
            }
            return message;
        }
        toObject() {
            const data: {
                item?: ReturnType<typeof dependency_4.api.common.AutoReplyItem.prototype.toObject>;
                worker_id?: number[];
            } = {};
            if (this.item != null) {
                data.item = this.item.toObject();
            }
            if (this.worker_id != null) {
                data.worker_id = this.worker_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_item)
                writer.writeMessage(1, this.item, () => this.item.serialize(writer));
            if (this.worker_id.length)
                writer.writePackedInt32(2, this.worker_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AutoReplyCreateRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AutoReplyCreateRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.item, () => message.item = dependency_4.api.common.AutoReplyItem.deserialize(reader));
                        break;
                    case 2:
                        message.worker_id = reader.readPackedInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AutoReplyCreateRequest {
            return AutoReplyCreateRequest.deserialize(bytes);
        }
    }
    export class AutoReplyCreateResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            id?: number;
        }): AutoReplyCreateResponse {
            const message = new AutoReplyCreateResponse({});
            if (data.id != null) {
                message.id = data.id;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: number;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id != 0)
                writer.writeInt64(1, this.id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AutoReplyCreateResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AutoReplyCreateResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AutoReplyCreateResponse {
            return AutoReplyCreateResponse.deserialize(bytes);
        }
    }
    export class AutoReplyDeleteRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            id?: number;
        }): AutoReplyDeleteRequest {
            const message = new AutoReplyDeleteRequest({});
            if (data.id != null) {
                message.id = data.id;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: number;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id != 0)
                writer.writeInt64(1, this.id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AutoReplyDeleteRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AutoReplyDeleteRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AutoReplyDeleteRequest {
            return AutoReplyDeleteRequest.deserialize(bytes);
        }
    }
    export class AutoReplyUpdateRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            item?: dependency_4.api.common.AutoReplyItem;
            worker_id?: number[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("item" in data && data.item != undefined) {
                    this.item = data.item;
                }
                if ("worker_id" in data && data.worker_id != undefined) {
                    this.worker_id = data.worker_id;
                }
            }
        }
        get item() {
            return pb_1.Message.getWrapperField(this, dependency_4.api.common.AutoReplyItem, 1) as dependency_4.api.common.AutoReplyItem;
        }
        set item(value: dependency_4.api.common.AutoReplyItem) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_item() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get worker_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, []) as number[];
        }
        set worker_id(value: number[]) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            item?: ReturnType<typeof dependency_4.api.common.AutoReplyItem.prototype.toObject>;
            worker_id?: number[];
        }): AutoReplyUpdateRequest {
            const message = new AutoReplyUpdateRequest({});
            if (data.item != null) {
                message.item = dependency_4.api.common.AutoReplyItem.fromObject(data.item);
            }
            if (data.worker_id != null) {
                message.worker_id = data.worker_id;
            }
            return message;
        }
        toObject() {
            const data: {
                item?: ReturnType<typeof dependency_4.api.common.AutoReplyItem.prototype.toObject>;
                worker_id?: number[];
            } = {};
            if (this.item != null) {
                data.item = this.item.toObject();
            }
            if (this.worker_id != null) {
                data.worker_id = this.worker_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_item)
                writer.writeMessage(1, this.item, () => this.item.serialize(writer));
            if (this.worker_id.length)
                writer.writePackedInt32(2, this.worker_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AutoReplyUpdateRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AutoReplyUpdateRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.item, () => message.item = dependency_4.api.common.AutoReplyItem.deserialize(reader));
                        break;
                    case 2:
                        message.worker_id = reader.readPackedInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AutoReplyUpdateRequest {
            return AutoReplyUpdateRequest.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedAutoReplyService {
        static definition = {
            QueryTenant: {
                path: "/api.core.AutoReply/QueryTenant",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_5.api.common.Page) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_5.api.common.Page.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: AutoReplyTenantResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => AutoReplyTenantResponse.deserialize(new Uint8Array(bytes))
            },
            QueryWorker: {
                path: "/api.core.AutoReply/QueryWorker",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: AutoReplyWorkerRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => AutoReplyWorkerRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: AutoReplyWorkerResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => AutoReplyWorkerResponse.deserialize(new Uint8Array(bytes))
            },
            Create: {
                path: "/api.core.AutoReply/Create",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: AutoReplyCreateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => AutoReplyCreateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: AutoReplyCreateResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => AutoReplyCreateResponse.deserialize(new Uint8Array(bytes))
            },
            Delete: {
                path: "/api.core.AutoReply/Delete",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: AutoReplyDeleteRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => AutoReplyDeleteRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_2.google.protobuf.Empty) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_2.google.protobuf.Empty.deserialize(new Uint8Array(bytes))
            },
            Update: {
                path: "/api.core.AutoReply/Update",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: AutoReplyUpdateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => AutoReplyUpdateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_2.google.protobuf.Empty) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_2.google.protobuf.Empty.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract QueryTenant(call: grpc_1.ServerUnaryCall<dependency_5.api.common.Page, AutoReplyTenantResponse>, callback: grpc_1.sendUnaryData<AutoReplyTenantResponse>): void;
        abstract QueryWorker(call: grpc_1.ServerUnaryCall<AutoReplyWorkerRequest, AutoReplyWorkerResponse>, callback: grpc_1.sendUnaryData<AutoReplyWorkerResponse>): void;
        abstract Create(call: grpc_1.ServerUnaryCall<AutoReplyCreateRequest, AutoReplyCreateResponse>, callback: grpc_1.sendUnaryData<AutoReplyCreateResponse>): void;
        abstract Delete(call: grpc_1.ServerUnaryCall<AutoReplyDeleteRequest, dependency_2.google.protobuf.Empty>, callback: grpc_1.sendUnaryData<dependency_2.google.protobuf.Empty>): void;
        abstract Update(call: grpc_1.ServerUnaryCall<AutoReplyUpdateRequest, dependency_2.google.protobuf.Empty>, callback: grpc_1.sendUnaryData<dependency_2.google.protobuf.Empty>): void;
    }
    export class AutoReplyClient extends grpc_1.makeGenericClientConstructor(UnimplementedAutoReplyService.definition, "AutoReply", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        QueryTenant: GrpcUnaryServiceInterface<dependency_5.api.common.Page, AutoReplyTenantResponse> = (message: dependency_5.api.common.Page, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<AutoReplyTenantResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<AutoReplyTenantResponse>, callback?: grpc_1.requestCallback<AutoReplyTenantResponse>): grpc_1.ClientUnaryCall => {
            return super.QueryTenant(message, metadata, options, callback);
        };
        QueryWorker: GrpcUnaryServiceInterface<AutoReplyWorkerRequest, AutoReplyWorkerResponse> = (message: AutoReplyWorkerRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<AutoReplyWorkerResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<AutoReplyWorkerResponse>, callback?: grpc_1.requestCallback<AutoReplyWorkerResponse>): grpc_1.ClientUnaryCall => {
            return super.QueryWorker(message, metadata, options, callback);
        };
        Create: GrpcUnaryServiceInterface<AutoReplyCreateRequest, AutoReplyCreateResponse> = (message: AutoReplyCreateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<AutoReplyCreateResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<AutoReplyCreateResponse>, callback?: grpc_1.requestCallback<AutoReplyCreateResponse>): grpc_1.ClientUnaryCall => {
            return super.Create(message, metadata, options, callback);
        };
        Delete: GrpcUnaryServiceInterface<AutoReplyDeleteRequest, dependency_2.google.protobuf.Empty> = (message: AutoReplyDeleteRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_2.google.protobuf.Empty>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_2.google.protobuf.Empty>, callback?: grpc_1.requestCallback<dependency_2.google.protobuf.Empty>): grpc_1.ClientUnaryCall => {
            return super.Delete(message, metadata, options, callback);
        };
        Update: GrpcUnaryServiceInterface<AutoReplyUpdateRequest, dependency_2.google.protobuf.Empty> = (message: AutoReplyUpdateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_2.google.protobuf.Empty>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_2.google.protobuf.Empty>, callback?: grpc_1.requestCallback<dependency_2.google.protobuf.Empty>): grpc_1.ClientUnaryCall => {
            return super.Update(message, metadata, options, callback);
        };
    }
}
