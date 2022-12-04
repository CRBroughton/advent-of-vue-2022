import { httpClient } from './httpWrapper'
import type { ChristmasJokeResponse } from './types'

export class ApiClient {
  private endpoint: string

  constructor() {
    this.endpoint = 'https://v2.jokeapi.dev/joke/christmas'
  }

  async fetchChristmasJoke() {
    // Type here should be the root response type
    return httpClient.get<ChristmasJokeResponse>({ url: this.endpoint })
  }
}
