export default class Class {
    constructor(number) {
        this.klass = number;
        this.number = number;
    }
    getDisplayName() {
        return "Class " + this.number;
    }
    assignLeader(student) {
        if (student.klass.number === this.klass) {
            this.leader = student;
        }
    }
}
