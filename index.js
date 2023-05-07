//Llamadas a paquetes instalados

const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config();
const {connect} = require("./src/utils/db")

//Elementos necesarios para establecer la conexion a la base de datos
const app = express()
const PORT = process.env.PORT || 5000
connect()
app.use(cors())
app.use(express.json())

const routerMovie = require("./src/api/routes/movie.routes") 
app.use("/movie", routerMovie)

app.listen(PORT, ()=>{
    console.log(`Server URL: http://localhost:${PORT}`)
})