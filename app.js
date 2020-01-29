//--let
let favoriteCityId = 'rome';
console.log(favoriteCityId);
favoriteCityId = 'paris';
console.log(favoriteCityId);
//--const
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
//citiesId = [];
citiesId.push('tokyo');
console.log(citiesId);
//--Création d’objet
function getWeather(cityId){
    let city = cityId.toUpperCase();
    let temperature = 20;
    return {city, temperature}
}
let weather = getWeather(favoriteCityId);
console.log(weather);
//--Affectation destructurée
let {city}=getWeather(favoriteCityId);
console.log(city);
let {temperature}=getWeather(favoriteCityId);
console.log(temperature);
//--Rest operator
let [parisId, nycId, ...othersCitiesId]=citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId);
//Classe
class Trip{
    constructor(id, name, imageUrl){
        this.id=id;
        this.name=name;
        this.imageUrl=imageUrl;
    }
   
    get price(){
        return this._price;
    }
    set price(newPrice){
        this._price=newPrice;
        }
    toString(){
        return [this.id,this.name,this.imageUrl, this._price];
    }
    static getDefaultTrip(){
        return ["rio-de-janeiro", "Rio de Janeiro","img/rio-de-janeiro.jpg"]
    }
}
let parisTrip = new Trip("paris", "Paris","img/paris.jpg");
console.log(parisTrip);
console.log(parisTrip.name);
//console.log(parisTrip.toString());
parisTrip.price=100;
console.log(parisTrip.toString());
console.log(Trip.getDefaultTrip());