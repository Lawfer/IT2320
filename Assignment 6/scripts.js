var Main = {};

Main.Person = function(firstName, lastName, actorFirstName, actorLastName, image)
{
    this.FirstName = firstName;
    this.LastName = lastName;
    this.ActorFirstName = actorFirstName;
    this.ActorLastName = actorLastName;
    this.image = Image;
}

Main.Person.prototype.GetCharacterName = function()
    {
        return this.FirstName + " " + this.LastName
    };
    
Main.Person.prototype.GetActorName = function()
    {
        return this.ActorFirstName + " " + this.ActorLastName
    };
Main.Person.prototype.GetImage = function()
    {
        var x = new Image(140, 209);
        x.src = this.pic;
        document.body.appendChild(x);
        return "<img src='" + this.x.src + "'>"
    };
Main.Person.prototype.CreateTable = function()
{
    var table = document.getElementById("HouseStark");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = this.GetImage;
    cell2.innerHTML = this.GetCharacterName;
    cell3.innerHTML = this.GetActorName;
}

Main.Ned = new Main.Person("Ned", "Stark", "Sean", "Bean", "nedstark.jpg");
Main.Catelyn = new Main.Person("Catelyn", "Stark", "Michelle", "Fairley", "catelynstark.jpg");
Main.Robb = new Main.Person("Robb", "Stark", "Richard", "Madden", "robbstark.jpg");
Main.Sansa = new Main.Person("Sansa", "Stark", "Sophie", "Turner", "sansastark.jpg");
Main.Arya = new Main.Person("Arya", "Stark", "Maisie", "Williams", "aryastark.jpg");
Main.Bran = new Main.Person("Bran", "Stark", "Issac", "Wright", "branstark.jpg");
Main.Rickon = new Main.Person("Rickon", "Stark", "Art", "Parkinson", "rickonstark.jpg");

Main.Ned.CreateTable();
Main.Catelyn.CreateTable();
Main.Robb.CreateTable();
Main.Sansa.CreateTable();
Main.Arya.CreateTable();
Main.Bran.CreateTable();
Main.Rickon.CreateTable();