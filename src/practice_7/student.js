
function Student(name, age, klass) {
    this.klass =klass;
    this.name = name;
    this.age = age;
}

Student.prototype.introduce = function (klass) {
    return 'My name is ' + this.name + '. I am ' + this.age + ' years old. I am a Student. I am at Class ' + this.klass.number + '.'
}


module.exports = Student;
