//--let
let favoriteCityId = 'rome';
console.log(favoriteCityId);
favoriteCityId = 'paris';
console.log(favoriteCityId);
//--const
const citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro'];
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
console.log(othersCitiesId.length);
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
    static getDefaultTrip(){
        let rio = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        return rio;
    }
    toString(){
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`;
    }

}
let parisTrip = new Trip('paris', 'Paris','img/paris.jpg');
console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());
parisTrip.price=100;
console.log(parisTrip.toString());
let defaultTrip=Trip.getDefaultTrip();
console.log(defaultTrip);
console.log(defaultTrip.toString());

//Heritage
class FreeTrip extends Trip{
    constructor(id,name,imageUrl){
        super(id,name,imageUrl);
        this.price=0;
    }
}
let freeTrip= new FreeTrip('nantes','Nantes','img/nantes.jpg');
console.log(freeTrip.toString());

//Promise, Set, Map, Arrow Function
class TripService {
    constructor() {
        this.tripSet = new Set();
        this.tripSet.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.tripSet.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.tripSet.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {
        return new Promise((resolve, reject) => {
        setTimeout( () => {
        for(const t in this.tripSet){
            if(t.name===tripName){
                resolve(t);
            }
        }
       reject(`No trip with name ${tripName}.`);
      }, 2000)
    });
    }
}

let tripService = new TripService();
tripService.findByName('Nantes')
.then(tripFound => console.log('Trip found ',tripFound))
.catch(err => console.log(err));


class PriceService {
    constructor() {
        this.tripMap = new Map();
        this.tripMap.set('paris', new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.tripMap.set('rio-de-janeiro',new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
        this.tripMap.get('paris').price=100;
        this.tripMap.get('rio-de-janeiro').price=800;
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                for(const t of this.tripMap.keys()){
                    if(t===tripId){
                        resolve(this.tripMap.get(t).price);
                    }
                }
                        reject(`No trip with name ${tripId} found.`);
            }, 2000)
        });
    }
}

let priceService = new PriceService();
priceService.findPriceByTripId('paris')
.then(priceFound => console.log('Price found', priceFound))
.catch(err => console.log(err));