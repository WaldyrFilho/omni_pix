const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);





/**
* Tipos de parâmetros:
* 
*  - Query: Parâmetros nomeados enviados na rota após "?" 
* (Filtros, paginação) 
*  - Route: Utilizados para identificar recursos
*  - Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */