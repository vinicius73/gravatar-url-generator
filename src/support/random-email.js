const randomEmail = () => fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(list => {
    return list[Math.floor(Math.random() * list.length)]
  })
  .then(user => (user.email).toLowerCase())
  .catch(e => {
    console.warn(e) // eslint-disable-line no-console
    return 'vinicius73@mail.com'
  })

export default randomEmail
