let outputscreen= document.getElementById("output-screen");
function display(number){
    outputscreen.value +=number;
}
// function calculate(){
//     try{
//         outputscreen.value = eval(outputscreen.value);
//     }
//     catch(err){
//         alert("invalid")
//     }
// }
// function Clear(){
//     outputscreen.value ="";
// }
// function del(){
//     outputscreen.value = outputscreen.value.slice(0,-1);
// }


let history = document.getElementById('calc-history');
let field = document.getElementById('output-screen')

const update = () => {
    let expression = field.value;
    let result = eval(field.value);
    field.value = result;
    let historyupdate = `<div>${expression} <div class='result'> = ${result}</div> </div><hr>`;
    history.innerHTML += historyupdate;
}

