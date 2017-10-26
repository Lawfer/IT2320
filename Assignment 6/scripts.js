var Main = {};
Main.Person = function(firstName, lastName, actorFirstName, actorLastName, pic)
{
    this.FirstName = firstName;
    this.LastName = lastName;
    this.ActorFirstName = actorFirstName;
    this.ActorLastName = actorLastName;
    this.Pic = pic;
}

Main.Person.prototype.GetCharacterName = function()
    {
        var Char = this.FirstName + " " + this.LastName;
        return Char;
    }
    
Main.Person.prototype.GetActorName = function()
    {
        return this.ActorFirstName + " " + this.ActorLastName
    };
Main.Person.prototype.GetImage = function(src)
    {
    return "<img src='" + this.Pic + "'>" 
    };
Main.Person.prototype.CreateTable = function()
{
    var x = this.GetImage();
    var y = this.GetCharacterName();
    var z = this.GetActorName();
    var table = document.getElementById("HouseStark");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = x;
    cell2.innerHTML = y;
    cell3.innerHTML = z;
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