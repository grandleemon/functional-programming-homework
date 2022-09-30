const test = [
    {
        name: 'aame',
        age: 18
    },
    {
        name: 'zwciff',
        age: 23
    },
    {
        name: 'ubiff',
        age: 20
    }
]

const sortBy = (arr, type, key) => {
    const copy = [...arr]

    if(type === 'asc' && key === 'age') {
        copy.sort( (a,b) => a.age - b.age)
    } else if (type === 'desc' && key === 'age') {
        copy.sort((a,b) => b.age - a.age)
    } else if (type === 'asc' && key === 'name'){
        copy.sort( (a,b) => a.name < b.name && -1)
    } else if (type === 'desc' && key === 'name'){
        copy.sort( (a,b) => a.name > b.name && -1)
    }

    return copy
}

console.log(sortBy(test, 'desc', 'age'))

// my .map()
Array.prototype.myMap = function(callback) {
    const array = []

    this.reduce((prev, cur, idx) => {
        array.push(callback(cur, idx))
    }, this)

    return array
}

const arr = [2,3]
const objArr = [
    {
        key: 'value'
    },
    {
        key: 'value1'
    }
]

const testMap = objArr.myMap((item, index) => item.key)
console.log(testMap)

// my .filter()
Array.prototype.myFilter = function(callback) {
    const array = []

    this.reduce((prev, cur) => {
        if(callback(cur)){
            array.push(cur)
        }
    }, this)

    return array
}

const testFilter = objArr.myFilter(item => item.key !== "value")

//my .every()
Array.prototype.myEvery = function(callback) {
    const array = []

    this.reduce((prev, cur) => {
        if(callback(cur)){
            array.push(cur)
        }
    }, this)

    return array.length === this.length
}

const check = arr.myEvery(item => {
    return item === 2
})

// my .find()
Array.prototype.myFind = function(callback) {
    let foundItem;

    this.reduce((prev, cur) => {
        if(callback(cur)){
            foundItem = cur
        }
    }, this)

    return foundItem
}

const elem = arr.myFind(item => item === 2)
console.log(elem)

// my .indexOf()
Array.prototype.myIndexOf = function(searchElement, fromIndex = 0) {
    let elemIndex;

    this.reduce((prev, cur, idx) => {
        if(searchElement === cur){
            elemIndex = idx
        }
    }, fromIndex !== 0 ? fromIndex : this)

    return elemIndex ? elemIndex : -1
}

const myIndexOfArray = [1,2,3]
const res = myIndexOfArray.myIndexOf(4)

// object deep clone

const simpleObj = {
    key: "value",
    key2: {
        key1: {
            key: {
                key: {
                    key: {
                        key: {

                        }
                    }
                }
            }
        }
    }
}

const testSpread = {...simpleObj}
simpleObj.key = 'null'
console.log(simpleObj)
console.log(testSpread)

// sorting numbers

const arrayOfNumbers = [1,9,5,4,8,2,3]

const sortFunc = (arr) => {
    const sortedEven = []
    const sortedOdd = []

    const res = arr.sort((a,b) => a - b)
    res.forEach(item => {
        if(item % 2 === 0){
            sortedEven.push(item)
        } else {
            sortedOdd.push(item)
        }
    })

    const descSortedOdd = sortedOdd.sort((a,b) => b - a)

    return [...sortedEven, ...descSortedOdd]
}

console.log(sortFunc(arrayOfNumbers))

// 5 task

const task5Arr = [1, 1, 1, 5, 6, 7, 2, 3, 4]

const func = (arr, number) => {
    let indexes = []
    for(let i = 0; i < arr.length; i++){
        for (let j = 1; j < arr.length; j++){
            if(arr[i] + arr[j] === number){
                indexes = [arr.indexOf(arr[i]), arr.indexOf(arr[j])]
            }
        }
    }

    return indexes
}

const task5Res = func(task5Arr, 3)
console.log(task5Res)