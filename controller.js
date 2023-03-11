// import {InputValuesinObj} from './controllers/controller.js';

// import { taskOperation } from "../models/taskOperations";

// STEP-0 --> bindEvents on windows load
// STEP-1 --> Take the values of all inputs and store in variable

window.addEventListener("load", init);

function init(){
    bindEvents();
    printCount();
    // setnone();
    console.log("init");
}
// function setnone(){
//     questionOperations.searchbtn = false;
// }

function bindEvents(){
    // console.log('hello')
    document.getElementById('add-btn').addEventListener("click", addQuestions);
    document.getElementById('delete-btn').addEventListener("click", deletePermanent);
    document.getElementById('search-btn').addEventListener("click", searchbox);
    document.getElementById('sort-btn').addEventListener("click", sortQuesbyId);
    document.getElementById('savedata').addEventListener("click", save);
    // document.getElementById('loaddata').addEventListener("click", loadData);
    // document.getElementById('loaddata').addEventListener("click", loadData);       
    // document.getElementById('update').addEventListener("click", updateQues);
}

function loadData(){
    console.log("I am load");
    if(window.localStorage){
        if(localStorage.questions){
            const arr = JSON.parse(localStorage.getItem('questions'));
            questionOperations.questions = arr;
            printTable();
            printCount();
            alert("Data loaded");
        }
        else{
            alert("Nothing to Load");
        }
    }
    else{
        alert("Outdated Browser");
    }
}


function save(){
    if(window.localStorage){
        const questionArray = questionOperations.questions;
        localStorage.setItem('questions', JSON.stringify(questionArray));
        alert("Data Store in Disk");
    }
    else{
        alert("Your Browser is Outdated not Having Support of Storage...");
    }
}


function deletePermanent(){
    questionOperations.remove();
    printTable();
    printCount();
}

function printTable(){
    document.getElementById('questions').innerHTML = "";
    questionOperations.questions.forEach(printQuestions);
}

function sortQuesbyId(){
    const qid = this.getAttribute('qid');
    // console.log(questionOperations.sort(qid));
    questionOperations.sortbyId(qid);
    printTable();
    printCount();
}


function addQuestions(){
    // var quesid = document.querySelector('#ques-id').value;
    // var quesname = document.querySelector('#ques-name').value;
    // var optA = document.querySelector('#optA').value;
    // var optB = document.querySelector('#optB').value;
    // var optC = document.querySelector('#optC').value;
    // var optD = document.querySelector('#optD').value;
    // var rightans = document.querySelector('#rightAns').value;

    const fields = ["quesid", "quesname","optA", "optB", "optC", "optD", "rightAns", "score"];
    var questionObject={}; //create obj
    console.log("hello");
    for(let i=0; i<fields.length; i++){
        questionObject[fields[i]] = document.getElementById(fields[i]).value;
    }
    questionObject.isMarked = false;
    questionObject.isSorted = false;
    // questionObject.isDisplayed = false;

    questionOperations.add(questionObject);
    printQuestions(questionObject);
    printCount();
    console.log(questionObject);
    // clearAll(questionObject);
    // showCounts();
    // Questions.quesid = quesid;
    // Questions.quesname = quesname;
    // Questions.optA = optA;
    // Questions.optB = optB;
    // Questions.optC = optC;
    // Questions.optD = optD;
    // Questions.rightans = rightans;

    // console.log(Questions.quesid);
    // console.log(quesid);

    // const task = add(quesid, quesname, optA, optB, optC, optD, rightans, score);   
}

// function clearAll(questionObject){
//     const fields = ["quesid", "quesname","optA", "optB", "optC", "optD", "rightAns", "score"];
//     for(let i=0; i<fields.length; i++){
//         questionObject[fields[i]] = "";
//     }
// }

function printCount(){
    const total = questionOperations.getLength();
    const mark = questionOperations.countMark();
    const unmark = questionOperations.countUnMark();

    document.getElementById("total").innerText = total;
    document.getElementById("marked").innerText = mark;
    document.getElementById("unmarked").innerText = unmark;
}

