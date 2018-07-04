# __NEW JS ES6__

* do not use var but let or const for definite variables

* write modular code (export, import)

* __classes__ :
  * class Person {
    constructor (name= 'Max')    <-- property
    call= () =>{}  <--method
  }
  * const myPerson = new Person() <-- usage

    myPerson.call()

  * class Person extends Master <-- support inheritance

* __Arrow Function__ write functions like :
   * const myFunc = () => {
     ..
   }
* __spread and rest operator__:
  * spread is used to split up array and attack it to a new one

    const newArr = [...oldArray,1,2]

    const newObj = {...oldObject, newProp:5}
  * rest is used to merge a list of function args into an array

    const filter = (...args) => {
      return args.filter(el=> el === 1)
    }

    console.log(filter(1,2,3)) ---> return [1]

* __Destructuring__ easily extract array elements or object property and store into a variables (for arrays and objects):
  * [a,b] = ['H','K']
    console.log(a) ---> H
  * {name} = {name: 'Max', age:28}
    console.log(name) --> Max
    console.log(age)  --> undefined

* __reference and primitive type refresher__ (to copy memory pointer of a variable)

* __refreshing array function:__
  * i can apply an arrow function on each element of the array:
  const numbers = [1,2,3]
  const doubleNumbers = number.map((num) => {
    return num * 2
    })

* __Important functions__

    map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

    find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

    findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

    filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

    reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b

    concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b

    slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

    splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
