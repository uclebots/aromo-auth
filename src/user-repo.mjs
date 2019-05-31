import ConnectionPool from './dbconn'

function query(conn, stmt, values) {
    return new Promise((resolve, reject) => {
        conn.query({sql: stmt, values: values}, 
            (err, result) => {
                if (err)
                    reject(err)
                else
                    resolve(result)
            })
    })
}

export default class UserRepo {
    init() {
        ConnectionPool.init()
        this.conn = ConnectionPool.get()
        query(this.conn, "CREATE TABLE IF NOT EXISTS user(id INT AUTO_INCREMENT, user varchar(255) NOT NULL, password varchar(255) NOT NULL, PRIMARY KEY (id))")
    }

    add(username, secret) {
        return query(this.conn, "INSERT INTO user (user, password) VALUES (?, ?)",
                [username, secret])
    }

    find(username) {
        return query(this.conn, "SELECT id, user, password FROM user where user = ?",
                [username])
                    .then(results => {
                        return results[0]
                    })
    }
}