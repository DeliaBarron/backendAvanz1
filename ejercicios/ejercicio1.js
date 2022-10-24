import Restaurant from "../api/models/Restaurant.js"
import connect from "./database.js"

connect()

//imprimir todos los restaurantes
async function run() {
    const restaurants = await Restaurant.find()
    console.log(restaurants)
}
run()
