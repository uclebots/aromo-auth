import PasswordTransformer from '../src/passwords'

import assert from 'assert'
import chai from 'chai'

const expect = chai.expect

describe('New passwords', function () { 
    it('must be argon2 hashed and 64 byte salted', async () => {
        let transformed = await PasswordTransformer.transform('91Reasons!')
        let [salt, hash] = transformed.split('-')

        expect(salt).to.have.lengthOf(64)
        expect(hash).to.have.string('argon2i')
    });
   
    it('must be verified using hash and plain password', async () => {
        let res = await PasswordTransformer
            .verify('91Reasons!', 
                "/3YGs/zZliY2uZKwst8nIyg/BJxIq27jTHjVpqXah+bFBNLumAAdr5raRxgrLmNY-$argon2i$v=19$m=4096,t=3,p=1$4PnT1r2f5ru6eJHIg38xrQ$fh3LirgNyAlEyL4iGSxgLKh5op/E7YXaDSiDxGcDtNA")

        expect(res).to.be.true
    });
});

