//creating question object

let obj = [
    {
    "question":"What is HTML ?",
    "opt1":"Hyper-text Markup Language",
    "opt2":"Hight-text Markup Language",
    "opt3":"Css Pre Processor",
    "opt4":"This is not an language",
    "answer":"Hyper-text Markup Language"
}, {
    "question":"What is '!DOCTYPE html' ?",
    "opt1":"This is not an HTML Abbr.",
    "opt2":"This re-present the HTML version",
    "opt3":"Css Selector",
    "opt4":"This is not an language",
    "answer":"This re-present the HTML version",
}, {
    "question":"Head is ?",
    "opt1":"a Selctor",
    "opt2":"a Tag",
    "opt3":"a Attribute",
    "opt4":"a script",
    "answer":"a Tag",
}, {
    "question":"What is section ?",
    "opt1":"Section is a symnaic Element this is part of HTML 5.0 versio. we can add slider or hero image on that section tag.",
    "opt2":"Section is part of HTML 4.0 version, we can add content on that section tag.",
    "opt3":"This is not an HTML part.",
    "opt4":"Section is always take aside place as well",
    "answer":"Section is a symnaic Element this is part of HTML 5.0 versio. we can add slider or hero image on that section tag.",
}, {
    "question":"Where will we place a link tag ?",
    "opt1":"Under Body",
    "opt2":"Under Head",
    "opt3":"Under Section",
    "opt4":"Under Title",
    "answer":"Under Head",
}, {
    "question":"Where will we place a script tag ?",
    "opt1":"Before Body end tag.",
    "opt2":"Before Head end tag.",
    "opt3":"Before Section end tag.",
    "opt4":"Before HTML end tag.",
    "answer":"Before Body end tag.",
}, {
    "question":"What is article ?",
    "opt1":"We can add img on this tag",
    "opt2":"we can add hero image or slider on this tag",
    "opt3":"We can write our content like paragraph,heading,form,services in this tag.",
    "opt4":"This is javascript Part.",
    "answer":"We can write our content like paragraph,heading,form,services in this tag.",
}, {
    "question":"Which attribute we can add in img tag ? ",
    "opt1":"href",
    "opt2":"src",
    "opt3":"data",
    "opt4":"object",
    "answer":"src",
}, {
    "question":"li is an.",
    "opt1":"Block level Element",
    "opt2":"Inline Element",
    "opt3":"Objective",
    "opt4":"none prperty",
    "answer":"Block level Element",
}, {
    "question":"li is an.",
    "opt1":"Block level Element",
    "opt2":"Inline Element",
    "opt3":"Objective",
    "opt4":"none prperty",
    "answer":"Block level Element",
}, {
    "question":"What is alt Attribute ?",
    "opt1":"This s img tag attribute we can add javascript code here.",
    "opt2":"This is anchor tag attributem this create the link.",
    "opt3":"This is img tag attribute, this is helpfull for SEO.",
    "opt4":"This is script attribute this is create path to another file.",
    "answer":"This is img tag attribute, this is helpfull for SEO.",
}];


