const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    iscleaned: true
}

// console.log(glass);
// // { name: 'glass', color: 'golden', price: 12, iscleaned: true }

// const keys = Object.keys(glass);
// console.log(keys)

// // [ 'name', 'color', 'price', 'iscleaned' ]

// const value = Object.values(glass);

// console.log(value);
// // ?\ [ 'glass', 'golden', 12, true ]



// const entries = Object.entries(glass);

// console.log(entries);


// delete glass.iscleaned;
// delete glass.color;
// console.log(glass);

const {iscleaned, color, ...shortGlass} = glass;

console.log(shortGlass);

// freeze 
// Object.freeze(glass);
// glass.source = "Bangladesh"
// console.log(glass);
// delete glass.color;
// console.log(glass);


// Object seal 

Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass)