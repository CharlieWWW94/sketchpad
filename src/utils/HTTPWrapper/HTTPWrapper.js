class HTTPWrapper {
  constructor(requestType, route, data = {}) {
    self.requestType = requestType,
    self.route = route,
    self.data = data
  }

  async perform() {
    try {
      const response = await fetch(`http://127.0.0.1:3000/${self.route}`, {
        method: self.requestType,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(self.data),
        credentials: 'include'
      });
      return response;
    } catch {
      return {status: "Request Failed."};
    }
  }
  }

  export default HTTPWrapper;
