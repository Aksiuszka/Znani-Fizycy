
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


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
let currentQuestion=0;
let score=[];
let selectedAnswers = [];
const allQuestions = daneQuizu.length;

//assigning IDs
const container = document.getElementById("quiz");
const questionEl = document.getElementById("questionGap");
const answer_a = document.getElementById("a-answ");
const answer_b = document.getElementById("b-answ");
const answer_c = document.getElementById("c-answ");
const answer_d = document.getElementById("d-answ");
const answer_e = document.getElementById("e-answ");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const reloadButton = document.getElementById("reload-btn");
const result = document.getElementById("result");

//generuję pytanie
function generateQuestions(index){
  const question = daneQuizu[index];
  const option1total = daneQuizu[index].a_weight;
  const option2total = daneQuizu[index].b_weight;
  const option3total = daneQuizu[index].c_weight;
  const option4total = daneQuizu[index].d_weight;
  const option5total = daneQuizu[index].e_weight;
  //elementy html uzyskują nowe nazwy i atrybuty wartościujące
  questionEl.innerHTML = `${index+1}. ${question.question}`
  answer_a.setAttribute('data-total', `${option1total}`);
  answer_b.setAttribute('data-total', `${option2total}`);
  answer_c.setAttribute('data-total', `${option3total}`);
  answer_d.setAttribute('data-total', `${option4total}`);
  answer_e.setAttribute('data-total', `${option5total}`);
  answer_a.innerHTML = `${question.a}`
  answer_b.innerHTML = `${question.b}`
  answer_c.innerHTML = `${question.c}`
  answer_d.innerHTML = `${question.d}`
  answer_e.innerHTML = `${question.e}`
}
function loadNextQuestion(){
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    const quizScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
    score.push(quizScore);
    selectedAnswers.push();
    const calculateTotalScore = score.reduce((total,currentNumber) => total + currentNumber);
    currentQuestion++;
    //kiedy skonczymy, czyścimy radio
    selectedOption.checked = false;
    //jeśli quiz osiągnie koniec, chcemy żeby wyświetlił się napis koniec
    if(currentQuestion == allQuestions-1)
    {
            nextButton.textContent = "Koniec Quizu";
            
    }
    if(currentQuestion == allQuestions)
    {
            
            result.innerHTML = 
            `<h4>Twój score to ${calculateTotalScore} </h4>
            <div class="summary">
            <h3>Punktacja</h3>
            <p>Oto którym naukowcem jesteś w głębi serca:</p>
            <p>powyżej 15- Nie jesteś naukowcem! Jesteś humanistą!</p>
            <p>12 - 15 - Charles Darwin</p>
            <p>8 - 11 - Leonardo Fibonacci</p>
            <p>4 - 7 - Sir Isaac Newton </p>
            <p>0 - 3 - Maria Skłodowska Curie</p>
            <button id="reload-btn" class="start-btn btn">Reload</i></button>
        </div>
        `;
        return;
    }
    generateQuestions(currentQuestion);
}
function loadPrevQuestion(){
    currentQuestion--;
    score.pop();
    generateQuestions(currentQuestion);

}
function reloadQuiz(e){
if(e.target.matches('button')){
    currentQuestion=0;
    score=[];
    location.reload();
}
}

generateQuestions(currentQuestion);

nextButton.addEventListener("click",loadNextQuestion);
prevButton.addEventListener("click", loadPrevQuestion);
result.addEventListener("click", reloadQuiz);


