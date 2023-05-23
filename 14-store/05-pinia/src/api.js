export function loginWithApi(email, password) {
  return fetch(`https://course-vue.javascript.ru/api/auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then(res => {
          throw new Error(res.message);
        });
      }
    });
}
