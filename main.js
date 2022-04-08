const url = 'http://localhost:5500/api'

const newUser = {
  name: 'Winicios Mauri',
  avatar:
    'https://i.picsum.photos/id/904/200/300.jpg?hmac=t7FNdMa1LwaLz0quPrFzXgqADg_jjQ4t7PuZeig7mY8',
  city: 'Nova venécia'
}

const userUpdated = {
  name: 'Clara',
  avatar:
    'https://i.picsum.photos/id/904/200/300.jpg?hmac=t7FNdMa1LwaLz0quPrFzXgqADg_jjQ4t7PuZeig7mY8',
  city: 'Vitoria'
}

function getUsers() {
  axios
    .get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser() {
  axios
    .post(url, newUser)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then(response => {
      userName.textContent = response.data.name
      userCity.textContent = response.data.city
      userId.textContent = response.data.id
      userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {
  axios
    .put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

// updateUser(3, userUpdated)
deleteUser(8)
getUsers()
getUser(3)
// addNewUser()
