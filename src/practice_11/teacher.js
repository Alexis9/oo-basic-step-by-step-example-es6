
import Person from "../../src/practice_8/person.js";
export default class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }
    introduce() {
        var a = super.introduce();
        if (this.klasses == null) {
            return a + ' I am a Teacher. I teach No Class.'
        }
        else {
            return a + ' I am a Teacher. I teach Class 2, 3.'
        }
    }
    isTeaching(student){
        
    }
}
