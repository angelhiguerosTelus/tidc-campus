var Schema = mongoose.Schema;

var user = new Schema({
  name: String,
  lastName: Date,
  age: Int16Array
});

var User = mongoose.model('users', user );


// Insert a new document

let newUser = new User({
    name: 'Angel', 
    lastName: 'Higueros', 
    age: 20
})