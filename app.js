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
        sklodowska: '0',
        newton: '1',
        fibonacci: '2',
        darwin: '3',
        humanista: '4'
    },
    {
        question: 'Które z odkryć nauki najbardziej Cię inspirują?',
        a: 'Promieniotwórczość, oczywiście!',
        b: 'Dynamika, termodynamika, grawitacja!',
        c: 'Macierze, ciągi, kombinatoryka - tu czuję się jak ryba w wodzie',
        d: 'Budowa komórek, genetyka, dobór naturalny,  teoria ewolucji!',
        e: 'Jestem humanistą! Inspiruje mnie Szekspir!',
        sklodowska: '0',
        newton: '1',
        fibonacci: '2',
        darwin: '3',
        humanista: '4'
    },
    {
        question: 'Gdybyś mógł wybrac coś dobrego do jedzonka, co by to było?',
        a: 'Polskie pierożki i bułeczka paryska',
        b: 'Ciasto z wieprzowiną, przegryzione pysznym brytyjskim Red Leicester',
        c: 'Gorgonzola z prosciutto crudo, margarita bez sosu czosnkowego i gelato o smaku pistacji!',
        d: 'Ciasto z jabłkami, bekonem i cebulą, a to wszystko polane sostem Worcestershire',
        e: 'Jestem humanistą! Żywię się literaturą!',
        sklodowska: '0',
        newton: '1',
        fibonacci: '2',
        darwin: '3',
        humanista: '4'
    },
    {
        question: 'W czasie wolnym ....?',
        a: 'Przeprowadzam eksperymenty w kuchni! Próbuję utopić jajko w słonej wodzie, rozpuszczam kawałki surowego mięsa w coca coli!',
        b: 'Leżę na polanie i wsłuchuję się w efekt Dopplera',
        c: 'Udowadniam w towarzystwie, dlaczego A -(B U C) jest równe (A-B) - C',
        d: 'Mam swoją prywatną hodowlę chomików dżungarskich oraz w oranżerii trzymam 12 gatunków zięb',
        e: 'Jestem humanistą! Czas wolny spędzam z literaturą!',
        sklodowska: '0',
        newton: '1',
        fibonacci: '2',
        darwin: '3',
        humanista: '4'
    },
    {
        question: 'Zawsze marzyłem aby zostać ... ',
        a: 'Technologiem chemicznym',
        b: 'Astronomem',
        c: 'Nauczycielem matematyki',
        d: 'Weterynarzem',
        e: 'Recenzentem książek beletrystycznych',
        sklodowska: '0',
        newton: '1',
        fibonacci: '2',
        darwin: '3',
        humanista: '4'
    },
];
const question = document.getElementById("questionGap");
const answer_a = document.getElementById("a-answ");
const answer_b = document.getElementById("b-answ");
const answer_c = document.getElementById("c-answ");
const answer_d = document.getElementById("d-answ");
const answer_e = document.getElementById("e-answ");
const submitBtn = document.getElementById("submitBtn");

let currentQuiz = 0;

loadQuiz();

function loadQuiz () {
    const quizDataNow = daneQuizu[currentQuiz];
    question.innerHTML = quizDataNow.question;
    answer_a.innerHTML = quizDataNow.a;
    answer_b.innerHTML = quizDataNow.b;
    answer_c.innerHTML = quizDataNow.c;
    answer_d.innerHTML = quizDataNow.d;
    answer_e.innerHTML = quizDataNow.e;
}
submitBtn.addEventListener("click", ()=>{
    currentQuiz++;
    if(currentQuiz < daneQuizu.length){
        loadQuiz();
    }
    else{
        alert("Finisz, zlicze punkty");
    }
});
