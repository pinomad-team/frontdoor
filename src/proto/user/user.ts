/* eslint-disable */
import { Timestamp } from '../google/protobuf/timestamp';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'user';

export enum AuthType {
  UNKNOWN = 0,
  EMAIL = 1,
  PHONE_NUMBER = 2,
  FIREBASE = 3,
  UNRECOGNIZED = -1,
}

export function authTypeFromJSON(object: any): AuthType {
  switch (object) {
    case 0:
    case 'UNKNOWN':
      return AuthType.UNKNOWN;
    case 1:
    case 'EMAIL':
      return AuthType.EMAIL;
    case 2:
    case 'PHONE_NUMBER':
      return AuthType.PHONE_NUMBER;
    case 3:
    case 'FIREBASE':
      return AuthType.FIREBASE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AuthType.UNRECOGNIZED;
  }
}

export function authTypeToJSON(object: AuthType): string {
  switch (object) {
    case AuthType.UNKNOWN:
      return 'UNKNOWN';
    case AuthType.EMAIL:
      return 'EMAIL';
    case AuthType.PHONE_NUMBER:
      return 'PHONE_NUMBER';
    case AuthType.FIREBASE:
      return 'FIREBASE';
    case AuthType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface User {
  id: string;
  onboarded?: boolean | undefined;
  name?: string | undefined;
  displayName?: string | undefined;
  userAuths: UserAuth[];
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
  email?: string | undefined;
  phoneNumber?: string | undefined;
}

export interface UserAuth {
  id: string;
  authType: AuthType;
  externalId?: string | undefined;
  userId?: string | undefined;
}

function createBaseUser(): User {
  return {
    id: '',
    onboarded: undefined,
    name: undefined,
    displayName: undefined,
    userAuths: [],
    createdAt: undefined,
    modifiedAt: undefined,
    email: undefined,
    phoneNumber: undefined,
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.onboarded !== undefined) {
      writer.uint32(16).bool(message.onboarded);
    }
    if (message.name !== undefined) {
      writer.uint32(26).string(message.name);
    }
    if (message.displayName !== undefined) {
      writer.uint32(34).string(message.displayName);
    }
    for (const v of message.userAuths) {
      UserAuth.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.modifiedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.modifiedAt),
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.email !== undefined) {
      writer.uint32(66).string(message.email);
    }
    if (message.phoneNumber !== undefined) {
      writer.uint32(74).string(message.phoneNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.onboarded = reader.bool();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.displayName = reader.string();
          break;
        case 5:
          message.userAuths.push(UserAuth.decode(reader, reader.uint32()));
          break;
        case 6:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 7:
          message.modifiedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 8:
          message.email = reader.string();
          break;
        case 9:
          message.phoneNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      onboarded: isSet(object.onboarded)
        ? Boolean(object.onboarded)
        : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      displayName: isSet(object.displayName)
        ? String(object.displayName)
        : undefined,
      userAuths: Array.isArray(object?.userAuths)
        ? object.userAuths.map((e: any) => UserAuth.fromJSON(e))
        : [],
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      modifiedAt: isSet(object.modifiedAt)
        ? fromJsonTimestamp(object.modifiedAt)
        : undefined,
      email: isSet(object.email) ? String(object.email) : undefined,
      phoneNumber: isSet(object.phoneNumber)
        ? String(object.phoneNumber)
        : undefined,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.onboarded !== undefined && (obj.onboarded = message.onboarded);
    message.name !== undefined && (obj.name = message.name);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    if (message.userAuths) {
      obj.userAuths = message.userAuths.map((e) =>
        e ? UserAuth.toJSON(e) : undefined,
      );
    } else {
      obj.userAuths = [];
    }
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.modifiedAt !== undefined &&
      (obj.modifiedAt = message.modifiedAt.toISOString());
    message.email !== undefined && (obj.email = message.email);
    message.phoneNumber !== undefined &&
      (obj.phoneNumber = message.phoneNumber);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? '';
    message.onboarded = object.onboarded ?? undefined;
    message.name = object.name ?? undefined;
    message.displayName = object.displayName ?? undefined;
    message.userAuths =
      object.userAuths?.map((e) => UserAuth.fromPartial(e)) || [];
    message.createdAt = object.createdAt ?? undefined;
    message.modifiedAt = object.modifiedAt ?? undefined;
    message.email = object.email ?? undefined;
    message.phoneNumber = object.phoneNumber ?? undefined;
    return message;
  },
};

function createBaseUserAuth(): UserAuth {
  return { id: '', authType: 0, externalId: undefined, userId: undefined };
}

export const UserAuth = {
  encode(
    message: UserAuth,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.authType !== 0) {
      writer.uint32(16).int32(message.authType);
    }
    if (message.externalId !== undefined) {
      writer.uint32(26).string(message.externalId);
    }
    if (message.userId !== undefined) {
      writer.uint32(34).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserAuth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.authType = reader.int32() as any;
          break;
        case 3:
          message.externalId = reader.string();
          break;
        case 4:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserAuth {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      authType: isSet(object.authType) ? authTypeFromJSON(object.authType) : 0,
      externalId: isSet(object.externalId)
        ? String(object.externalId)
        : undefined,
      userId: isSet(object.userId) ? String(object.userId) : undefined,
    };
  },

  toJSON(message: UserAuth): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.authType !== undefined &&
      (obj.authType = authTypeToJSON(message.authType));
    message.externalId !== undefined && (obj.externalId = message.externalId);
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserAuth>, I>>(object: I): UserAuth {
    const message = createBaseUserAuth();
    message.id = object.id ?? '';
    message.authType = object.authType ?? 0;
    message.externalId = object.externalId ?? undefined;
    message.userId = object.userId ?? undefined;
    return message;
  },
};

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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === 'string') {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
