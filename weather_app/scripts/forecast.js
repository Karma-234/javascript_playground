const key = 'nyYjDa2TaV8AXnpNGpYfsA6E1kNdxCKq';


const getCity = async (city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const resp = await fetch(base + query,{'mode':'no-cors'});
    const data = await  resp.json();
    return data;

}
getCity('manchester').then(data=>{});



// Sugar Syntax of Writing class.
class User1 {
     name;
     number

    constructor(userName, number){
this.name = userName;
this.number = number;
    }
   login(){
    console.log(`${this.name} just logged in`);
    return this;
   }
   logout(){
    console.log(`${this.name} just logged out`);
    return this;
   }
}

//Inheritance with modern class declaration.
class Admin1 extends User1 {
    constructor(name, number, title){
        super(name,number);
        this.title = title;
    }
    clearUsers(){
        console.log(`${this.name} has cleared all users`);
    }
}


// Prototype model of writing class
function User(userName, number){
    this.userName = userName;
    this.number = number;

}
User.prototype.login = function(){
    console.log(`${this.userName} just logged in`);
    return this;

}
User.prototype.logout = function(){
    console.log(`${this.userName} just logged out`);
    return this;
}

// Inheritance with prototype model
function Admins (userName,number,title){
    User.call(this,userName,number);
    this.title = title;
}
Admins.prototype = Object.create(User.prototype);
Admins.prototype.clearUsers = function(){console.log(`${this.title} has cleared all users`);};


const firstUser = new User('alidev',44);
const secondUser = new User1('kamzydev',63);
const firstAdmin = new Admin1('adminKamzy',32,'Super Admin');
const secondAdmin = new Admins('superadminKamzy',32,'Super Admin');
firstUser.login().logout();
secondUser.login().logout();
firstAdmin.login().logout().clearUsers();
secondAdmin.login().logout().clearUsers();