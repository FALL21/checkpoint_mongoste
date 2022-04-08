const express =require('express')
require('dotenv').config({path:'./.env'})
require('./bd')
const app = express()

app.use(express.json())

app.get("/all",(req,res,next)=>{
    const person= person.find();
    res.status(200).json({person})
})

app.get("/user/:id",(req,res,next)=>{
    const person= person.findById(req.params.id)
    res.status(200)
})

//Création de la personne avec le prototype  donné.
let Bou =new person({
    name:"Bou ",
    age:26,
    favoriteFoods:["Drops"]
})
Bou.save((error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        done(null,data)
    }
});

//Création  d'enregistrement multuple  avec model.create().
const Model = mongoose.Model;
var arrayOfPeople=[
    {name:"Galo",age:26,favoriteFoods:["mafé"]},
    {name:"Lamine",age:25,favoriteFoods:["mbaxal"]},
    {name:"Birame",age:23,favoriteFoods:["Omelette"]}
];

var createManyPeople = function(arrayOfPeople,done) {
    Model.create(arrayOfPeople, (error, data) => {
      if(error) {
         done(error); 
      } 
      else{
          done(null, data);
      }
    }) 
};

//Recherche avce le model.find()
Person.find({name:"Bou"},(error,done)=>{
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
})

//Recherche de id avec le model.findById().
person.findById('5d273f9ed58f5e7093b549b0',(error,data)=>{
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
})

// Effectuez des mises à jour classiques en exécutant Rechercher, Modifier, puis Enregistrer.
  var findEditThenSave = function(personId, done) {
    var foodToAdd = "hamburger";
    person.findById(personId, function (error, data) {
      if (error) {
        done(error);
      }
  
      data.favoriteFoods.push(foodToAdd);
      data.save((error, data) => (error ? done(error) : done(null, data)));
    });
  };

//Effectuer de nouvelles mises à jour sur un document à l'aide de model.findOneAndUpdate().
  var findAndUpdate = function(personName, done) {
    var ageToSet = 26;
  
    person.findOneAndUpdate(
        {name: personName}, 
        {age: ageToSet}, 
        {new: true}, 
        (err, data) => {
        if (err) {
           done(err); 
        }
        done(null, data);
      }
    )
  };

// Supprimer un document à l'aide de model.findByIdAndRemove.
  var removeById = function(personId, done) {
    Model.findByIdAndRemove(personId, (error, data) => 
    error ? 
    done(error) 
    : done(null, data));
    };


//MongoDB et Mongoose - Supprimez de nombreux documents avec model.remove().
    var removeManyPeople = function(done) {
        var nameToRemove = Bou;
        person.remove({name:nameToRemove},(error,data)=>{
        if(error)
            return console.log(error);
        done(null,data);
    });
};

//Chain Search Query Helpers pour affiner les résultats de la recherche .
var queryChain = function(done) {
    var foodToSearch = burrito;
    person.find({ favoriteFoods: foodToSearch})
    .sort({ name: 1 })
    .limit(2)
    .select({ age: 0 })
    .exec(function(error, people) {
        console.log(people);
    });
    };