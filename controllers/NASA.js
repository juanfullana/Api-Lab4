const { request, response } = require("express")
const axios = require('axios').default;
const key = process.env.API_KEY;

const getCercanos = (req = request, res = response) => {
    const date = req.query.date

    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2005-8-8&end_date=2005-8-15&api_key=${key}`)
    .then ((response) => {
        var objects = response.data.near_earth_objects

        // date
        if (date) {
            objects = objects[date]
        }

        // all
        res.status(200).json(objects);
    })
    .catch((err) => {
        res.send(`Error: ${err}`)
    })

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

module.exports = {
    getCercanos,
    getObjeto,
}
