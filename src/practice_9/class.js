export default class Class {
    constructor(number) {
        this.number = number;
        this.klass = number;
    }
    getDisplayName() {
        return "Class " + this.number;
    }
    assignLeader(student) {
        if (student.klass.number === this.klass) {
            this.leader = student;
        }
        else {
            console.log('It is not one of us.');
        }
    }
    appendMember(student) {
        student.klass= this;
    }
}