// ADDED QUESTIONS  BY LOOPING
for(let i = 0;i < obj.length;i++){
    let quesTile = document.querySelector('.quiz-area').innerHTML+=`
        <div class="quize-start mb-2 p-2">
            <div class="question">
                <div>
                    <h3>${obj[i].question}</h3>
                </div>
            </div>
            <div>
                <form action="" class="options d-flex">
                        <div class="first-two">
                            <div class="first-op">  
                                <div class="form-check">
                                    <input class="form-check-input myRadio" type="radio" name="flexradioDefault" value='${obj[i].opt1}' id="opt1" class="opt disabled">
                                    <label class="form-check-label" for="opt1">
                                        ${obj[i].opt1}
                                    </label>
                                </div>
                            </div>
                            <div class="sec-op">
                                <div class="form-check">
                                    <input class="form-check-input myRadio" type="radio" name="flexradioDefault" id="opt2" value='${obj[i].opt2}' class="opt">
                                    <label class="form-check-label" for="opt2">
                                        ${obj[i].opt2}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="sec-two">
                            <div class="first-op">
                                <div class="form-check">
                                    <input class="form-check-input myRadio" type="radio" name="flexradioDefault" value='${obj[i].opt3}' id="opt3" class="opt">
                                    <label class="form-check-label" for="opt3">
                                        ${obj[i].opt3}
                                    </label>
                                </div>
                            </div>
                            <div class="sec-op">
                                <div class="form-check">
                                    <input class="form-check-input myRadio" type="radio" name="flexradioDefault" id="opt4" value='${obj[i].opt4}' class="opt">
                                    <label class="form-check-label" for="opt4">
                                        ${obj[i].opt4}
                                    </label>
                                </div>
                            </div>
                        </div>
                </form>
                <div class="correct-answer pt-3">
                    
                    <p class="p-3 ">
                        <span class="text-muted">
                            Your Answer - 
                        </span>
                        <strong>
                           <span class="your-answer"></span>
                        </strong>
                    </p>
                    <p class="p-3 alert alert-success">
                        <span class="text-dark">
                            Correct Answer - 
                        </span>
                        <strong>
                           <span class="right-ans"> ${obj[i].answer}</span>
                        </strong>
                    </p>
                </div>
                <hr>
            </div>
        <div>
    `;
}



let  check = document.getElementById('checkAnswer');
check.addEventListener('click', function(){
    let ans = document.getElementsByClassName('correct-answer');
    let yans = document.getElementsByClassName('your-answer');
 
   
   let rightAns = document.getElementsByClassName('right-ans');
   let quiz = document.getElementsByClassName('quize-start');
   
   let data = [];
   let seleArr = [];
   let final = [];
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
        if(i.checked){
            selectSave  = i.value;
            seleArr.push({'myselect': selectSave});
        }   
   }
   
   for(let i = 0; i < data.length;i++){
        anydata = data[i].myansh;
      
   }
  // console.log(final);
   for(let i = 0; i < seleArr.length;i++){
       anydata1 = seleArr[i].myselect;
       final.push(anydata1);
   }
    for(let i = 0; i < yans.length;i++){
        for(let i = 0; i < ans.length; i++){
            ans[i].style.display = "block";
         }
          
        for(let i = 0; i < final.length;i++){
            yans[i].innerText = final[i];
        }
        if(yans[i] == ans[i]){
            console.log("maths");
        }

    }

     for(let i = 0; i < rightAns.length;i++){
        //console.log(rightAns[i]);
        for(let i = 0; i < yans.length;i++){
            ///console.log(yans[i]);
           
        }
        if(rightAns[i].innerText == yans[i].innerText){
            yans[i].style.color = "green";
            yans[i].innerHTML += '&nbsp&nbsp&nbsp <i class="fa fa-check text-sucess" aria-hidden="true"></i>';
           
        }else{
            yans[i].style.color = "red";
            yans[i].innerHTML += '&nbsp&nbsp&nbsp <i class="fa fa-times text-danger" aria-hidden="true"></i>';
           
        }
    }
    let rescorrect = document.querySelectorAll('.fa-check');
    let reswrong = document.querySelectorAll('.fa-times');
   
    console.log(rescorrect.length);
    let ct = document.getElementById('ct');
    let wt = document.getElementById('wt');
    
    ct.innerHTML =  rescorrect.length;
    wt.innerHTML =  reswrong.length;
    tq.innerHTML =  totalquestion.length;
  
   let allinput =  document.getElementsByClassName("myRadio");
    for(let i =0;i<allinput.length;i++){
        allinput[i].disabled = true;
    }
    
});
let tq = document.getElementById('tq');
let totalquestion = document.querySelectorAll('.quize-start');
tq.innerHTML =  totalquestion.length;