const mongoose = require ('mongoose');
const {schema} = mongoose;

const userSchema = new schema({
    name:{
    type:'String',
    required: true
    },
    email:{
        type:'String',
        required: true
    },
    password:{
        type:'String',
        required: true
    }
    

});

const User = mongoose.model('User', userSchema);
module.exports = User;