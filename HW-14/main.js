class Student {
    constructor(firstName, lastName, birthYear, course) {
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.birthYear = birthYear; 
        this.course = course; 
        this.grades = []; 
        this.attendance = []; 
    }


    addGrade(grade) {
        if (this.grades.length < this.getMaxGrades()) {
            this.grades.push(grade);
        } else {
            console.log(`Максимальна кількість оцінок для курсу ${this.course} досягнута.`);
        }
    }

    addAttendance() {
        if (this.attendance.length < this.getMaxAttendance()) {
            this.attendance.push(true);
        } else {
            console.log(`Максимальна кількість відвідувань для курсу ${this.course} досягнута.`);
        }
    }

 
    getAverageGrade() {
        const total = this.grades.reduce((acc, grade) => acc + grade, 0);
        return this.grades.length > 0 ? (total / this.grades.length).toFixed(2) : 0;
    }


    getAverageAttendance() {
        return this.attendance.length > 0 ? ((this.attendance.length / this.getMaxAttendance()) * 100).toFixed(2) : 0;
    }


    getCompletedClasses() {
        return this.attendance.length;
    }

   
    changeCourse(newCourse) {
        this.course = newCourse;
        this.grades = [];
        this.attendance = []; 
    }

   
    getStudentInfo() {
        return {
            fullName: `${this.firstName} ${this.lastName}`,
            birthYear: this.birthYear,
            course: this.course,
            grades: this.grades,
            attendance: this.attendance,
            averageGrade: this.getAverageGrade(),
            averageAttendance: this.getAverageAttendance(),
            completedClasses: this.getCompletedClasses()
        };
    }


    getMaxGrades() {
        switch (this.course) {
            case 1: return 5; 
            case 2: return 10; 
            case 3: return 15; 
            case 4: return 20; 
            default: return 0;
        }
    }


    getMaxAttendance() {
        switch (this.course) {
            case 1: return 10; 
            case 2: return 20; 
            case 3: return 30;
            case 4: return 40; 
            default: return 0; 
        }
    }
}

// Приклад використання
conststudent = new Student('Іван', 'Іваненко', 2000, 2);
student.addGrade(85);
student.addGrade(90);
student.addAttendance();
student.addAttendance();

console.log(student.getStudentInfo());






















class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.birthYear = birthYear; 
        this.courses = []; 
        this.grades = []; 
        this.attendance = []; 
    }

    addCourse(course) {
        if (!this.courses.includes(course)) {
            this.courses.push(course);
        }
    }

   
    addGrade(grade) {
        this.grades.push(grade);
    }

    addAttendance() {
        this.attendance.push(true);
    }


    getAverageGrade() {
        const total = this.grades.reduce((acc, grade) => acc + grade, 0);
        return this.grades.length > 0 ? (total / this.grades.length).toFixed(2) : 0;
    }

    
    getAverageAttendance() {
        return this.attendance.length > 0 ? ((this.attendance.length / 10) * 100).toFixed(2) : 0; 
    }

    getStudentInfo() {
        return {
            fullName: `${this.firstName} ${this.lastName}`,
            averageGrade: this.getAverageGrade(),
            averageAttendance: this.getAverageAttendance()
        };
    }
}

class Group {
    constructor(groupName) {
        this.groupName = groupName; 
        this.students = []; 
    }


    addStudent(student) {
        this.students.push(student);
        console.log(`Студента ${student.firstName} ${student.lastName} успішно додано до групи ${this.groupName}.`);
    }

    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index > -1) {
            this.students.splice(index, 1);
            console.log(`Студента ${student.firstName} ${student.lastName} успішно видалено з групи ${this.groupName}.`);
        } else {
            console.log(`Студент ${student.firstName} ${student.lastName} не знайдено в групі ${this.groupName}.`);
        }
    }

   
    getRatingByGrades() {
        return this.students
            .map(student => ({ student: student.getStudentInfo(), averageGrade: student.getAverageGrade() }))
            .sort((a, b) => b.averageGrade - a.averageGrade); 
    }


    getRatingByAttendance() {
        return this.students
            .map(student => ({ student: student.getStudentInfo(), averageAttendance: student.getAverageAttendance() }))
            .sort((a, b) => b.averageAttendance - a.averageAttendance); 
    }


    getStudentsInfo() {
        return this.students.map(student => student.getStudentInfo());
    }
}

// Приклад використання
const group = new Group('Група 101');
const student1 = new Student('Іван', 'Іваненко', 2000);
const student2 = new Student('Марія', 'Петренко', 2001);
const student3 = new Student('Олег', 'Сидоренко', 2000);

student1.addGrade(85);
student1.addGrade(90);
student1.addAttendance();
student1.addAttendance();

student2.addGrade(75);
student2.addGrade(80);
student2.addAttendance();
student2.addAttendance();
student2.addAttendance();

student3.addGrade(90);
student3.addGrade(95);
student3.addAttendance();

group.addStudent(student1);
group.addStudent(student2);
group.addStudent(student3);

console.log('Рейтинг за успішністю:');
console.log(group.getRatingByGrades());

console.log('Рейтинг за відвідуваністю:');
console.log(group.getRatingByAttendance());

























class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName; 
        this.birthYear = birthYear; 
        this.courses = []; 
    }

    
    addCourse(course) {
        if (!this.courses.includes(course)) {
            this.courses.push(course);
            console.log(`Курс ${course} успішно додано.`);
        } else {
            console.log(`Студент вже навчається на курсі ${course}.`);
        }
    }

    
    removeCourse(course) {
        const index = this.courses.indexOf(course);
        if (index > -1) {
            this.courses.splice(index, 1);
            console.log(`Курс ${course} успішно видалено.`);
        } else {
            console.log(`Курс ${course} не знайдено.`);
        }
    }

    getCourses() {
        return this.courses.length > 0 ? this.courses : 'Студент не навчається на жодному курсі.';
    }


    getStudentInfo() {
        return {
            fullName: `${this.firstName} ${this.lastName}`,
            birthYear: this.birthYear,
            courses: this.getCourses()
        };
    }
}

// Приклад використання
const student = new Student('Іван', 'Іваненко', 2000);
student.addCourse(1); 
student.addCourse(2); 
student.addCourse(1); 
console.log(student.getStudentInfo()); 

student.removeCourse(1); 
console.log(student.getStudentInfo()); 

student.removeCourse(3); 