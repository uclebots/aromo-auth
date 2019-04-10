import https from 'https'
import fs from 'fs'
import api from './api'


let 
    certificateDirectory = process.env.CERTIFICATE_DIR,
    credentials = {
        key: fs.readFileSync(`${certificateDirectory}/key.pem`), 
        cert: fs.readFileSync(`${certificateDirectory}/certificate.pem`)
    }    

https.createServer(credentials, api).listen(8000, () => {
    console.log('Server running at https://localhost:8000')
})

const dirname = 'tmp'
if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname)
}

fs.writeFile(dirname + '/pid', process.pid, (err) => {
    if (err) console.log(err)
})
