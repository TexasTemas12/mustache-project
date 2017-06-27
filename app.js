const express = require('express')
const mustache = require('mustache-express')
const app = express()
const data = require('./data.js')
app.use(express.static(__dirname + '/public'))

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

app.get('/', function (req, res) {
  res.render('directory', {users: data.users})
})

app.get('/:user', function (req,res) {
  let user = req.params.user
  let id = 0
  for (var i = 0; i < data.users.length; i++){
    if(user === data.users[i].name){
      id = (data.users[i].id - 1)

    }
  }
  console.log(data.users[id])
  res.render('users', {users:data.users[id]})
})

app.listen(3000, function(){
  console.log('listening at 3000')
})
