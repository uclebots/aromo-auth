const assert = require('assert'),
    chai = require('chai')
    chaiHttp = require('chai-http'),
    expect = chai.expect,
    port = process.env.PORT

chai.use(chaiHttp)    
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

describe('Test basico del servidor', function () {
 
 it('POST /sessions debe retornar 201 CREATED', function (done) {
        chai.request(`https://localhost:${port}`)
            .post('/sessions')
            .send({username: 'bubu', password: 'blahblah'})
            .end((err, res) => {
                expect(res).to.have.status(201)
                done()
            })
    });
});
