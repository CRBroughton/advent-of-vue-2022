export interface IHttpClient {
  get<T>(params: IHttpClientRequestParameters): Promise<T>
}

export interface IHttpClientRequestParameters {
  url: string
  payload?: {
    [key: string]: string | number
  }
}

export interface DummyJSONResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface Product {
  id: number
  title: string
  price: number
}
