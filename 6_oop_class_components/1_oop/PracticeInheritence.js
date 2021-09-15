class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print(){
        console.log(`My Name Is ${this.name} and I am ${this.age} Years old`); 
    }

}
class Student extends Person{

    constructor(name, age, gpa=4.0) {
        super(name, age);
        this.gpa = gpa;
    }

    getSchoolLevel(){
        if(this.age < 11){
            console.log("\n" + this.name + " is in elementary school");
            this.print();
        }else if(this.age < 15){
            console.log("\n" + this.name + " Is in middle school");
            this.print();
        }else{
            console.log("\n" + this.name + " Is in high school");
            this.print();
        }
    }
}

class Teacher extends Person {
    constructor(name, age, subject= "All Subjects"){
        super(name, age);
        this.subject = subject;
    }
    print(){
        //if we used the super keyword this console.log would be added onto the original print function from the person class 
        // super.print();
        console.log(this.name + " Teaches " + this.subject);
    }
}



const person1 = new Person("Caden", 23);
person1.print();
const student1 = new Student("Joseph", 12);
student1.getSchoolLevel();
const teacher1 = new Teacher("Mr Johnson", 42)
teacher1.print()
