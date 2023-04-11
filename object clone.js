// cloning of objects
const person ={
    firstName:'Riya',
    lastName:'Shri',
    address : {
        plotNo:'19',
        street:'Gandhi street',
        city: 'Chennai',
        state: 'tamil nadu',
    }
}
// shallow copy - spread operator
const copy1= {...person};
// changing the city name of the copied object
copy1.address.city= 'Salem';
console.log(copy1);
// changes in original object 
console.log(person);
// shallow copy - Object assign method
const copy2= Object.assign({},person);
//  changing the plot no of the copied object
copy2.address.plotNo= '10';
console.log(copy2);
// changes in original object
console.log(person);
// deep copy - using Json stringfy
const copy3= JSON.parse(JSON.stringify(person));
//changing the street name of the copied object
copy1.address.street= 'nehru street';
console.log(copy3);
//original object remains unaffected
console.log(person);
