const ques=[
    {
        que: 'which is the largest animal in the world ?',
        ans:[
            {text: 'Shark', correct:'flase'},
            {text: 'Elephant', correct:'flase'},
            {text: 'Giraffe', correct:'flase'},
            {text: 'Blue Whale', correct:'true'}
        ]
    },
    {
        que: 'which is the largest animal in the world ?',
        ans:[
            {text: 'Shark', correct:'flase'},
            {text: 'Elephant', correct:'flase'},
            {text: 'Giraffe', correct:'flase'},
            {text: 'Blue Whale', correct:'true'}
        ]
    },
    {
        que: 'which is the largest animal in the world ?',
        ans:[
            {text: 'Blue Whale', correct:'true'},
            {text: 'Shark', correct:'flase'},
            {text: 'Elephant', correct:'flase'},
            {text: 'Giraffe', correct:'flase'}
        ]
    },
    {
        que: 'which is the largest animal in the world ?',
        ans:[
            {text: 'Shark', correct:'flase'},
            {text: 'Elephant', correct:'flase'},
            {text: 'Giraffe', correct:'flase'},
            {text: 'Blue Whale', correct:'true'}
        ]
    },
    {
        que: 'which is the largest animal in the world ?',
        ans:[
            {text: 'Shark', correct:'flase'},
            {text: 'Elephant', correct:'flase'},
            {text: 'Giraffe', correct:'flase'},
            {text: 'Blue Whale', correct:'true'}
        ]
    },
    {
        que: 'which is the largest animal in the world ?',
        ans:[
            {text: 'Shark', correct:'flase'},
            {text: 'Elephant', correct:'flase'},
            {text: 'Blue Whale', correct:'true'},
            {text: 'Giraffe', correct:'flase'}
        ]
    },
    {
        que: 'which is the largest animal in the world ?',
        ans:[
            {text: 'Shark', correct:'flase'},
            {text: 'Blue Whale', correct:'true'},
            {text: 'Elephant', correct:'flase'},
            {text: 'Giraffe', correct:'flase'}
        ]
    }
];
const que=document.getElementById('que')
const ansBtn=document.getElementById('option')
const nxt=document.getElementById('btn')

let currentQueNO=0;
let score=0;

function startQuiz(){
    let currentQueNO=0;
    let score=0;
    nxt.innerText='Next';
    showQue();
}
function reset(){
    nxt.style.display='none';
    while(ansBtn.firstChild){
        ansBtn.removeChild(ansBtn.firstChild);
    }
}
function showQue() {
    reset();
    let currentQue = ques[currentQueNO];
    let queNo = currentQueNO + 1;
    que.innerText = queNo + '. ' + currentQue.que;

    currentQue.ans.forEach(ans => {

        const button = document.createElement('button');
        button.innerText = ans.text;
        button.classList.add('btn');
        ansBtn.appendChild(button);
        if (ans.correct) {
            button.dataset.correct = ans.correct;
        }
        button.addEventListener('click', (e) => {
            const selectedBtn = e.target;
            const correct = selectedBtn.dataset.correct=== 'true';
            if (correct) {
               selectedBtn.style.backgroundColor = 'green';
               score++;
               // selectedBtn.classList.add('correct');
            }
            else{
                selectedBtn.style.backgroundColor = 'red';
                // selectedBtn.classList.add('wrong');
            }
            nxt.style.display = 'block';
            Array.from(ansBtn.children).forEach(button => {
                if (button.dataset.correct=== 'true') {
                    button.style.backgroundColor = 'green';
                }
                button.disabled = true;
            });
        });
    });
}
nxt.addEventListener('click', () => {
    currentQueNO++;
    if (currentQueNO < ques.length-1) {
        showQue();
    }
    else {
        que.innerText = 'Your Score is ' + score + ' out of ' + ques.length;
        reset();
        nxt.innerText = 'Restart';
        nxt.style.display = 'block';
        nxt.addEventListener('click', () => {
            startQuiz();
        });
    }
});
startQuiz();

