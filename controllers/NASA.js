const { request, response } = require("express")
const axios = require('axios').default;
const key = process.env.API_KEY;

const getCercanos = (req = request, res = response) => {
    const date = req.query.date

    
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2005-8-8&end_date=2005-8-15&api_key=${key}`)
    .then ((response) => {
        console.log(response);
        var objects = response.data.near_earth_objects
        const {
                status, 
                statusText,
                data: {
                    element_count
                }} = response;
        // date
        if (date) {
            objects = objects[date]
        }
        

        // all
        //Ej de Estandarización de formato de salida/respuesta
        res.status(200).json({
            status,
            statusText,
            element_count,
            data:objects
        });
    })
    .catch((err) => {
        //Ej de Estandarización de formato de salida/respuesta
        const {message = '', code = ''} = err;
        res.status(400).json({
            message,
            code,
        });
        
        //res.send(`Error: ${err}`)
    })

}

const getObjeto = (req = request, res = response) =>{
    const {id} = req.params;
    axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${key}`)
    .then ((response) => {
        res.status(200).json(response.data);
    })
    .catch((error)=>{
        //Estandarizar formato de salida/respuesta (json)
        res.status(400).send('ID ERRONEO'),
        console.log(error);
    })
}

module.exports = {
    getCercanos,
    getObjeto,
}
