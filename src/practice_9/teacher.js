import Person from "../../src/practice_8/person.js";
export default class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }
    introduce() {
        var a = super.introduce();
        if (this.klass == null) {
            return a + ' I am a Teacher. I teach No Class.'
        }
        else {
            return a + ' I am a Teacher. I teach Class ' + this.klass.number + '.'
        }
    }

}

