import UserRepo from './user-repo'

let userRepo = new UserRepo()

export default {
    validate: function(credentials) {
        let user = userRepo.find(credentials.username)
        if (user.password != credentials.password) {
            throw 'bad password'
        } 
    }
}