
function Worker(name, age) {
    this.name = name;
    this.age = age;

}

Worker.prototype.introduce = function () {
    return 'My name is ' + this.name + '. I am ' + this.age + ' years old. I am a Teacher. I have a job.'
}

module.exports = Worker;