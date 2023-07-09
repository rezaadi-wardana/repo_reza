lanjutL2.addEventListener("click", () => {
    answerValue = "";
    errorMessage.innerHTML = "";
    errorMessage.classList.add("hide");
    controls.classList.add("hide");
    startBtn.classList.add("hide");
    ucapan.classList.remove('hide');
    lanjutL2.classList.remove('hide');
    lanjutL3.classList.add('hide');
    btnAns5.classList.remove('hide')
    btnAns6.classList.remove('hide')
    level++;
    tampil();

        const questionGenerator2 = () => {

            let operators = ["+", "-","*","/"];
            let pembagi = ["2","3"];
            let nilaiBagi = ["6","12","18","24","30","42","48","66","52","60","72"]

            //menentukan angka anatara 1-20
            let [num1, num2] = [randomValue(1, 10), randomValue(1, 10)];
            // let random = randomValue(1,20);
            //menentukan operator random
            let randomOperator = operators[Math.floor(Math.random() * operators.length)];
            let randomPembagi = pembagi[Math.floor(Math.random() * pembagi.length)]
            let randomNilaiBagi = nilaiBagi[Math.floor(Math.random() * nilaiBagi.length)]
            if(randomOperator == "+" ){
              [num1, num2] = [randomValue(20, 50), randomValue(20, 50)];
            }
            if (randomOperator == "-") {
              [num1, num2] = [randomValue(20, 100), randomValue(20, 100)];
              if(num2 > num1){
                [num1, num2] = [num2, num1];
                }
            }
            if (randomOperator == "/") {
              [num1, num2] = [randomNilaiBagi, randomPembagi];
            }
          
            //membuat variabel jawaban 
            let solution = eval(`${num1}${randomOperator}${num2}`);
          
            if (randomOperator == "-") {
                answerValue = solution;
                question.innerHTML = `${num1} - ${num2}  = <input type="number" id="inputValue" placeholder="?"\>`;
            } else if(randomOperator == "+") {
                answerValue = solution;
                question.innerHTML = `${num1} + ${num2}  = <input type="number" id="inputValue" placeholder="?"\>`;
            } else if(randomOperator == "/") {
                answerValue = solution;
                question.innerHTML = `${num1} / ${num2} = <input type="number" id="inputValue" placeholder="?"\>`;
            } else {
                answerValue = solution;
                question.innerHTML = `${num1} * ${num2} = <input type="number" id="inputValue" placeholder="?"\>`;
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
            ans2 = randomValue(1,100);
            ans3 = randomValue(1,100);
            ans4 = randomValue(1,100);
            ans5 = randomValue(1,100);
            ans6 = randomValue(1,100);
            
            document.getElementById("ans1").innerHTML = ans1;
            document.getElementById("ans2").innerHTML = ans2;
            document.getElementById("ans3").innerHTML = ans3;
            document.getElementById("ans4").innerHTML = ans4;
            document.getElementById("ans5").innerHTML = ans5;
            document.getElementById("ans6").innerHTML = ans6;
          
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
            
            //mengecek jawaban 
            // submitBtn.addEventListener("click", () => {
            const check = () => {
              errorMessage.classList.add("hide");
              let userInput = document.getElementById("inputValue").value;
              //jika inuptan tidak kosong
              if (userInput) {
                if (userInput == answerValue) {
                  let username = document.getElementById('username').value;
                  stopGame(`Yeayy !! Jawaban ${username} <span>Benar</span><br>`);
                  lanjutL3.classList.remove('hide');
                  document.getElementById("kotakan").style.backgroundColor = "transparent";
                  document.getElementById("kotakan").style.display = "inline-flex";
                  document.getElementById("kotakan").style.width = "auto";
                  

                  // lanjutL2.style.margin = "auto";
                }
                // // jika jawaban benar
                // else if (operatorQuestion && !operators.includes(userInput)) {
                //   errorMessage.classList.remove("hide");
                //   errorMessage.innerHTML = "Tolong masukkan angka yang benar!";
                // }
                // //jika jawaban salah
                else {
                  let username = document.getElementById('username').value;
                  stopGame(`Ohh Tidak !! Jawaban ${username} <span> Salah</span>`);
                  document.getElementById("kotakan").style.backgroundColor = "transparent";
                }
              }
              //jika jawaban kosong
              else {
                errorMessage.classList.remove("hide");
                errorMessage.innerHTML = "Jawaban tidak boleh kosong";
              }
            }
           
            level--;
          };
        questionGenerator2()

    const stopGame = (resultText) => {
        result.innerHTML = resultText;
        lanjutL2.innerText = "Ulangi";
        startBtn.classList.add("hide");
        judul.classList.add("hide");
        deskripsi.classList.add("hide");
        username.classList.add('hide');
        labelUsername.classList.add('hide');
      };
      
});

        