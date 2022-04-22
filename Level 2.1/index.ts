// 1.

function getFirstWord(a: string){
    return a.split(/ +/)[0].length;
}
console.log(getFirstWord('Hello World!'))

function getUserNamings(a: {name: string, surname: string}): {fullname: string, initials: string} {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}
console.log(getUserNamings({name: 'Roman', surname: 'Volkov'}))

function getAllProductNames(a: {products: {name: string}[]}): {} | []{
    return a?.products?.map(prod => prod?.name) || [];
}

let prods = [{"name": 'Milk'}, {"name": 'Coffee'}, ]
console.log(getAllProductNames({products: [prods[0], prods[1]]}))


function hey(a: {name: () => string, cuteness?: number, coolness?: number}) {
    return "hey! i'm " + a.name();
}
console.log(hey({name: () => "roma", cuteness: 100}))
console.log(hey({name: () => "vasya", coolness: 100}))

class Pet{
    namePet: string
    constructor(name: string) {
        this.namePet = name
    }
    name(){return this.namePet}
}

class Cat extends Pet{
    alive: boolean
    constructor(name: string, alive: boolean) {
        super(name)
        this.alive = alive
    }
}

class Dog extends Pet{
    years: number
    constructor(name: string, years: number) {
        super(name);
        this.years = years
    }
}

function hey1(abstractPet: {name: () => string}): string{
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("myavchik", true)
let b = new Dog("gavchik", 333)
console.log(hey1(a))
console.log(hey1(b))


function hey2(a: {name: ()=> string, type: string, cuteness?: number, coolness?: number}) {
    return "hey! i'm " + a.name() + " "
        + (a.type === "cat" ? ("cuteness: "+a.cuteness) : ("coolness: "+a.coolness))
}
console.log(hey2({name: () => "roma", type: "cat", cuteness: 100}))
console.log(hey2({name: () => "vasya", type: "dog", coolness: 100}))

function stringEntries(a: [] | {}) {
    return Array.isArray(a) ? a : Object.keys(a)
}
console.log(stringEntries([1,2,3,3,3,3,3,3] ) )
console.log(stringEntries({"test": "123", "work": false} ) )


async function world(a: number) {
    return "*".repeat(a)
}
const hello = async () => {
    return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))