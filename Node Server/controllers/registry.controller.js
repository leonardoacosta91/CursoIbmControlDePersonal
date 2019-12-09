const fs = require('fs');
const Registry = require('../models/registry.model.js');

// Create and Save a new Registry
exports.create = (req, res) => {

    console.log('retrievieng data')
    console.log(req.body);
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Registry content can not be empty"
        });
    }

    // Create a Registry
    const registry = new Registry({
        source: req.body.source || "no place targeted", 
        name: req.body.name,
        score : req.body.score
    });

    // Save Registry in the database
    registry.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the registry."
        });
    });
};

// check if someone is active
exports.checkStatus = (req, res) => {
    console.log(req.body);
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Query content can not be empty"
        });
    }
    let user = req.body.id;
    console.log(user);
    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    let tomorrow = new Date(today);
    tomorrow.setDate (tomorrow.getDate()+1);

    Registry.find({ createdAt: { $gte: today, $lt: tomorrow }})
    
    .then(response => {
        //console.log(registry);
        const workers = ['Leonardo', 'Nicolas', 'Ricardo'];
        let userStatus = 0;
        let usersArrived = [];
        let usersLeft = [];
        
        for (var i = 0; i < response.length; i++) {
            for (var j=0; j < workers.length; j++){
                if (response[i].name == workers[j]){
                    usersArrived[j] = true;
                    if(response[i].source=='exitCam'){
                        usersLeft[j] = true;
                    }
                }
                //console.log(activeUsers[j])
            }
            //let registryDate = new Date(response[i].createdAt);              
        }

        if (usersArrived[user] == true){
            if(usersLeft[user] == true){
                userStatus = 2;
            } else {
                userStatus = 1;
            }
        } 
        res.send({'userStatus': userStatus});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving registries."
        });
    });

}

// Retrieve and return all registries from the database.
exports.findAll = (req, res) => {
    Registry.find()
    .then(registry => {
        res.send(registry);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving registries."
        });
    });
};

// Retrieve and return all registries at a specific date.
exports.findByDate = (req, res) => {
    let receivedDate = req.params.date;
    console.log(receivedDate);
    let today = new Date(receivedDate);
    today.setHours (today.getHours()+3);
    //today.setHours(0);
    //today.setMinutes(0);
    let tomorrow = new Date(today);
    tomorrow.setDate (tomorrow.getDate()+1);

    console.log(today);
    console.log(tomorrow);

    Registry.find({ createdAt: { $gte: today, $lt: tomorrow }})
    .then(registry => {
        res.send(registry);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving registries."
        });
    });
};

// Find last exit entry for a day
exports.findOneExit = (req, res) => {
    let status = false;
    let date = new Date();
    var testDate = new Date(date);
    testDate.setDate (testDate.getDate()+1);

    Registry.findOne({ 'name': req.params.name, 'createdAt': { $gte: date, $lt: testDate }, sort: { 'createdAt' : -1 }})
    .then(registry => {
        if(!registry) {
            res.send(true);         
        }
        res.send(status);


    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Registry not found with id " + req.params.registryId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving registry with id " + req.params.registryId
        });
    });
};


// Find a single registry with a registryId
exports.findOne = (req, res) => {
    Registry.findById(req.params.registryId)
    .then(registry => {
        if(!registry) {
            return res.status(404).send({
                message: "Registry not found with id " + req.params.registryId
            });            
        }
        res.send(registry);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Registry not found with id " + req.params.registryId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving registry with id " + req.params.registryId
        });
    });
};


// Check if a single user is at the office
exports.checkIfIsAtTheOffice = (req, res) => {
    let code = req.params.code;
    console.log(code);

    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    let tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    console.log(today);
    console.log(tomorrow);

    Registry.find({ createdAt: { $gte: today, $lt: tomorrow } })

    .then(response => {
        //console.log(registry);
        const workers = ['Ashton Kutcher', 'Adam Sandler', 'Adele', 'bella thorne','Leonardo', 'Nicolas', 'Ricardo'];
        let userStatus = 0;
        let usersArrived = [];
        let usersLeft = [];

        for (var i = 0; i < response.length; i++) {
            for (var j = 0; j < workers.length; j++) {
                if (response[i].name == workers[j]) {
                    if (response[i].source == 'exitCam') {
                        usersLeft[j] = true;
                    } else {
                        usersArrived[j] = true;
                    }
                }
                //console.log(activeUsers[j])
            }
            //let registryDate = new Date(response[i].createdAt);              
        }

        if (usersArrived[code] == true) {
            if (usersLeft[code] == true) {
                userStatus = 2;
            } else {
                userStatus = 1;
            }
        }
        res.send({ 'userStatus': userStatus });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving registries."
        });
    });


};


// Update a registry identified by the registryId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Registry content can not be empty"
        });
    }

    // Find registry and update it with the request body
    Registry.findByIdAndUpdate(req.params.registryId, {
        name: req.body.name || "Untitled Registry",
        source: req.body.source
    }, {new: true})
    .then(registry => {
        if(!registry) {
            return res.status(404).send({
                message: "Registry not found with id " + req.params.registryId
            });
        }
        res.send(registry);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Registry not found with id " + req.params.registryId
            });                
        }
        return res.status(500).send({
            message: "Error updating registry with id " + req.params.registryId
        });
    });
};

// Delete a registry with the specified registryId in the request
exports.delete = (req, res) => {
    Registry.findByIdAndRemove(req.params.registryId)
    .then(registry => {
        if(!registry) {
            return res.status(404).send({
                message: "Registry not found with id " + req.params.registryId
            });
        }
        res.send({message: "Registry deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Registry not found with id " + req.params.registryId
            });                
        }
        return res.status(500).send({
            message: "Could not delete registry with id " + req.params.registryId
        });
    });
};