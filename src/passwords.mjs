import crypto from 'crypto'
import argon2 from 'argon2'

function salt() {
    return crypto.randomBytes(48).toString('base64')
}

function hash(pwd) {
    return crypto.createHash('sha512')
        .update(pwd)
        .digest('hex')
}

function protect(saltedPwd) {
    return argon2.hash(saltedPwd)
}

export default {
    transform: function(pwd) {
        let prefix = salt()
        return protect(prefix + hash(pwd))
            .then(hash => {
                return prefix + '-' + hash
            })
    },
    verify: function(pwd, saltedProtected) {
        let [salt, protectedForm] = saltedProtected.split('-')
        return argon2.verify(protectedForm, salt + hash(pwd))
    }
}