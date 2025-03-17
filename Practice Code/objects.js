import _ from "loadsh";
const person1 = {
    Name : "Garvit",
    Age: 21,
    Weight: 54,
    address: {
        city: "jaitaran",
        state: "rajasthan",
        home: {
            no: 71,
            area: "geeta bhawan colony"
        }   
    },
}

const person2 = person1 // reference copy 

const person3 = {...person1}  //shallow copy at one level 
person3.Weight = 60
console.log(person3)
// console.log(person1)

person3.address.city = "bilara" //second level pe tha to change dono me hua

console.log(person3) 
// console.log(person1)

const person4 = {...person1, addesss: {...person1.address}}
person4.addesss.city = "nimaj"
console.log(person4)


const person1string = JSON.stringify(person1) //person 1 kq string me conversion

const deepPerson = JSON.parse(person1string) //string ko object me conversion
console.log(person1string)
console.log(deepPerson)  //deep copy

console.log(Object.keys(person1))
console.log(Object.values(person1))
console.log(Object.entries(person1))
console.log(_.merge({},person3,person1))
