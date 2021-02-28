

// Pretend that this response is coming from the server
const students = [
    { name: "harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
]


const enrollStudent = (student) => {
    return new Promise(function (reslove, reject) {
        setTimeout(() => {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if (!error) {
                reslove();
            }
            else {
                reject();
            }
        }, 1000)
    })
}

const getStudents = () => {
    setTimeout(() => {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000)

}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured");
});
