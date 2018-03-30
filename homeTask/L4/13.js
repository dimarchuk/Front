var names, total, sorted;
var users = [
    {name: "Alex", cash: 43},
    {name: "John", cash: 274},
    {name: "Carl", cash: 82},
    {name: "Bill", cash: 14}
];

total = function () {
    var sum = 0;
    users.forEach(function (value) {
        sum += value.cash;
    });
    return sum;
};

names = function () {
    var arr = [];
    users.forEach(function (value) {
        arr.push(value.name);
    });
    return arr;
};

function compareCash(personA, personB) {
    return personA.cash - personB.cash;
}

function sortUser(user) {
    return user.sort(compareCash);
};
sorted = sortUser(users.slice());
/* some magic */

console.log(names()); // ["Alex", "John", "Carl", "Bill"]
console.log(total()); // 413
console.log(sorted); // [{name:"Bill",cash:14},{name:"Alex",cash:43},{name:"Carl",cash:82},{name:"John",cash:274}]
console.log(users); // [{name:"Alex",cash:43},{name:"John",cash:274},{name:"Carl",cash:82},{name:"Bill",cash:14}]