/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.26.1
 * source: api/core/metric.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../option";
import * as dependency_2 from "./../../google/protobuf/empty";
import * as dependency_3 from "./../../validate/validate";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace api.core {
    export class WorkerMetric extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            reply_percent_3_min?: number;
            today_service?: number;
            avg_reply_interval?: number;
            transfer_to?: number;
            transfer_from?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("reply_percent_3_min" in data && data.reply_percent_3_min != undefined) {
                    this.reply_percent_3_min = data.reply_percent_3_min;
                }
                if ("today_service" in data && data.today_service != undefined) {
                    this.today_service = data.today_service;
                }
                if ("avg_reply_interval" in data && data.avg_reply_interval != undefined) {
                    this.avg_reply_interval = data.avg_reply_interval;
                }
                if ("transfer_to" in data && data.transfer_to != undefined) {
                    this.transfer_to = data.transfer_to;
                }
                if ("transfer_from" in data && data.transfer_from != undefined) {
                    this.transfer_from = data.transfer_from;
                }
            }
        }
        get reply_percent_3_min() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set reply_percent_3_min(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get today_service() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set today_service(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get avg_reply_interval() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set avg_reply_interval(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get transfer_to() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set transfer_to(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get transfer_from() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set transfer_from(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            reply_percent_3_min?: number;
            today_service?: number;
            avg_reply_interval?: number;
            transfer_to?: number;
            transfer_from?: number;
        }): WorkerMetric {
            const message = new WorkerMetric({});
            if (data.reply_percent_3_min != null) {
                message.reply_percent_3_min = data.reply_percent_3_min;
            }
            if (data.today_service != null) {
                message.today_service = data.today_service;
            }
            if (data.avg_reply_interval != null) {
                message.avg_reply_interval = data.avg_reply_interval;
            }
            if (data.transfer_to != null) {
                message.transfer_to = data.transfer_to;
            }
            if (data.transfer_from != null) {
                message.transfer_from = data.transfer_from;
            }
            return message;
        }
        toObject() {
            const data: {
                reply_percent_3_min?: number;
                today_service?: number;
                avg_reply_interval?: number;
                transfer_to?: number;
                transfer_from?: number;
            } = {};
            if (this.reply_percent_3_min != null) {
                data.reply_percent_3_min = this.reply_percent_3_min;
            }
            if (this.today_service != null) {
                data.today_service = this.today_service;
            }
            if (this.avg_reply_interval != null) {
                data.avg_reply_interval = this.avg_reply_interval;
            }
            if (this.transfer_to != null) {
                data.transfer_to = this.transfer_to;
            }
            if (this.transfer_from != null) {
                data.transfer_from = this.transfer_from;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.reply_percent_3_min != 0)
                writer.writeInt32(1, this.reply_percent_3_min);
            if (this.today_service != 0)
                writer.writeInt32(2, this.today_service);
            if (this.avg_reply_interval != 0)
                writer.writeInt32(3, this.avg_reply_interval);
            if (this.transfer_to != 0)
                writer.writeInt32(4, this.transfer_to);
            if (this.transfer_from != 0)
                writer.writeInt32(5, this.transfer_from);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WorkerMetric {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WorkerMetric();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.reply_percent_3_min = reader.readInt32();
                        break;
                    case 2:
                        message.today_service = reader.readInt32();
                        break;
                    case 3:
                        message.avg_reply_interval = reader.readInt32();
                        break;
                    case 4:
                        message.transfer_to = reader.readInt32();
                        break;
                    case 5:
                        message.transfer_from = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): WorkerMetric {
            return WorkerMetric.deserialize(bytes);
        }
    }
    export class QuerySelfResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            metric?: WorkerMetric;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("metric" in data && data.metric != undefined) {
                    this.metric = data.metric;
                }
            }
        }
        get metric() {
            return pb_1.Message.getWrapperField(this, WorkerMetric, 1) as WorkerMetric;
        }
        set metric(value: WorkerMetric) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_metric() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            metric?: ReturnType<typeof WorkerMetric.prototype.toObject>;
        }): QuerySelfResponse {
            const message = new QuerySelfResponse({});
            if (data.metric != null) {
                message.metric = WorkerMetric.fromObject(data.metric);
            }
            return message;
        }
        toObject() {
            const data: {
                metric?: ReturnType<typeof WorkerMetric.prototype.toObject>;
            } = {};
            if (this.metric != null) {
                data.metric = this.metric.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_metric)
                writer.writeMessage(1, this.metric, () => this.metric.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySelfResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuerySelfResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.metric, () => message.metric = WorkerMetric.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QuerySelfResponse {
            return QuerySelfResponse.deserialize(bytes);
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
    export abstract class UnimplementedMetricService {
        static definition = {
            QuerySelf: {
                path: "/api.core.Metric/QuerySelf",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_2.google.protobuf.Empty) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_2.google.protobuf.Empty.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QuerySelfResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QuerySelfResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract QuerySelf(call: grpc_1.ServerUnaryCall<dependency_2.google.protobuf.Empty, QuerySelfResponse>, callback: grpc_1.sendUnaryData<QuerySelfResponse>): void;
    }
    export class MetricClient extends grpc_1.makeGenericClientConstructor(UnimplementedMetricService.definition, "Metric", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        QuerySelf: GrpcUnaryServiceInterface<dependency_2.google.protobuf.Empty, QuerySelfResponse> = (message: dependency_2.google.protobuf.Empty, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QuerySelfResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QuerySelfResponse>, callback?: grpc_1.requestCallback<QuerySelfResponse>): grpc_1.ClientUnaryCall => {
            return super.QuerySelf(message, metadata, options, callback);
        };
    }
}
