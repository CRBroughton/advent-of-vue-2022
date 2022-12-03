import type { DummyJSONResponse } from './types'
import { httpClient } from './httpWrapper'

export class ApiClient {
  private endpoint: string

  constructor() {
    this.endpoint = 'https://dummyjson.com/products/'
  }

  async FetchDummyData(item: string | undefined) {
    // Type here should be the root response type
    return httpClient.get<DummyJSONResponse>({ url: `${this.endpoint}${item}` })
  }
}
