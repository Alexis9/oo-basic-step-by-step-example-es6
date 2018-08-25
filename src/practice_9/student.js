
import Person from "../../src/practice_8/person.js";

export default class Student extends Person {

    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;

    }

    introduce() {
        if (this.klass.leader) {
            return super.introduce() + " I am a Student. I am Leader of Class " + this.klass.number + ".";
        }
        else {
            return super.introduce() + " I am a Student. I am at Class " + this.klass.number + ".";
        }
    }
}