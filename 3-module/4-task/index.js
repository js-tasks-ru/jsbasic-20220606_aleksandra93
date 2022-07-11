function showSalary(users, age) {
let arr = users.filter(item => item.age <= age);
let namesBalance = arr.map(item => (`${item.name}, ${item.balance}`) );
let result = namesBalance.join('\n');
return result;
}
