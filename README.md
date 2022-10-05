# Api-Lab4
API en Node y Express.js que consume el API de la NASA para consultar sobre objetos celestes que circularon en nuestro sistema solar entre las fechas 2005-8-8 y 2005-8-15, (usando la ruta /cercanos). Podemos también consultar por un objeto en particular si sabemos su id (/cercanos/:id).

Para filtrar un dia específico de esa semana podemos usar /cercanos?date=YYYY-M-D

Heroku - pendiente

Para realizar consultas hay que adquirir una API_KEY en la pagina web de la NASA y configurar el archivo .env

Recordar utilizar el comando npm install luego de clonar

