const PORT = 'http://localhost:4200/api/twits'
// const PORT = 'https://jsonplaceholder.typicode.com/users'
// const PORT = 'http://localhost:3000/test'

fetch(PORT, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    text: 'foo445',
  }),
})
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((e) => console.log('Errorr: ', e))
