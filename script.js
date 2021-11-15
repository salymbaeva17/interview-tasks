// const detectionVowels = (str) => {
//     let counter = 0
//     let vowels = ["a", "e", "i", "u", "y", "o"]
//     for (let i =0; i< str.length -1; i++){
//         if(vowels.includes(str[i])){
//             counter++
//         }
//     }
//     return counter
// }
// console.log(detectionVowels("hello world!"))


// const fibonacci = num => {
//     let result = [0, 1]
//     for (let i = 2; i <= num; i++) {
//         let prevNum = result[i-1]
//         let prevNum2 = result[i-2]
//         result.push(prevNum2 + prevNum)
//     }
//     return result
// }
// console.log(fibonacci(9))


// const fibonacci2 = num => {
//     if (num < 2) return num
//     return fibonacci2(num - 1) + fibonacci2(num - 2)
// }
//
// console.log(fibonacci2(6))


// // как сравнить 2 объекта?
//
// let obj1 = {name: "Ivan", age: 30}
// let obj2 = {name: "Ivan", age: 30}
//
// console.log(obj1 === obj2) // false


// let obj1 = {name: "Ivan", age: 30}
// let obj2 = {name: "Ivan", age: 34}
//
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) // false


// let obj1 = {name: "Ivan", age: 30}
// let obj2 = {name: "Ivan", age: 30}
//
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) // true


// let obj1 = {name: "Ivan", age: 30}
// let obj2 = {age: 30, name: "Ivan"}
//
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) // false


// const recursion = () => {
//     return recursion()
// }
// console.log(recursion()) //RangeError: Maximum call stack size exceeded


// const recursion = (n) => {
//     if (n === 1) return 1
//     return n * recursion(n - 1)
// }
// console.log(recursion(5)) // 5! = 5 * 4 * 3 * 2 * 1 = 120
//
//
// // этот вариант лучше
// let number = 5
// let result = 1
// while (number > 1) {
//     result = result * number
//     number--
// }
// console.log(result) //  5! = 5 * 4 * 3 * 2 * 1 = 120

//
// function foo(a) {
//     let counter = a
//     console.log('inside 1', counter)
//     return () => {
//         console.log('inside 2', counter)
//         counter = counter + 1
//         return counter
//     }
// }
// const zzz = foo(1)
// console.log(zzz())
// console.log(zzz())
// console.log(zzz())


// function isEqual(object1, object2) {
//     const props1 = Object.getOwnPropertyNames(object1);
//     const props2 = Object.getOwnPropertyNames(object2);
//
//     if (props1.length !== props2.length) {
//         return false;
//     }
//
//     for (let i = 0; i < props1.length; i ++) {
//         const prop = props1[i];
//
//         if (object1[prop] !== object2[prop]) {
//             return false;
//         }
//     }
//
//     return true;
// }
//
// const object1 = {
//     title: "Title",
//     id: 1
// };
//
// const object2 = {
//     id: 1,
//     title: "Title",
// };
//
// console.log(isEqual(object1, object2))


// for(var i = 0; i < 10; i++){
//     setTimeout(()=>{
//         console.log(i)
//     }, 10)
// }
//
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10


// for(var i =0; i<10; i++){
//     setTimeout(()=>{
//         console.log(i)
//     }, 10)
// }
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9


// for(let i =0; i<10; i++){
//     setTimeout(()=>{
//         console.log(i)
//     }, 10)
// }
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9


// const object = {
//     value: "42",
//     print(){
//         function type() {
//             return typeof this.value
//         }
//         console.log(`${this.value} is ${type()}`)
//     }
// }
//
// object.print() //42 is undefined

// const object = {
//     value: "42",
//     print() {
//         const type = () => {
//             return typeof this.value
//         }
//         console.log(`${this.value} is ${type()}`)
//     }
// }
// object.print() //42 is string


// function twoHighest(arr) {
//     if(arr.length === 0){
//         return []
//     }
//     else if(arr.length < 2){
//         return arr.sort((a,b) => b-a)
//     }
//     else{
//         return arr.sort((a,b) => b-a).filter((el,idx) => arr.indexOf(el) === idx).slice(0,2)
//     }
// }
//
// console.log(twoHighest([9,9, 2,10,10]))

// function paperwork(n, m) {
//     if(m<0||n<0) return 0
//     else{
//         return n*m
//     }
// }

// function booleanToString(b){
//     return b ? "true" : "false"
// }


// function invert(array) {
//     return array.map(el => -el);
// }
//
// const greet = () => {
//     return "hello world!"
// }

// function maps(x) {
//     return x.map(el => el * 2)
// }
//
// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, el) => acc + el, 0)
// }

// function check(a, x) {
//     return a.includes(x)
// }
//
// function correct(string) {
//     return string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S")
// }
//
// console.log(correct("L0ND0N"))

//
// function expressionMatter(a, b, c) {
//     let maxValue = Math.max(
//         a+b+c,
//         a*b*c,
//         a*b+c,
//         a*(b+c),
//         a+b*c,
//         (a+b)*c
//     )
//    return maxValue
// }
//
// console.log(expressionMatter(2, 1, 2))

// function helloWorld(){
//     let str = "Hello World!"
//     console.log(str)
// }
//
// console.log(helloWorld())
//
//
// function greet(name){
//     if(name === "Johnny"){
//         return "Hello, my love!";
//     }
//     else{
//         return "Hello, " + name + "!";
//     }
// }
//
// console.log(greet("JOHNY"))


// const symb = (str) => {
//     return str.split().map((item, idx) => item.indexOf() === idx) ? true: false
// }
//
// console.log(symb("rtyuiopRt"))

// function isDivideBy(number, a, b) {
//     return number % a === 0 && number % b === 0
// }
//
// console.log(isDivideBy(-12, 2, -5))

// function hoopCount (n) {
//     return n<10 ? "Keep at it until you get it" : "Great, now move on to tricks"
// }
//
// console.log(hoopCount(7))

function find_average(array) {
    if(array !== []){
        return array.reduce((acc, item) => acc+item, 0)/array.length
    }
    return 0;
}

console.log(find_average([3,5,8,9,2]))

const square = (a) => {
    return a**2
}
console.log(square(7))