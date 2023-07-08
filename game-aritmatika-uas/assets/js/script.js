let operators = ["+", "-"];
const startBtn = document.getElementById("start-btn");
const lanjutL2 = document.getElementById("lanjutL2");
const question = document.getElementById("question");
const controls = document.querySelector(".controls-container");
const result = document.getElementById("result");
const errorMessage = document.getElementById("error-msg");
const judul = document.getElementById("judul");
const deskripsi = document.getElementById("deskripsi");
const tampilkanNama = document.getElementById("tampilkanNama");
const ucapan = document.getElementById("ucapan");
const username = document.getElementById("username");
const labelUsername = document.getElementById("labelUsername");
const answer = document.getElementById("answer");
const btnAns1 = document.getElementById("btn-ans1");
const btnAns2 = document.getElementById("btn-ans2");
const btnAns3 = document.getElementById("btn-ans3");
const btnAns4 = document.getElementById("btn-ans4");
let answerValue;
let operatorQuestion;

//Mendapatkan nilai random
const randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;


function tampil(){
  let username = document.getElementById('username').value;
  tampilkanNama.innerHTML = "Nama : ";
  tampilkanNama.innerHTML += username;
};

ucapan.classList.add('hide');
lanjutL2.classList.add('hide');

const questionGenerator = () => {
  
  //menentukan angka anatara 1-20
  let [num1, num2] = [randomValue(1, 20), randomValue(1, 20)];
  
  //menentukan operator random
  let randomOperator = operators[Math.floor(Math.random() * operators.length)];

  if (randomOperator == "-" && num2 > num1) {
    [num1, num2] = [num2, num1];
  }
  // if (randomOperator == "/" && num2 > num1) {
  //   [num1, num2] = [num2, num1];
  // }

  //membuat variabel jawaban 
  let solution = eval(`${num1}${randomOperator}${num2}`);

  if (randomOperator == "-") {
    answerValue = solution;
    question.innerHTML = `${num1} - ${num2} = <input type="number" id="inputValue" placeholder="?"\>`;
  } else {
    answerValue = solution;
    question.innerHTML = `${num1} + ${num2} = <input type="number" id="inputValue" placeholder="?"\>`;
  }
  

  document.getElementById("btn-ans1").style.order = `${randomValue(1,5)}`;
  document.getElementById("btn-ans2").style.order = `${randomValue(1,5)}`;
  document.getElementById("btn-ans3").style.order = `${randomValue(1,5)}`;
  document.getElementById("btn-ans4").style.order = `${randomValue(1,5)}`;
  
  let ans1 = document.getElementById("ans1")
  let ans2 = document.getElementById("ans2")
  let ans3 = document.getElementById("ans3")
  let ans4 = document.getElementById("ans4")
  
  ans1 = answerValue;
  ans2 = randomValue(1,40);
  ans3 = randomValue(1,40);
  ans4 = randomValue(1,40);
  
  document.getElementById("ans1").innerHTML = ans1;
  document.getElementById("ans2").innerHTML = ans2;
  document.getElementById("ans3").innerHTML = ans3;
  document.getElementById("ans4").innerHTML = ans4;

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
  
  //mengecek jawaban 
  // submitBtn.addEventListener("click", () => {
  const check = () => {
    errorMessage.classList.add("hide");
    let userInput = document.getElementById("inputValue").value;
    //jika inuptan tidak kosong
    if (userInput) {
      if (userInput == answerValue) {
        let username = document.getElementById('username').value;
        stopGame(`Yeayy !! Jawaban ${username} <span>Benar</span>`);
        lanjutL2.classList.remove('hide');
      }
      // jika jawaban benar
      else if (operatorQuestion && !operators.includes(userInput)) {
        errorMessage.classList.remove("hide");
        errorMessage.innerHTML = "Tolong masukkan angka yang benar!";
      }
      //jika jawaban salah
      else {
        let username = document.getElementById('username').value;
        stopGame(`Ohh Tidak !! Jawaban ${username} <span> Salah</span>`);
      }
    }
    //jika jawaban kosong
    else {
      errorMessage.classList.remove("hide");
      errorMessage.innerHTML = "Jawaban tidak boleh kosong";
    }
  }
  // );
  
};


//Start Game
startBtn.addEventListener("click", () => {
  operatorQuestion = false;
  answerValue = "";
  errorMessage.innerHTML = "";
  errorMessage.classList.add("hide");
  controls.classList.add("hide");
  startBtn.classList.add("hide");
  ucapan.classList.remove('hide');
  lanjutL2.classList.add('hide');
  questionGenerator();
});

//stop game
const stopGame = (resultText) => {
  result.innerHTML = resultText;
  startBtn.innerText = "Restart";
  controls.classList.remove("hide");
  startBtn.classList.remove("hide");
  judul.classList.add("hide");
  deskripsi.classList.add("hide");
  // ucapan.classList.add('hide');
  username.classList.add('hide');
  labelUsername.classList.add('hide');
};