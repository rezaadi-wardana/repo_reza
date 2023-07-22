const startBtn = document.getElementById("start-btn");
const lanjutL2 = document.getElementById("lanjutL2");
const lanjutL3 = document.getElementById("lanjutL3");
const lanjutL4 = document.getElementById("lanjutL4");
const lanjutL5 = document.getElementById("lanjutL5");
const lanjutL6 = document.getElementById("lanjutL6");
const lanjutL7 = document.getElementById("lanjutL7");
const lanjutL8 = document.getElementById("lanjutL8");
const lanjutL9 = document.getElementById("lanjutL9");
const lanjutL10 = document.getElementById("lanjutL10");
const selesai = document.getElementById("selesai");
const question = document.getElementById("question");
const controls = document.querySelector(".controls-container");
const result = document.getElementById("result");
// const errorMessage = document.getElementById("error-msg");
const judul = document.getElementById("judul");
const deskripsi = document.getElementById("deskripsi");
const tampilkanNama = document.getElementById("tampilkanNama");
const ucapan = document.getElementById("ucapan");
const ucapan2 = document.getElementById("ucapan2");
const username = document.getElementById("username");
const labelUsername = document.getElementById("labelUsername");
const answer = document.getElementById("answer");
let btnAns1 = document.getElementById("btn-ans1");
let btnAns2 = document.getElementById("btn-ans2");
let btnAns3 = document.getElementById("btn-ans3");
let btnAns4 = document.getElementById("btn-ans4");
let btnAns5 = document.getElementById("btn-ans5");
let btnAns6 = document.getElementById("btn-ans6");
let kotakan = document.getElementById('kotakan');
const waktu = document.getElementById("waktu");

let answerValue;
let score=0;
let skor = document.getElementById('score');

const randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let level = 1;
function tampil(){
  let username = document.getElementById('username').value;
  tampilkanNama.innerHTML = "Nama Pemain : ";
  tampilkanNama.innerHTML += username;
  document.getElementById("tampilkanLevel").innerHTML = "LEVEL " +  level;
  ucapan2.classList.remove('hide');
};

ucapan.classList.add('hide');
ucapan2.classList.add('hide');
lanjutL2.classList.add('hide');
lanjutL3.classList.add('hide');
lanjutL4.classList.add('hide');
lanjutL5.classList.add('hide');
lanjutL6.classList.add('hide');
lanjutL7.classList.add('hide');
lanjutL8.classList.add('hide');
lanjutL9.classList.add('hide');
lanjutL10.classList.add('hide');
selesai.classList.add('hide');
result.classList.add('hide')

kotakan.addEventListener("click", () => {
  kotakan.style.animation = "none";
})

let operators = ["+", "-"];


