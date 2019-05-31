import assert from 'assert'
import chai from 'chai'
import chaiHttp from 'chai-http'
import DbConnection from '../src/dbconn'
    
const expect = chai.expect,
    port = process.env.WEBSITE_PORT,
    username = 'lagarto',
    password = 'juancho'

chai.use(chaiHttp)    
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

describe('Auth integration test', function () {    
    let conn
    before(function() {
        DbConnection.init()
        conn = DbConnection.get()
        conn.query("INSERT INTO user (user, password) VALUES (?, ?)", [username, password])
    })
     
    after(function() {
        conn.query("DELETE from user where user = ?", username)
        conn.end()
    })

    it('POST /sessions should return 201 CREATED', function (done) {
        chai.request(`https://localhost:${port}`)
            .post('/sessions')
            .send({username: username, password: password})
            .end((err, res) => {
                expect(res).to.have.status(201)
                done()
            })
    })
})
