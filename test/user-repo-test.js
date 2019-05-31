import chai from 'chai'
import UserRepo from '../src/user-repo'
import DbConnection from '../src/dbconn'
    
const expect = chai.expect,
    username = 'lagarto',
    password = 'juancho'



describe('User repo integration test', function () {    
    let repo = new UserRepo();
    before(function() {
        repo.init()
    })

    after(function() {
        let conn = DbConnection.get()
        conn.end()
    })
     
    it('new user should create one', async () => {
        let res = await repo.add(username, password)
            .then(result => {
                return result
            })
            .catch(err => {
                console.log(err)
            })
        expect(res).not.to.be.a('null')
    })
})
