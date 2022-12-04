export interface IHttpClient {
  get<T>(params: IHttpClientRequestParameters): Promise<T>
}

export interface IHttpClientRequestParameters {
  url: string
  payload?: {
    [key: string]: string | number
  }
}

export interface ChristmasJokeResponse {
  error: boolean
  category: string
  type: string
  setup: string
  delivery: string
  flags: Flags
  id: number
  safe: boolean
  lang: string
}

interface Flags {
  nsfw: boolean
  religious: boolean
  political: boolean
  racist: boolean
  sexist: boolean
  explicit: boolean
}
