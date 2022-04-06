let cities = ['Amaravathi','Hyderabad','Bangalore'];
 console.log(cities);
cities.push('Kurnool','Ballary');
console.log("After adding two elements: "+cities);
let length = cities.length;
console.log("length Of the Array :"+length);
cities.unshift('Delhi');
cities[1]='Chennai'
cities.push='Kolkata'
cities.pop();
cities.pop();

let length1=cities.length;
console.log("After doing Pop() Length of the array: "+length1);

console.log("After all operations : "+cities);
//Using spread operator
arr1 =["Hello","World"];
arr2 = [1,3,9,5,4,9,6];
arr3 = [...arr1,...arr2];
console.log(arr3);
arr4 = ['a','j','t','r','f'];
arr5 = [...arr3,...arr4];
console.log(arr5);