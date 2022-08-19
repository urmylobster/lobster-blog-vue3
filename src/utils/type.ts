export interface IResponse<P = {}> {
  code: number;
  msg: string;
  data: P;
}

export interface IHttpParams {
  url: string,
  method: string,
  data?: object,
  params?: object
}

