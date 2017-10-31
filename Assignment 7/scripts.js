var Stark = {"family": [
    {"firstName":"Eddard", "lastName":"Stark", "actorFirstName":"Sean", "actorLastName":"Bean", "status":"deceased"},
    {"firstName":"Catelyn", "lastName":"Stark", "actorFirstName":"Michelle", "actorLastName":"Fairley", "status":"deceased"},
    {"firstName":"Robb", "lastName":"Stark", "actorFirstName":"Richard", "actorLastName":"Madden", "status":"deceased"},
    {"firstName":"Sansa", "lastName":"Stark", "actorFirstName":"Sophie", "actorLastName":"Turner", "status":"living"},
    {"firstName":"Arya", "lastName":"Stark", "actorFirstName":"Maisie", "actorLastName":"Williams", "status":"living"},
    {"firstName":"Bran", "lastName":"Stark", "actorFirstName":"Issac", "actorLastName":"Wright", "status":"living"},
    {"firstName":"Rickon", "lastName":"Stark", "actorFirstName":"Art", "actorLastName":"Parkinson", "status":"deceased"},
    {"firstName":"Jon", "lastName":"Snow", "actorFirstName":"Kit", "actorLastName":"Harrington", "status":"living"}
]}

var Lannister = {"family":[
    {"firstName":"Tywin", "lastName":"Lannister", "actorFirstName":"Charles", "actorLastName":"Dance", "status":"deceased"},
    {"firstName":"Cersi", "lastName":"Lannister", "actorFirstName":"Lena", "actorLastName":"Headey", "status":"living"},
    {"firstName":"Jaime", "lastName":"Lannister", "actorFirstName":"Nikolaj", "actorLastName":"Coster-Waldau", "status":"living"},
    {"firstName":"Tyrian", "lastName":"Lannister", "actorFirstName":"Peter", "actorLastName":"Dinklage", "status":"living"},
    {"firstName":"Joffrey", "lastName":"Baratheon", "actorFirstName":"Jack", "actorLastName":"Gleeson", "status":"deceased"},
    {"firstName":"Myrcella", "lastName":"Baratheon", "actorFirstName":"Nell", "actorLastName":"Free", "status":"deceased"},
    {"firstName":"Tommen", "lastName":"Baratheon", "actorFirstName":"Dean-Charles", "actorLastName":"Chapman", "status":"deceased"}
]}
function CallStark() {
    var divId = document.getElementById("HouseStark")
    for(var i=0;i<Stark.family.length;i++)
        for(var keys in Stark.family[i]){
        console.log(keys +": "+Stark.family[i][keys]);
    divId.innerHTML = divId.innerHTML + "<br/>"+ keys +": "+Stark.family[i][keys];
}}

function CallLannister() {
    var divId = document.getElementById("HouseLannister")
    for(var i=0;i<Lannister.family.length;i++)
        for(var keys in Lannister.family[i]){
        console.log(keys +": "+Lannister.family[i][keys]);
    divId.innerHTML = divId.innerHTML + "<br/>"+ keys +": "+Lannister.family[i][keys];
}}