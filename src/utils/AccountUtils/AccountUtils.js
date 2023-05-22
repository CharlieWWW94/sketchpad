import HTTPWrapper from "../HTTPWrapper/HTTPWrapper";

class AccountUtils {
  async createAccount(username, password) {
    const wrapper = new HTTPWrapper('POST', 'registrations', {
      user: {
        username,
        password
      }
    })
    const res = await wrapper.perform();

    if (res.status === 200) {
       return res;
    } else {
      return {message: "That didn't work."}
    }
  }

  async login(username, password) {
    const wrapper = new HTTPWrapper('POST', 'sessions', {
      user: {
        username,
        password
      }
    })
    const res = await wrapper.perform();

    if (res.status === 200) {
       return res;
    } else {
      return {message: "That didn't work."}
    }
  }

  async logout(user_id) {
    const wrapper = new HTTPWrapper('DELETE', `sessions/${user_id}`, {})
    const res = await wrapper.perform();

    if (res.status === 200) {
       return res;
    } else {
      return {message: "That didn't work."}
    }
  }
}

export default new AccountUtils();

