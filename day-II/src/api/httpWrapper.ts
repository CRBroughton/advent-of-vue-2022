import axios from 'axios'
import type {
  IHttpClient,
  IHttpClientRequestParameters,
} from './types'

export class HttpClient implements IHttpClient {
  get<T>(params: IHttpClientRequestParameters): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, payload } = params

      axios.get(url, payload).then(response => resolve(response.data as T))
        .catch(response => reject(response))
    })
  }
}

export const httpClient = new HttpClient()
