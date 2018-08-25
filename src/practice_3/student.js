
function Student(name, age, klass) {
    this.name = name;
    this.age = age;
    this.klass = klass;

}

Student.prototype.introduce = function () {
    return 'I am a Student. I am at Class ' + this.klass + '.'
}

module.exports = Student;