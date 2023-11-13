const jsonObject = { name: 'John', age: 30, city: 'New York'};

const jsonString = JSON.stringify(jsonObject, null, 2);
console.log(jsonString);