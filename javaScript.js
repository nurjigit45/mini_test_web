const deley = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms))
}

const rest = (url) => {
  console.log('start rest')
  return deley(3).then(() => {
    return fetch(url).then((response) => response.json())
  })
}

rest('https://jsonplaceholder.typicode.com/users')
  .then((data) => {
    for (const iterator of data) {
      console.log(iterator.name)
    }
  })
  .catch((e) => console.error(e))
  .finally(() => console.log('finish'))
