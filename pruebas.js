var foo = [ {
    "name" : "Muzzy in Gondoland",
    "genre" : "Animation",
    "year" : "1986",
    "characters" : [ "Muzzy", "King", "Queen", "Pricess Sylvia" ]
}, { 
    "name" : "Muzzy Come Back",    
    "genre" : "Animation",
    "year" : "1989",
    "characters": ["Muzzy", "Bob", "Amanda", "King", "Queen" ]
} ];

var bar = foo.slice();

console.log(foo[0].name)