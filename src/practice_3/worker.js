

function Worker(name, age) {
    this.name = name;
    this.age = age;

}

Worker.prototype.introduce = function () {
    return 'I am a Worker. I have a job.'
}

module.exports = Worker;