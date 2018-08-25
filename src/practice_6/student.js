
function Student(name, age,klass) {
    this.name = name;
    this.age = age;
    this.klass=klass;

}

Student.prototype.introduce = function () {
    return 'My name is ' + this.name + '. I am ' + this.age + ' years old. I am a Student. I am at Class '+this.klass+'.'
}

module.exports = Student;