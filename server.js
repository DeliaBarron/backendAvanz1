import http from 'http'
import api from './api/api.js'

const server = http.createServer(api)

server.listen(3000,()=>{
    console.log('ya funciona hdspm')
})