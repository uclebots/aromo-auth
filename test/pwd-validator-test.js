import PasswordValidator from '../src/pwd-validator'
import UserRepo from '../src/user-repo'

import sinon from 'sinon'

describe('Password validation for existing users', function () { 
let repo = new UserRepo(),
    stub = sinon.stub(repo, 'find'),
    validator = new PasswordValidator(repo)

stub.returns(new Promise((resolve, reject) => {
    resolve({username: 'bubu', password: 'blahblah'})    
}))
    it('Right password should not throw exception', function () {
        validator.validate({username: 'bubu', password: 'blahblah'})
    });
});

