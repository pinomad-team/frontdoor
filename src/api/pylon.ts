import axios, { AxiosInstance, AxiosResponse } from 'axios';
import config from './config.json';

interface RpcRequester {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

interface RpcResponse {
  response: number[];
}

export class PylonRpc implements RpcRequester {
  private pylonWebAPIClient: AxiosInstance;

  constructor(headers?: Record<string, any>) {
    this.pylonWebAPIClient = axios.create({
      baseURL: config[process.env.NODE_ENV || 'development'].pylonAPI,
      headers: {
        ...headers,
      },
    });
  }

  async request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array> {
    const axiosResponse = await this.pylonWebAPIClient.post<
      any,
      AxiosResponse<RpcResponse>
    >('', {
      service,
      method,
      request: Array.from(data),
    });
    return new Uint8Array(axiosResponse.data.response);
  }
}
