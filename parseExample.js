const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

// JSON 문자열을 JavaScript 객체로 파싱
const jsonObject = JSON.parse(jsonString,);

console.log(jsonString);
console.log(jsonObject.name); // John
console.log(jsonObject.age); // 30
console.log(jsonObject.city); // New York