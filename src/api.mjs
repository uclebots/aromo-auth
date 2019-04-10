import express from 'express'
import PasswordValidator from './pwd-validator'

let app = express()    

app.use(express.json())
app.post('/sessions', function (req, res) {
    try {
        authenticate(credentials(req))    
        sendCreated(res)
    } catch (ex) {
        sendForbidden(res)
    }
})

function credentials(req) {
    return {username: req.body.username, password: req.body.password}
}

function authenticate(credentials) {
    PasswordValidator.validate(credentials)    
}

function sendCreated(res) {
    res.status(201).end()
}

function sendForbidden(res) {
    res.status(403).end()
}


export default app