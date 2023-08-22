let json = [{
    "id" : "naveen1", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "naveenkumar@gmail.com"
},
{
    "id" :  "naveen2", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "naveenkumar@gmail.com"
}];
// For loop
for (let i = 0; i < json.length; i++){
    let obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);
}
//For In
for (var key in json) {
    if (json.hasOwnProperty(key)) {
      console.log(json[key].id);
      //console.log(json[key].msg);
     
    }
 } 
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);

//for Each
json.forEach(function(obj) {
     console.log(obj.msg); 
    }); 