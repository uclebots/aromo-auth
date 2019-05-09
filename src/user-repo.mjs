import ConnectionPool from './dbconn'

export default class UserRepo {
    init() {
        this.conn = ConnectionPool.get()
        this.conn.query("CREATE TABLE IF NOT EXISTS user(id INT AUTO_INCREMENT, user varchar(255) NOT NULL, password varchar(255) NOT NULL, PRIMARY KEY (id))",
            (err, result) => {
                if (err) throw err;
            })
    }

    find(username) {
        return new Promise((resolve, reject) => {
            this.conn.query({sql:"SELECT id, user, password FROM user where user = ?",
                values:[username]},
            (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result[0])
                }
            })
        })
    }
}