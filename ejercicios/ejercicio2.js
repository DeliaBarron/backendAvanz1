import Restaurant from "../api/models/Restaurant.js";
import connect from "./database.js";

connect()
/*
_id, nombre, cocina, colonia y restaurant_id de todos los restaurantes
*/ 

//find tiene como 1er parametro el filtro de busqueda y el segundo el projection donde 1 es si y 0 es no (no mostrar/ si mostrar)

async function run(){
 const queryResult = await Restaurant.find(
    {},
    {_id:1, name:1, cuisine:1, restaurant_id:1}
    )   
    console.log(queryResult)
}
run()