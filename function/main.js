for(let i = 0; i < 3; i++){

let name = prompt("Ismingizni kiriting");
let surname = prompt("Familyangizni kiriting");
let age = prompt("Yoshingizni kiriting");

function setInfo(students){
    let info = {
        students: {
            names: name, 
            surnames: surname,
            ages: age,
        },
    }
    console.log(info);
}
setInfo()
}