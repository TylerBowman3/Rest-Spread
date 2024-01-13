// #1

const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0);

// #2

const findMin = (...args) => Math.min(...args);

// #3

const mergeObjects = (obj1,obj2) => ({...obj1, ...obj2});

// #4 

const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(num => num * 2)];

// #5

const removeRandom = (items) => {
    const randomItem = Math.floor(Math.random() * items.length);
    return [...items.slice(randomItem - 1, randomItem + 1)];
}

//

const extend = (arr1, arr2) => [...arr1,...arr2];

//

const addKeyVal = (obj) => ({...obj, key: value});

//

const combine = (obj1, obj2) => ({...obj1,...obj2});

//

const update = (obj) => ({...obj, key: value});





