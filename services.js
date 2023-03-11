export var InputValuesinObj = {
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


        // id(){
        //     return quesid.value;
        // },
        // name(){ 
        //     return quesname.value;
        // },
        // optionA(){ 
        //     return optA.value;
        // },
        // optionB(){ 
        //     return optB.value;
        // },
        // optionC(){ 
        //     return optC.value;
        // },
        // optionD(){ 
        //     return optD.value;
        // },
        // ans(){ 
        //     return rightans.value; 
        // }


        // quesid : "",
        // quesname : "",
        // optA: "",
        // optB:"",
        // optC:"",
        // optD:"",
        // rightans: "",
        // storevalue(quesid, quesname, optA, optB, optC, optD, rightans){
        //     this.quesid = quesid;
        //     this.quesquesname =quesname;
        //     this.quesid = quesname;
        //     this.quesid = optA;
        //     this.quesid = optB;
        //     this.quesid = optC;
        //     this.quesid = optD;
        //     this.quesid = rightans;
        // },
        // id(){
        //     return this.quesid;
        // }

        // id: this.quesid,
        // name: this.quesname,
        // optionA : this.optA,
        // optionB : this.optB,
        // optionC : this.optC,
        // optionD : this.optD,
        // ans:this.rightans 
    

console.log()