// import {InputValuesinObj} from './controllers/controller.js';
// STEP-0 --> bindEvents on windows load
window.addEventListener("load", bindEvents);
function bindEvents(){
    document.getElementById('add-btn').addEventListener("click", takeInputs);
}

// STEP-1 --> Take the values of all inputs and store in variable

function takeInputs(){
    var quesid = document.getElementById('ques-id').innerText;
    var quesname = document.getElementById('ques-name').innerText;
    var optA = document.getElementById('optA').innerText;
    var optB = document.getElementById('optB').innerText;
    var optC = document.getElementById('optC').innerText;
    var optD = document.getElementById('optD').innerText;
    var rightans = document.getElementById('rightAns').innerText;
    // var table = document.getElementById("")
    var InputValuesinObj = {
            id : "",
            quesname : "",
            optA: "",
            optB:"",
            optC:"",
            optD:"",
            rightans: "",
            storevalue(quesid, quesname, optA, optB, optC, optD, rightans){
                InputValuesinObj.id = quesid;
                InputValuesinObj.quesname = quesname;
                InputValuesinObj.optA = optA;
                InputValuesinObj.optB = optB;
                InputValuesinObj.optC = optC;
                InputValuesinObj.optD = optD;
                InputValuesinObj.rightans = rightans;
            },
                id : this.quesid,
                quesname : this.quesname,
                optA : this.optA,
                optB : this.optB,
                optC : this.optC,
                optD : this.optD,
                rightans : this.rightans,
    
        }
        console.log(InputValuesinObj.id);
}

var InputValuesinObj={};
InputValuesinObj.quesid = quesid;
InputValuesinObj.quesname = quesname;
InputValuesinObj.optA = optA;
InputValuesinObj.optB = optB;
InputValuesinObj.optC = optC;
InputValuesinObj.optD = optD;
InputValuesinObj.rightans = rightans;
