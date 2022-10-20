import http from 'http'
import api from './api/api.js'

const server = http.createServer(api)

server.listen(3000)
server.on('error', (error)=>{
    console.error('error al iniciar el servidor')
})
server.on('listening', ()=>{
    console.log('Servidor escuchando')
})