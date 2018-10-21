const Client = require('../models/Clients');

module.exports = {

    getAllClients(req, res, next) {
        Client.find({})
                .then((clients)=> res.status(200).send(clients))
                .catch(next)
    },
    create(req, res, next) {
        Client.create(req.body)
            .then((client) => res.status(200).send(client))
            .catch(next);
    }

};

