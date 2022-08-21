/* eslint-disable */
import { AuthType, User, authTypeFromJSON, authTypeToJSON } from './user';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'user';

export interface CreateUserRequest {
  user: User | undefined;
  authType: AuthType;
}

export interface CreateUserResponse {
  user: User | undefined;
}

export interface UpdateUserRequest {
  user: User | undefined;
  authType: AuthType;
}

export interface UpdateUserResponse {
  user: User | undefined;
}

export interface GetUserRequest {
  id: string;
}

export interface GetUserResponse {
  user: User | undefined;
}

export interface GetMyProfileRequest {
  authType: AuthType;
}

export interface GetMyProfileResponse {
  user: User | undefined;
}

export interface GetAllUsersRequest {}

export interface GetAllUsersResponse {
  users: User[];
}

export interface DeleteUserRequest {
  authType: AuthType;
}

export interface DeleteUserResponse {
  ok: boolean;
}

function createBaseCreateUserRequest(): CreateUserRequest {
  return { user: undefined, authType: 0 };
}

export const CreateUserRequest = {
  encode(
    message: CreateUserRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.authType !== 0) {
      writer.uint32(16).int32(message.authType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 2:
          message.authType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateUserRequest {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
      authType: isSet(object.authType) ? authTypeFromJSON(object.authType) : 0,
    };
  },

  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    message.authType !== undefined &&
      (obj.authType = authTypeToJSON(message.authType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserRequest>, I>>(
    object: I,
  ): CreateUserRequest {
    const message = createBaseCreateUserRequest();
    message.user =
      object.user !== undefined && object.user !== null
        ? User.fromPartial(object.user)
        : undefined;
    message.authType = object.authType ?? 0;
    return message;
  },
};

function createBaseCreateUserResponse(): CreateUserResponse {
  return { user: undefined };
}

export const CreateUserResponse = {
  encode(
    message: CreateUserResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateUserResponse {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: CreateUserResponse): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserResponse>, I>>(
    object: I,
  ): CreateUserResponse {
    const message = createBaseCreateUserResponse();
    message.user =
      object.user !== undefined && object.user !== null
        ? User.fromPartial(object.user)
        : undefined;
    return message;
  },
};

function createBaseUpdateUserRequest(): UpdateUserRequest {
  return { user: undefined, authType: 0 };
}

export const UpdateUserRequest = {
  encode(
    message: UpdateUserRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.authType !== 0) {
      writer.uint32(16).int32(message.authType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 2:
          message.authType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateUserRequest {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
      authType: isSet(object.authType) ? authTypeFromJSON(object.authType) : 0,
    };
  },

  toJSON(message: UpdateUserRequest): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    message.authType !== undefined &&
      (obj.authType = authTypeToJSON(message.authType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(
    object: I,
  ): UpdateUserRequest {
    const message = createBaseUpdateUserRequest();
    message.user =
      object.user !== undefined && object.user !== null
        ? User.fromPartial(object.user)
        : undefined;
    message.authType = object.authType ?? 0;
    return message;
  },
};

function createBaseUpdateUserResponse(): UpdateUserResponse {
  return { user: undefined };
}

export const UpdateUserResponse = {
  encode(
    message: UpdateUserResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateUserResponse {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: UpdateUserResponse): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateUserResponse>, I>>(
    object: I,
  ): UpdateUserResponse {
    const message = createBaseUpdateUserResponse();
    message.user =
      object.user !== undefined && object.user !== null
        ? User.fromPartial(object.user)
        : undefined;
    return message;
  },
};

function createBaseGetUserRequest(): GetUserRequest {
  return { id: '' };
}

export const GetUserRequest = {
  encode(
    message: GetUserRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUserRequest>, I>>(
    object: I,
  ): GetUserRequest {
    const message = createBaseGetUserRequest();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseGetUserResponse(): GetUserResponse {
  return { user: undefined };
}

export const GetUserResponse = {
  encode(
    message: GetUserResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserResponse {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: GetUserResponse): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUserResponse>, I>>(
    object: I,
  ): GetUserResponse {
    const message = createBaseGetUserResponse();
    message.user =
      object.user !== undefined && object.user !== null
        ? User.fromPartial(object.user)
        : undefined;
    return message;
  },
};

function createBaseGetMyProfileRequest(): GetMyProfileRequest {
  return { authType: 0 };
}

export const GetMyProfileRequest = {
  encode(
    message: GetMyProfileRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.authType !== 0) {
      writer.uint32(8).int32(message.authType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMyProfileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMyProfileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMyProfileRequest {
    return {
      authType: isSet(object.authType) ? authTypeFromJSON(object.authType) : 0,
    };
  },

  toJSON(message: GetMyProfileRequest): unknown {
    const obj: any = {};
    message.authType !== undefined &&
      (obj.authType = authTypeToJSON(message.authType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMyProfileRequest>, I>>(
    object: I,
  ): GetMyProfileRequest {
    const message = createBaseGetMyProfileRequest();
    message.authType = object.authType ?? 0;
    return message;
  },
};

function createBaseGetMyProfileResponse(): GetMyProfileResponse {
  return { user: undefined };
}

export const GetMyProfileResponse = {
  encode(
    message: GetMyProfileResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetMyProfileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMyProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMyProfileResponse {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: GetMyProfileResponse): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMyProfileResponse>, I>>(
    object: I,
  ): GetMyProfileResponse {
    const message = createBaseGetMyProfileResponse();
    message.user =
      object.user !== undefined && object.user !== null
        ? User.fromPartial(object.user)
        : undefined;
    return message;
  },
};

function createBaseGetAllUsersRequest(): GetAllUsersRequest {
  return {};
}

export const GetAllUsersRequest = {
  encode(
    _: GetAllUsersRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllUsersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllUsersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetAllUsersRequest {
    return {};
  },

  toJSON(_: GetAllUsersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAllUsersRequest>, I>>(
    _: I,
  ): GetAllUsersRequest {
    const message = createBaseGetAllUsersRequest();
    return message;
  },
};

function createBaseGetAllUsersResponse(): GetAllUsersResponse {
  return { users: [] };
}

export const GetAllUsersResponse = {
  encode(
    message: GetAllUsersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllUsersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(User.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAllUsersResponse {
    return {
      users: Array.isArray(object?.users)
        ? object.users.map((e: any) => User.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetAllUsersResponse): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => (e ? User.toJSON(e) : undefined));
    } else {
      obj.users = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAllUsersResponse>, I>>(
    object: I,
  ): GetAllUsersResponse {
    const message = createBaseGetAllUsersResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeleteUserRequest(): DeleteUserRequest {
  return { authType: 0 };
}

export const DeleteUserRequest = {
  encode(
    message: DeleteUserRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.authType !== 0) {
      writer.uint32(8).int32(message.authType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteUserRequest {
    return {
      authType: isSet(object.authType) ? authTypeFromJSON(object.authType) : 0,
    };
  },

  toJSON(message: DeleteUserRequest): unknown {
    const obj: any = {};
    message.authType !== undefined &&
      (obj.authType = authTypeToJSON(message.authType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteUserRequest>, I>>(
    object: I,
  ): DeleteUserRequest {
    const message = createBaseDeleteUserRequest();
    message.authType = object.authType ?? 0;
    return message;
  },
};

function createBaseDeleteUserResponse(): DeleteUserResponse {
  return { ok: false };
}

export const DeleteUserResponse = {
  encode(
    message: DeleteUserResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ok === true) {
      writer.uint32(8).bool(message.ok);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ok = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteUserResponse {
    return {
      ok: isSet(object.ok) ? Boolean(object.ok) : false,
    };
  },

  toJSON(message: DeleteUserResponse): unknown {
    const obj: any = {};
    message.ok !== undefined && (obj.ok = message.ok);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteUserResponse>, I>>(
    object: I,
  ): DeleteUserResponse {
    const message = createBaseDeleteUserResponse();
    message.ok = object.ok ?? false;
    return message;
  },
};

export interface UserService {
  createUser(request: CreateUserRequest): Promise<CreateUserResponse>;
  getUser(request: GetUserRequest): Promise<GetUserResponse>;
  getAllUsers(request: GetAllUsersRequest): Promise<GetAllUsersResponse>;
  deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse>;
  updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse>;
  getMyProfile(request: GetMyProfileRequest): Promise<GetMyProfileResponse>;
}

export class UserServiceClientImpl implements UserService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createUser = this.createUser.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.getMyProfile = this.getMyProfile.bind(this);
  }
  createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    const data = CreateUserRequest.encode(request).finish();
    const promise = this.rpc.request('user.UserService', 'createUser', data);
    return promise.then((data) =>
      CreateUserResponse.decode(new _m0.Reader(data)),
    );
  }

  getUser(request: GetUserRequest): Promise<GetUserResponse> {
    const data = GetUserRequest.encode(request).finish();
    const promise = this.rpc.request('user.UserService', 'getUser', data);
    return promise.then((data) => GetUserResponse.decode(new _m0.Reader(data)));
  }

  getAllUsers(request: GetAllUsersRequest): Promise<GetAllUsersResponse> {
    const data = GetAllUsersRequest.encode(request).finish();
    const promise = this.rpc.request('user.UserService', 'getAllUsers', data);
    return promise.then((data) =>
      GetAllUsersResponse.decode(new _m0.Reader(data)),
    );
  }

  deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    const data = DeleteUserRequest.encode(request).finish();
    const promise = this.rpc.request('user.UserService', 'deleteUser', data);
    return promise.then((data) =>
      DeleteUserResponse.decode(new _m0.Reader(data)),
    );
  }

  updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    const data = UpdateUserRequest.encode(request).finish();
    const promise = this.rpc.request('user.UserService', 'updateUser', data);
    return promise.then((data) =>
      UpdateUserResponse.decode(new _m0.Reader(data)),
    );
  }

  getMyProfile(request: GetMyProfileRequest): Promise<GetMyProfileResponse> {
    const data = GetMyProfileRequest.encode(request).finish();
    const promise = this.rpc.request('user.UserService', 'getMyProfile', data);
    return promise.then((data) =>
      GetMyProfileResponse.decode(new _m0.Reader(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
