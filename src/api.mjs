import express from 'express'
import UserRepo from './user-repo'
import PasswordValidator from './pwd-validator'

let app = express(),
    repo = new UserRepo(),
    validator = new PasswordValidator(repo)

repo.init()

app.use(express.json())
app.post('/sessions', function (req, res) {
    authenticate(credentials(req))
        .then((result) => {
            sendCreated(res)
        })
        .catch(() => {
            sendForbidden(res)
        })
})

function credentials(req) {
    return {username: req.body.username, password: req.body.password}
}

function authenticate(credentials) {
    return validator.validate(credentials)    
}

function sendCreated(res) {
    res.status(201).end()
}

function sendForbidden(res) {
    res.status(403).end()
}


export default app