const {carros} = require('../bancodedados')


const carrosPeloId = (req,res)=>{
    const carroEncontrado = carros.find((carro)=>{
        return carro.id === Number(req.params.id)
    })
    res.send(carroEncontrado)
}


const carrosPeloFiltro = (req,res)=>{
    let arrayResultado = carros
    if(req.query.marca){
        arrayResultado= carros.filter((carro)=>{
            return carro.marca===req.query.marca
        })
        
    }
    
    if(req.query.cor){
        arrayResultado= carros.filter((carro)=>{
            return carro.cor===req.query.cor
        })
        
    }
    res.send(arrayResultado)
}








module.exports = {
    carrosPeloId,
    carrosPeloFiltro

}