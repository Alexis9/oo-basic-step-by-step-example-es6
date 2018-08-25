class Class{
    constructor(number){
        this.klass = number;
        this.number = number;
    }
    getDisplayName(){
        return "Class "+this.number;
    }
    registerJoinListener(teacher){
        this.teacherOne = teacher;
    }
    registerAssignLeaderListener(teacher){
        this.teacherTwo = teacher
    }
    assignLeader(student){
        if(student.klass.number === this.klass){
            this.leader = student;
        }
        if(this.teacherTwo){
            console.log("I am "+this.teacherTwo.name+". I know "+student.name+" become Leader of Class "+this.klass+".")
        }
        if(student.klass.number !== this.klass){
            console.log("It is not one of us.");
        }
    }
    appendMember(student){
        if(student.klass.number !== this.klass){
            student.klass = this;
        }
        if(this.teacherOne){
            console.log("I am "+this.teacherOne.name+". I know "+student.name+" has joined Class "+this.klass+".");
        }
    }
}
export default Class;


