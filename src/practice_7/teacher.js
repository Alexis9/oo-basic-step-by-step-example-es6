


function Teacher(name, age, klass) {
    this.name = name;
    this.age = age;
    this.klass = klass;
}
Teacher.prototype.introduce = function () {
    if (this.klass == null) {
        return 'My name is ' + this.name + '. I am ' + this.age + ' years old. I am a Teacher. I teach No Class.'
    }
    else {
        return 'My name is ' + this.name + '. I am ' + this.age + ' years old. I am a Teacher. I teach Class ' + this.klass.number + '.'
    }
}
Teacher.prototype.introduceWith = function (studentJerry) {
    if (studentJerry.klass === this.klass) {
        return 'My name is ' + this.name + '. I am ' + this.age + ' years old. I am a Teacher. I teach ' + studentJerry.name + '.'
    }
    else {
        return 'My name is ' + this.name + '. I am ' + this.age + ' years old. I am a Teacher. I don\'t teach ' + studentJerry.name + '.'
    }
}


module.exports = Teacher;