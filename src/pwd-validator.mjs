export default class PasswordValidator {
    constructor(repo) {
        this.repo = repo
    }
    validate(credentials) {
        return this.repo.find(credentials.username)
            .then((user) => {
                if (user.password != credentials.password) {
                    throw 'bad password'
                }
            })
    }
}