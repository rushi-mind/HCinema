require('dotenv').config();
const express = require('express');
const app = express();
// const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocs = YAML.load('./api.yaml');
const cors = require('cors');

const index = require('./routes');
// ANY CHANGES
app.use(cors({
    origin: '*'
}));

app.use(express.static('public'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(index);

app.listen(process.env.PORT, () => {console.log('running...');});