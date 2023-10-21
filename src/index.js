const express = require('express')
const app = express()
const {carrosPeloId, carrosPeloFiltro} = require('./controladores/professores')



app.get('/carros/:id', carrosPeloId)





app.get('/carros', carrosPeloFiltro)





app.listen(3000)