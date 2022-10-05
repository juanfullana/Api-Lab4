const { request, response } = require("express")
const axios = require('axios').default;
const key = process.env.API_KEY;
const getCercanos = (req = request, res = response) =>{

    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2005-8-8&end_date=2005-8-15&api_key=${key}`)
    .then ((response) => {
        res.status(200).json(response.data);
    })
    .catch((error)=>console.log(error))

}
const getObjeto = (req = request, res = response) =>{
    const {id} = req.params;
    axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${key}`)
    .then ((response) => {
        res.status(200).json(response.data);
    })
    .catch((error)=>{
        res.status(400).send('ID ERRONEO'),
        console.log(error);
    })
}

const getPeligrosos = (req = request, res = response) =>{
    //let {is_potentially_hazardous_asteroid} = req.query
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2005-8-8&end_date=2005-8-15&api_key=${key}`)
    .then ((response) => {
        let near_earth_objects = response.data
        let peligrosos = near_earth_objects.filter((is_potentially_hazardous_asteroid == true))
        res.json(peligrosos)
    })
}

module.exports = {
    getCercanos,
    getObjeto,
    getPeligrosos
}
