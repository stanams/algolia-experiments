export class AbstractService {
  static checkStatus = (response) => {
    if (!response.ok) {
      return Promise.reject(response)
    }

    return response
  }

  static parseJSON = (response) => {
    return response.json()
  }

  static handleError = (response) => {
    return response.json().then(error => Promise.reject(error))
  }
}
