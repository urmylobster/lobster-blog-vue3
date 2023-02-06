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


export interface InsertDataType {
  postAuthor: string,
  postContent: string,
  postTitle: string,
  postsId?: string,
}
