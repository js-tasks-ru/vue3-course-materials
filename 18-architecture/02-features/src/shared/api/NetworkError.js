export class NetworkError extends Error {
  constructor(request) {
    super('Network Error');
    this.request = request;
  }
}
