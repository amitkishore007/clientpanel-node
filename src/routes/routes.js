const app  = require('../../app');
const ClientsController = require('../controllers/ClientsController');
module.exports = (app)=>{
    app.get('/api/clients',ClientsController.getAllClients);
    app.post('/api/clients',ClientsController.create);
};