function Student (student_name, student_age, student_gender){
this.name = student_name,
this.age = student_age,
this.gender = student_gender,
{}
}
let obj1 = new Student('Haritha',22,'female');
let obj2 = new Student('Lavanya',23,'female');
let obj3 = new Student('Dinesh',23,'male');
Student.prototype.branch = 'CSE';
Student.prototype.college ='Gates';
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.gender);
console.log(obj1.branch);
console.log(obj1.college);
console.log(obj2.name);
console.log(obj2.age);
console.log(obj2.gender);
console.log(obj2.branch);
console.log(obj2.college);
console.log(obj3.name);
console.log(obj3.age);
console.log(obj3.gender);
console.log(obj3.branch);
console.log(obj3.college);
