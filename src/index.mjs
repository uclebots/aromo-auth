import https from 'https'
import fs from 'fs'
import api from './api'
import conn from './dbconn'


let 
    port = process.env.WEBSITE_PORT,
    certificateDirectory = process.env.CERTIFICATE_DIR,
    credentials = {
        key: fs.readFileSync(`${certificateDirectory}/key.pem`), 
        cert: fs.readFileSync(`${certificateDirectory}/certificate.pem`)
    }    

https.createServer(credentials, api).listen(port, () => {
    console.log(`Server running at https://localhost:${port}`)
})

const dirname = 'tmp'
if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname)
}

fs.writeFile(dirname + '/pid', process.pid, (err) => {
    if (err) console.log(err)
})
