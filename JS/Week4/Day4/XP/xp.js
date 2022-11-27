//Exercise 1 : Location
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const { name, location: { country, city, coordinates: [lat, lng] } } = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//output - I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207);
//------------------------------------------------------------------

//Exercise 2: Display Student Info

function displayStudentInfo(userObj) {
    console.log(`Your full name is ${userObj.first} ${userObj.last}`)
}
displayStudentInfo({ first: 'Elie', last: 'Schoppik' });
//-------------------------------------------------------------------

//Exercise 3: User & Id

const users = { user1: 18273, user2: 92833, user3: 90315 };

const toAr = Object.entries(users);
console.log(toAr);

const ta2 = toAr.map(Element => `[${Element[0]}, ${Element[1] * 2}]`);
console.log(ta2);
//------------------------------------

//Exercise 4 : Person Class

class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member);

//output - object! because when the function new Person is called constructor create a new empty object that will be assign to "this." and body of the function modified it(them) with some properties, at the end come back a value of this. 
//------------------------------------

//Exercise 5 : Dog Class

class Dog {
    constructor(name) {
        this.name = name;
    }
};

const d = new Dog("Labrador");
console.log(d.name);

// 2
class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
};
const e = new Labrador("Sharik");
console.log(e.name);

//Exercise 6 : Challenges

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object1.number)//4
console.log(object2.number)//4
console.log(object3.number)//4
console.log(object4.number)//5

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

const an = new Animal("Tyson", "cat", "black-white");
console.log(an.type);

class Mamal extends Animal {
    constructor(name, type, color, asound) {
        super(name, type, color)
        this.asound = asound;
    }

    sound() {
        const senten = `${this.name}, ${this.type}, ${this.color},${this.asound}`;
        console.log(senten);
    }
}

const s = new Mamal("Leo", "Lion", "orange", "arrr");
const farmerCow = new Mamal("Lily", "cow", "brown-white", "mooo");

s.sound();
farmerCow.sound();