function editQues(){
    const icon = this;
    console.log("creatae btn");
   
    const qid = icon.getAttribute("qid");
    const values = questionOperations.forediting(qid);
    console.log(values);

    const fields = ["quesid", "quesname","optA", "optB", "optC", "optD", "rightAns", "score"];

    for(let i=0; i<fields.length; i++){
        document.getElementById(fields[i]).value = values[fields[i]];
    }

    const updatebtn = document.createElement('button');
    updatebtn.className = "btn btn-warning";
    updatebtn.id = 'update';
    const btns = document.querySelector("#buttons")
    updatebtn.innerText = "Update";
    btns.appendChild(updatebtn);   
    
    document.getElementById('update').addEventListener("click", ()=>{
        questionOperations.updation(qid);
        const index  = questionOperations.updation(qid);
    
        for(let i=0; i<fields.length; i++){
            console.log(questionOperations.questions[index]);
            questionOperations.questions[index][fields[i]] = document.getElementById(fields[i]).value;
        }
    
        printTable();
        printCount();
    });


    // tr.className = "edit";
    // tr.setAttribute("contenteditable", true);
    // const edit = tr.getAttribute("contenteditable");

    // tr.contentEditable;
    // const ans = edit.contentEditable;
    // tr.contenteditable = true;
    // tr.contentEditable;
    // const qid = icon.getAttribute("qid");

    // questionOperations.toggleMark(qid);
    // icon.setAttribute("contenteditable", true);
    // icon.contenteditable = true;
    // qid.contentEditable;
    // const edittable = icon.getAttribute("contenteditable");
    // questionOperations.toggleMark(edittable);
    
    // const tr = this.parentNode.parentNode;
    // qid.contentEditable = true;
    // const aTag = document.createElement("a");
    // console.log(questionOperations.questions);
    // aTag.href = "#"+questionObject.quesid;
    // console.log(aTag.href);
    // console.log("This is an edit");
}

function markDelete(){
    // console.log("click");
    const icon = this;
    const qid = icon.getAttribute("qid");
    questionOperations.toggleMark(qid);
    const tr = this.parentNode.parentNode;
    tr.classList.toggle('alert-danger');
    printCount();
}

function createIcon(fn, id, classname){
    const icon = document.createElement('i');
    icon.className = "fa-solid " + classname;
    icon.addEventListener('click', fn);
    icon.setAttribute("qid", id);
    return icon;
}

function searchbox(){
    const input = document.createElement("input");
    const btn = document.createElement("button");
    input.placeholder = "Search with Ques id";
    input.id = "inputsearch";
    btn.className = "fa-solid fa-check";
    btn.style.height="2rem";
    const searchbox = document.getElementById("search-box");
    searchbox.appendChild(input);
    searchbox.appendChild(btn);

    btn.addEventListener("click", ()=>{
        const searchInput = document.getElementById('inputsearch').value;
        const foundit = questionOperations.search(searchInput);
        console.log(foundit);
        
        // tr.bgColor = "yellow";
        

    });
}



// function searchBox(questionObject){
//     // btn.innerText = "search";
//     btn.addEventListener("click", ()=>{
//         const quesid = input.value;
//         console.log(quesid);
//         const Qid = questionOperations.get(quesid);
//         const tr = document.querySelector("tr");
        // const id = tr.setAttribute("Qid");
        
        

        // tr.id = Qid;
        // console.log(Qid);

        // const aTag = document.createElement("a");
        // aTag.href = "#" + id.quesid;
        // console.log(aTag.href);


        // inputSearch.classList.toggle('text-success');
//     });

// }

function printQuestions(questionObject){
    const tbody = document.getElementById('questions');
    const tr = tbody.insertRow();
    var index = 0;
    for (let key in questionObject){
        if(key == 'isMarked' || key == 'isSorted'){
            continue;
        }
        var cell = tr.insertCell(index);
        cell.innerText = questionObject[key];
        index++;
    }

    const opcell = tr.insertCell(index);
    opcell.appendChild(createIcon(markDelete, questionObject.quesid, "fa-trash-can"));
    opcell.appendChild(createIcon(editQues, questionObject.quesid, "fa-pencil"));
}


// function searchbox(){
//     const box = document.createElement('input');
//     box.id = "Qsearch";
//     const span = document.getElementById("search-box");
//     span.appendChild(box);
//     const inputSearch = box.innerText;
//     // questionOperations.search(inputSearch);
//     questionOperations.toggleSearch(inputSearch);

// }


// function searchBox(){
//     const box = document.createElement("input");
//     const btn = doccument.createElement("button");
//     box.className = "form-control";
//     btn.className = "btn btn-primary";
//     box.id = "Qsearch";
//     document.getElementById("search-box").appendChild(box);
//     document.getElementById("search-box").appendChild(btn);

//     search();
// }

// function search(){
//     const box = document.getElementById("Qsearch");
//     if(box.style.display == "none"){
//         box.style.display = "block";
// }else{
//     box.style.display = "none";
// }
// }

// function searchbox(){
//     console.log("1", questionOperations.searchbtn);
//     const box = document.createElement("input");
//     const btn = document.createElement("button");
//     // box.className = "form-contorl";
//     btn.className = "btn btn-primary";
//     box.id = "Qsearch";
//     document.getElementById("search-box").appendChild(box).appendChild(btn);
//     const inputSearch = box.innerText;
//     // box.style.display = true;  
//     // questionOperations.searchbtn = !questionOperations.searchbtn;
//     console.log("2", questionOperations.searchbtn);
//     // document.getElementById("search-box").appendChild(btn);
//     // box.style.display = "flex";
//     if(questionOperations.isDisplayed == true){
//         box.style.display = "block";
//         console.log("display block");
//     }
//     else{
//         console.log("else if");
//         box.style.display = "none";
//         console.log("display none");
//     }
//     console.log("search(ipsearch) ", questionOperations.search(inputSearch));
// }




