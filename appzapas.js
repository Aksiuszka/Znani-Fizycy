let animationTimeline = gsap.timeline({
    scrollTrigger:{
        trigger: ".introSection",
        start: "0%",
        end: "100%",
        markers: false, //markery pokazują gdzie zaczyna się animacja
        scrub: true, //przy scrollowaniu uaktywnia fromTo
        pin:true, //przykleja to kółko
    },
});
animationTimeline.fromTo(".introSection", {clipPath: 'circle(10%)'}, {clipPath: 'circle(80%)', duration:4});
animationTimeline.fromTo(".fizykografika", {opacity:1}, {opacity:0, duration:1},"-=4");
animationTimeline.fromTo(".introText", {opacity:0}, {opacity:1, duration:1});

//Druga strona - Psychotest //
const daneQuizu =[
    {
        question: 'Jaki był Twój ulubiony przedmiot w szkole?',
        a: 'Chemia',
        b: 'Fizyka',
        c: 'Matematyka',
        d: 'Biologia',
        e: 'Jestem humanistą! W szkole cytowałam Szekspira!',
        a_weight: '0',
        b_weight: '1',
        c_weight: '2',
        d_weight: '3',
        e_weight: '4'
    },
    {
        question: 'Które z odkryć nauki najbardziej Cię inspirują?',
        a: 'Promieniotwórczość, oczywiście!',
        b: 'Dynamika, termodynamika, grawitacja!',
        c: 'Macierze, ciągi, kombinatoryka - tu czuję się jak ryba w wodzie',
        d: 'Budowa komórek, genetyka, dobór naturalny,  teoria ewolucji!',
        e: 'Jestem humanistą! Inspiruje mnie Szekspir!',
        a_weight: '0',
        b_weight: '1',
        c_weight: '2',
        d_weight: '3',
        e_weight: '4'
    },
    {
        question: 'Gdybyś mógł wybrac coś dobrego do jedzonka, co by to było?',
        a: 'Polskie pierożki i bułeczka paryska',
        b: 'Ciasto z wieprzowiną, przegryzione pysznym brytyjskim Red Leicester',
        c: 'Gorgonzola z prosciutto crudo, margarita bez sosu czosnkowego i gelato o smaku pistacji!',
        d: 'Ciasto z jabłkami, bekonem i cebulą, a to wszystko polane sostem Worcestershire',
        e: 'Jestem humanistą! Żywię się literaturą!',
        a_weight: '0',
        b_weight: '1',
        c_weight: '2',
        d_weight: '3',
        e_weight: '4'
    },
    {
        question: 'W czasie wolnym ....?',
        a: 'Przeprowadzam eksperymenty w kuchni! Próbuję utopić jajko w słonej wodzie, rozpuszczam kawałki surowego mięsa w coca coli!',
        b: 'Leżę na polanie i wsłuchuję się w efekt Dopplera',
        c: 'Udowadniam w towarzystwie, dlaczego A -(B U C) jest równe (A-B) - C',
        d: 'Mam swoją prywatną hodowlę chomików dżungarskich oraz w oranżerii trzymam 12 gatunków zięb',
        e: 'Jestem humanistą! Czas wolny spędzam z literaturą!',
        a_weight: '0',
        b_weight: '1',
        c_weight: '2',
        d_weight: '3',
        e_weight: '4'
    },
    {
        question: 'Zawsze marzyłem aby zostać ... ',
        a: 'Technologiem chemicznym',
        b: 'Astronomem',
        c: 'Nauczycielem matematyki',
        d: 'Weterynarzem',
        e: 'Recenzentem książek beletrystycznych',
        a_weight: '0',
        b_weight: '1',
        c_weight: '2',
        d_weight: '3',
        e_weight: '4'
    },
];
const question = document.getElementById("questionGap");
const answer_a = document.getElementById("a-answ");
const answer_b = document.getElementById("b-answ");
const answer_c = document.getElementById("c-answ");
const answer_d = document.getElementById("d-answ");
const answer_e = document.getElementById("e-answ");
const submitBtn = document.getElementById("submitBtn");
const answerEls = document.querySelectorAll(".answer");
const quizBoard = document.getElementById("quiz");

let currentQuiz = 0;
let score= 0;

loadQuiz();

function loadQuiz () {
    deselectAnswers();
    //const selectedAnswer = document.querySelector('input[type="radio"]:checked');
    //if(!selectedAnswer){
        //alert("Należy wybrać odpowiedź!");
        //return;
    //}
    const quizDataNow = daneQuizu[currentQuiz];
    question.innerHTML = quizDataNow.question;
    answer_a.innerHTML = quizDataNow.a;
    answer_b.innerHTML = quizDataNow.b;
    answer_c.innerHTML = quizDataNow.c;
    answer_d.innerHTML = quizDataNow.d;
    answer_e.innerHTML = quizDataNow.e;
}
function isSelected(){
let answerDefault = undefined;
answer.forEach((singleAnswer)=>{
    if(singleAnswer.checked){
        answerDefault=singleAnswer.id;
    }
});
return answer;
}
function deselectAnswers() {
    answer.forEach((singleAnswer) => {
        singleAnswer.checked = false;
    });
}

submitBtn.addEventListener("click", ()=>{
    const answerElement = isSelected();
    if(answerElement){
        if(answerElement===daneQuizu[currentQuiz].a)
        {
            score = score+0;
        }
        else if(answerElement===daneQuizu[currentQuiz].b)
        {
            score = score+1;
        }
        else if(answerElement===daneQuizu[currentQuiz].c)
        {
            score = score+2;
        }
        else if(answerElement===daneQuizu[currentQuiz].d)
        {
            score = score+3;
        }
        else if(answerElement===daneQuizu[currentQuiz].e)
        {
            score = score+4;
        }
   
    currentQuiz++;
    if(currentQuiz < daneQuizu.length){
        loadQuiz();
    }
    else{
        quizBoard.innerHTML=`
        <h2>uzyskałeś ${score}</h2>`;
    }
}

}); 
