class AccountUtils {
  // works
  async createAccount(email, password) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      })
    }
    try {
      const res = await fetch('http://127.0.0.1:3000/users', options)
      // const resJSON = await res.json();
      console.log(res);
    } catch(err) {
      console.log(err)
    }
  }

  //works
  async login(email, password) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      })
    }
    try {
      const res = await fetch('http://127.0.0.1:3000/users/sign_in', options)
      // const resJSON = await res.json();
      return res
    } catch(err) {
      console.log(err)
    }
  }
  // Also works
  async logout(header) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': header
      },
      // body: JSON.stringify({
      //   user: {
      //     email,
      //   }
      // })
    }

    const res = await fetch('http://127.0.0.1:3000/users/sign_out', options)
    const resJSON = await res.json();
    return resJSON;
  }
}

export default new AccountUtils();

