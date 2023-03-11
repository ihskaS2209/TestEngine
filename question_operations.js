// CRUD logic
const questionOperations = {
    questions:[],
    add(questionObject){
        return this.questions.push(questionObject);
    },
    getLength(){
        return this.questions.length;
    },
    countMark(){
        return this.questions.filter(question=>question.isMarked).length;
        // return this.getLength() - this.countUnMark();
        
    },
    countUnMark(){
        // return this.questions.filter(question=>!question.isMarked).length;
        // return this.getLength() - this.countMark();
        return this.questions.length - this.countMark();
    },
    toggleMark(quesid){
        const questionObject = this.searchbyId(quesid);
        if(questionObject){
            questionObject.isMarked = !questionObject.isMarked;
        }
    },
    
    remove(){
        this.questions =  this.questions.filter(question=>!question.isMarked);
    },
    searchbyId(quesid){
        return this.questions.find(question=>question.quesid == quesid);
    },
    sortbyId(quesid){
      if(this.isSorted){
          
          this.isSorted = !this.isSorted;
          return this.questions.sort((a, b) => (parseInt(a.quesid) > parseInt(b.quesid)) ? -1 : ((parseInt(b.quesid) > parseInt(a.quesid)) ? 1 : 0));
        }
        else {
            this.isSorted = !this.isSorted;
            return this.questions.sort((a, b) => (parseInt(a.quesid) > parseInt(b.quesid)) ? 1 : ((parseInt(b.quesid) > parseInt(a.quesid)) ? -1 : 0));
        }
        // this.questions.sort((a,b)=>b.id-a.id);
    },
    // get(quesid){
    //     const questionObject = this.searchbyId(quesid);
    //     console.log("dfg",questionObject);
    //     return questionObject;

    // },
    // search(quesid){
        // return this.questions.find(question=>question.quesid == quesid);
    // },
    // toggleDisplay(){
    //     questionOperations.isDisplayed = !questionOperations.isDisplayed;
    // },

    // edit(btns,updatebtn){
        // if(this.isDisplayed){
            
            // updatebtn.style.display = "none";
            // updatebtn.style.display = "inline-block";
        // }
        // else{
        //     this.isDisplayed = !this.isDisplayed;
            
        // }
        
        // if (updatebtn.style.display !== "none") {
        //   } else {
        //   }

        // if(this.isDisplayed){
        //     updatebtn.style.display = 'none';
        // }
        // else{
        //     updatebtn.style.display = 'inline-block';
        // }
        // this.isDisplayed = !this.isDisplayed;

    //     if(this.isDisplayed){
    //         btns.removeChild(updatebtn);
    //     }
    //     this.isDisplayed = !this.isDisplayed;

    // },

    forediting(qid){
        for(let i=0; i<this.questions.length; i++){
            // console.log(this.questions[i].quesid);
            if(this.questions[i].quesid == qid){
               return this.questions[i];
            }
        }
    },

    updation(qid){
        console.log("updation");
        for(let i=0; i<this.questions.length; i++){
            // console.log(this.questions[i].quesid);
            console.log("qid", qid);
            console.log("questions[i].quesid ", this.questions[i].quesid);
            if(this.questions[i].quesid == qid){
               return i;
            }
        }
    },

    search(searchInput){
        for(let i=0; i<this.questions.length; i++){
            if(this.questions[i].quesid == searchInput){
                return this.questions[i];
            }
        }
    }
}
