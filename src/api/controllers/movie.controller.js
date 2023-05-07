//Controlador de movies

const Pelicula = require("../models/movie.model");

//Función para obtener las peliculas de la base de datos
const getPeliculas = async(req, res) =>{
    try{
        const getPeliculas = await Pelicula.find();
        return res.json(getPeliculas)
    }catch(error){
        console.log(error);
    }
};

//Funcion para obtener peliculas basadas en el genero dado de las peliculas en la base de datos
const getPeliculasGenre = async(req, res) =>{
    try{
        const {genre} = req.params
        const peliGenre = await Pelicula.find({genre: genre})
        return res.status(200).json(peliGenre)

        }catch(error){
        console.log(error)
    }
}

//Funcion para obtener peliculas basadas en el titulo dado de las peliculas en la base de datos
const getPeliculasTitle = async (req,res) =>{
    try{
        const {title} = req.params
        const peliTitle = await Pelicula.find({title: title})
        return res.status(200).json(peliTitle)
    }catch(error){
        console.log(error)
    }
}

//Funcion que obtiene todas las peliculas con fecha de lanzamiento superior a 2010
const getPeliculas2010 = async(req, res) =>{
    try{
        const pelis2010 = await Pelicula.find({year: {$gt:2010}})
        return res.status(200).json(pelis2010)
    }catch(error){
        console.log(error)
    }
}

//Funcion para obtener una pelicula basada en el ID
const getPeliculasId = async(req, res)=>{
    try{
        const {id} = req.params
        const peliId = await Pelicula.findById(id)
        return res.status(200).json(peliId)
    }catch(error){
        console.log(error)
    }
}



module.exports = {getPeliculas, getPeliculasGenre, getPeliculasId, getPeliculasTitle, getPeliculas2010};