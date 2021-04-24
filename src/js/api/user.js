export class User {
  login(email, password, callback, errorCallback) {
    const requestBody = { email, password };
    fetch("https://ajax.test-danit.com/api/v2/cards/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          errorCallback(response);
        } else {
          return response.text();
        }
      })
      .then((token) => {
        if (token) {
          callback(token);
        }
      })
      .catch(errorCallback);
  }
}
