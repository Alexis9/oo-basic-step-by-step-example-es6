

function Person(name, age,klass) {
    this.name = name;
    this.age = age;
    this.klass=klass;

}

Person.prototype.introduce = function () {
    return 'My name is ' + this.name + '. I am ' + this.age + ' years old.'
}

module.exports = Person;