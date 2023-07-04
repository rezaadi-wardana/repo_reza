let operators = ["+", "-"];
const startBtn = document.getElementById("start-btn");
const question = document.getElementById("question");
const controls = document.querySelector(".controls-container");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");
const errorMessage = document.getElementById("error-msg");
const judul = document.getElementById("judul");
const deskripsi = document.getElementById("deskripsi");
const tampilkanNama = document.getElementById("tampilkanNama");
let answerValue;
let operatorQuestion;

//Mendapatkan nilai random
const randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;


function tampil(){
  let username = document.getElementById('username').value;
  tampilkanNama.innerHTML = username;
};

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

  //mengecek jawaban 
  submitBtn.addEventListener("click", () => {

    errorMessage.classList.add("hide");
    let userInput = document.getElementById("inputValue").value;
    //jika inuptan tidak kosong
    if (userInput) {
      if (userInput == answerValue) {
        let username = document.getElementById('username').value;
        stopGame(`Yeayy !! Jawaban ${username} <span>Benar</span>`);
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
  });
};


//Start Game
startBtn.addEventListener("click", () => {
  operatorQuestion = false;
  answerValue = "";
  errorMessage.innerHTML = "";
  errorMessage.classList.add("hide");
  controls.classList.add("hide");
  startBtn.classList.add("hide");
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
};