import { GrpcStatusCode } from '@protobuf-ts/grpcweb-transport';
import { AxiosError } from 'axios';

export type GrpcWebError = AxiosError<{
  details?: string;
  grpcCode?: GrpcStatusCode;
  message?: string;
  metadata?: Record<string, any>;
}>;