const questionGenerator = () => {
  btnAns5.classList.add('hide')
  btnAns6.classList.add('hide')

  //menentukan angka anatara 1-20
  let [num1, num2] = [randomValue(1, 20), randomValue(1, 20)];
  
  //menentukan operator random
  let randomOperator = operators[Math.floor(Math.random() * operators.length)];

  if (randomOperator == "-" && num2 > num1) {
    [num1, num2] = [num2, num1];
  }
  
  //membuat variabel jawaban 
  let solution = eval(`${num1}${randomOperator}${num2}`);

  if (randomOperator == "-") {
    answerValue = solution;
    question.innerHTML = `${num1} - ${num2} = <input type="number" id="inputValue" placeholder="?"\>`;

  } else {
    answerValue = solution;
    question.innerHTML = `${num1} + ${num2} = <input type="number" id="inputValue" placeholder="?"\>`;
  }
  

  document.getElementById("btn-ans1").style.order = `${randomValue(1,7)}`;
  document.getElementById("btn-ans2").style.order = `${randomValue(1,7)}`;
  document.getElementById("btn-ans3").style.order = `${randomValue(1,7)}`;
  document.getElementById("btn-ans4").style.order = `${randomValue(1,7)}`;
  document.getElementById("btn-ans5").style.order = `${randomValue(1,7)}`;
  document.getElementById("btn-ans6").style.order = `${randomValue(1,7)}`;

  let ans1 = document.getElementById("ans1")
  let ans2 = document.getElementById("ans2")
  let ans3 = document.getElementById("ans3")
  let ans4 = document.getElementById("ans4")
  let ans5 = document.getElementById("ans5")
  let ans6 = document.getElementById("ans6")

  
  ans1 = answerValue;
  ans2 = randomValue(1,40);
  ans3 = randomValue(1,40);
  ans4 = randomValue(1,40);
  ans5 = randomValue(1,40);
  ans6 = randomValue(1,40);

  document.getElementById("ans1").innerHTML = ans1;
  document.getElementById("ans2").innerHTML = ans2;
  document.getElementById("ans3").innerHTML = ans3;
  document.getElementById("ans4").innerHTML = ans4;
  document.getElementById("ans5").innerHTML = ans5;
  document.getElementById("ans6").innerHTML = ans6;
  
  
  
  const check = () => {
    // errorMessage.classList.add("hide");
    let userInput = document.getElementById("inputValue").value;
    //jika inuptan tidak kosong
    if (userInput) {
      
      if (userInput == answerValue) {

        let username = document.getElementById('username').value;
        lanjutL2.classList.remove('hide');
        document.getElementById("kotakan").style.backgroundColor = "transparent";
        document.getElementById("kotakan").style.display = "inline-flex";
        document.getElementById("kotakan").style.width = "auto";
        result.style.backgroundColor = "#79ff80";
        score=score;
        score += 10;
        skor.innerHTML = score;
        stopGame(`Yeayy !! Jawaban ${username} <span>Benar</span><br>Score +10`);
  startBtn.classList.add("hide");
        
        
      }else if  (userInput !== answerValue){
        
        let username = document.getElementById('username').value;
        lanjutL2.classList.remove('hide');
        document.getElementById("kotakan").style.backgroundColor = "transparent";
        result.style.backgroundColor = "#ff9a9a";  
        document.getElementById("kotakan").style.backgroundColor = "transparent";
        document.getElementById("kotakan").style.display = "inline-flex";
        document.getElementById("kotakan").style.width = "auto";
        stopGame(`Ohh Tidak !! Jawaban ${username} <span> Salah</span>`);
        
  }
  
      
    }
    
  }

  btnAns1.addEventListener("click", () => {
    let answere = parseInt(ans1);
    document.getElementById("inputValue").value = answere;
    check()
  });
  btnAns2.addEventListener("click", () => {
    let answere = parseInt(ans2);
    document.getElementById("inputValue").value = answere;
    check()
  });
  btnAns3.addEventListener("click", () => {
    let answere = parseInt(ans3);
    document.getElementById("inputValue").value = answere;
    check()
  });
  btnAns4.addEventListener("click", () => {
    let answere = parseInt(ans4);
    document.getElementById("inputValue").value = answere;
    check()
  });
  btnAns5.addEventListener("click", () => {
    let answere = parseInt(ans5);
    document.getElementById("inputValue").value = answere;
    check()
  });
  btnAns6.addEventListener("click", () => {
    let answere = parseInt(ans6);
    document.getElementById("inputValue").value = answere;
    check()
  });

};


//Start Game
startBtn.addEventListener("click", () => {
  answerValue = "";
  controls.classList.add("hide");
  startBtn.classList.add("hide");
  ucapan.classList.remove('hide');
  lanjutL2.classList.add('hide');
  questionGenerator();
  tampil()
});

//stop game
 

  const stopGame = (resultText) => {
  result.innerHTML = resultText;
  startBtn.innerText = "↩ Coba Lagi";
  result.classList.remove('hide')
  controls.classList.remove("hide");
  controls.style.backgroundImage = "url(assets/img/bga.jpg)";
  startBtn.classList.remove("hide");
  judul.classList.add("hide");
  deskripsi.classList.add("hide");
  username.classList.add('hide');
  labelUsername.classList.add('hide');
  // startBtn.addEventListener('click', () => {
  //   if(score>9){
  //     skor.innerHTML=score=0;
  //   }else if(score<9){
  //     skor.innerHTML=score;
  //   }
  // })
};