//creating question object

let obj = [
    {
    "question":"What is HTML ?",
    "opt1":"Programming Lang",
    "opt2":"Coding",
    "opt3":"App Development",
    "opt4":"This is not a Lang",
    "answer":"Programming Lang"
}, {
    "question":"What is SASS ?",
    "opt1":"Programming Lang",
    "opt2":"Pre Processor",
    "opt3":"App Development",
    "opt4":"This is not a Lang",
    "answer":"Pre Processor"
}];


// ADDED QUESTIONS  BY LOOPING
for(let i = 0;i < obj.length;i++){
    let quesTile = document.querySelector('.quiz-area').innerHTML+=`
        <div class="quize-start mb-2 p-2" disabled="true">
            <div class="question">
                <h3>${obj[i].question}</h3>
            </div>
            <div>
                <form action="" class="options d-flex align-items-center">
                        <div class="first-two">
                            <div class="first-op">  
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="flexcheckboxDefault" value='${obj[i].opt1}' id="opt1" class="opt">
                                    <label class="form-check-label" for="opt1">
                                        ${obj[i].opt1}
                                    </label>
                                </div>
                            </div>
                            <div class="sec-op">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="flexcheckboxDefault" id="opt2" value='${obj[i].opt2}' class="opt">
                                    <label class="form-check-label" for="opt2">
                                        ${obj[i].opt2}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="sec-two">
                            <div class="first-op">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="flexcheckboxDefault" value='${obj[i].opt3}' id="opt3" class="opt">
                                    <label class="form-check-label" for="opt3">
                                        ${obj[i].opt3}
                                    </label>
                                </div>
                            </div>
                            <div class="sec-op">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="flexcheckboxDefault" id="opt4" value='${obj[i].opt4}' class="opt">
                                    <label class="form-check-label" for="opt4">
                                        ${obj[i].opt4}
                                    </label>
                                </div>
                            </div>
                        </div>
                </form>
                <div class="correct-answer pt-3">
                    <p>
                        <span class="text-success">
                            Correct Answer - 
                        </span>
                        <strong>
                           <span class="right-ans"> ${obj[i].answer}</span>
                        </strong>
                    </p>
                </div>
            </div>
        <div>
    `;
}



let  check = document.getElementById('checkAnswer');
check.addEventListener('click', function(){
    let ans = document.getElementsByClassName('correct-answer');
   for(let i = 0; i < ans.length; i++){
      ans[i].style.display = "block";
   }
   let rightAns = document.getElementsByClassName('right-ans');
   let data = [];
   let seleArr = [];
   let savedata ;
   let selectSave;
   let anydata;
   let anydata1;

   for(let i = 0; i < rightAns.length;i++){
        savedata = rightAns[i].innerText; 
        data.push({'myansh': savedata});
   }
   let selectAns = document.getElementsByTagName('input');
   
   for(i of selectAns){
        selectSave  = i.value;
        seleArr.push({'myselect': selectSave});
   }
 
   for(let i = 0; i < data.length;i++){
        anydata = data[i].myansh;
        //console.log(anydata);
   }
   for(let i = 0; i < seleArr.length;i++){
       anydata1 = seleArr[i].myselect; 
   }

   if(anydata == anydata1){
        console.log("Match");
   }
   
 

});
