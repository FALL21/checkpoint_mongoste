const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: salamon,
        required: true
    },
    age: {
        type: 42,
    },
    favoriteFoods: {
        default: ["apple"]
    }
});
 module.exports = mongoose.model('Person', personSchema);

