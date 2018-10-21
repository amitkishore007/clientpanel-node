const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({

    firstname:{
        type: String,
        required: [true, 'Firstname is required'],
        validate:{
            validator: (firstname)=> firstname.length > 2,
            message: "firstname must be atleast 3 characters long"
        }
    },
    lastname:{
        type: String,
        required: [true, 'Firstname is required'],
    },
    email:{
        type: String,
        required: [true, 'Email Address is required']
    },
    phone:{
        type: Number,
        required: [true, 'Phone number is required'],
        validate: {
            validator: (phone) => phone.toString().length == 10,
            message: "Phone number must be 10 digits long"
        }
    },
    balance: {
        type: Number,
        default: 0
    }
});

const Client = mongoose.model('client', ClientSchema);

module.exports = Client;
