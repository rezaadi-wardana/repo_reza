lanjutL3.addEventListener("click", () => {
    answerValue = "";
    controls.classList.add("hide");
    startBtn.classList.add("hide");
    ucapan.classList.remove('hide');
    lanjutL3.classList.remove('hide');
    lanjutL4.classList.add('hide');
    btnAns5.classList.add('hide');
    btnAns6.classList.add('hide');
    level = 3;
    tampil();

    [num1, num2] = [null, null];
        const questionGenerator3 = () => {
          

            let operators = ["+", "-","*","/"];
            let pembagi = ["2","3"];
            let nilaiBagi = ["24","30","42","48","66","54","60","72"]

           
            let randomOperator = operators[Math.floor(Math.random() * operators.length)];
            let randomPembagi = pembagi[Math.floor(Math.random() * pembagi.length)]
            let randomNilaiBagi = nilaiBagi[Math.floor(Math.random() * nilaiBagi.length)]

            if(randomOperator == "+" ){
              [num1, num2] = [randomNilaiBagi, randomValue(20, 50)];
              
              let solution = eval(`${num1} + ${num2} - ${num1/2}`);
              answerValue = solution;
              question.innerHTML = `${num1} + ${num2} - ${num1/2} = <input type="number" id="inputValue" placeholder="?"\>`;
            }else
            if (randomOperator == "-") {
              [num1, num2] = [randomNilaiBagi, randomValue(20, 100)];
              if(num2 > num1){
                [num1, num2] = [num2, num1];
                }
              
              let solution = eval(`${num1} - ${num2} + ${num1/2}`);
              answerValue = solution;
              question.innerHTML = `${num1} - ${num2} + ${num1/2} = <input type="number" id="inputValue" placeholder="?"\>`;
              
            } else
            if (randomOperator == "/") {
              [num1, num2] = [randomNilaiBagi, randomPembagi];

              let solution = eval(`${num1} / ${num2} + ${num1/2}`);
              answerValue = solution;
              question.innerHTML = `${num1} / ${num2} + ${num1/2}  = <input type="number" id="inputValue" placeholder="?"\>`;
            } else
            if (randomOperator == "*") {
                [num1, num2] = [ randomNilaiBagi, randomPembagi];

              let solution = eval(`${num1} * ${num2} - ${num1/2}`);
              answerValue = solution;
              question.innerHTML = `${num1} * ${num2} - ${num1/2}  = <input type="number" id="inputValue" placeholder="?"\>`;
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
            
            const check3 = () => {
              // errorMessage.classList.add("hide");
              let userInput = document.getElementById("inputValue").value;
              //jika inuptan tidak kosong
              if (userInput) {
              if (userInput == answerValue) {
                  let username = document.getElementById('username').value;
                  lanjutL4.classList.remove('hide');
                  document.getElementById("kotakan").style.backgroundColor = "transparent";
                  document.getElementById("kotakan").style.display = "inline-flex";
                  document.getElementById("kotakan").style.width = "auto";
                  result.style.backgroundColor = "#79ff80";
                  score=score;
                  score += 20;
                  skor.innerHTML = score;
                  stopGame(`Yeayy !! Jawaban ${username} <span>Benar</span><br>Score +15`);
                  lanjutL3.classList.add('hide');

                  // lanjutL3.addEventListener('click', () => {
                  //   skor.innerHTML=score-20;
                  // })
              }
             
              else if(userInput !== answerValue) {
                  let username = document.getElementById('username').value;
                  document.getElementById("kotakan").style.backgroundColor = "transparent";
                  lanjutL4.classList.remove('hide');
                  result.style.backgroundColor = "#ff9a9a";
                  document.getElementById("kotakan").style.backgroundColor = "transparent";
                document.getElementById("kotakan").style.display = "inline-flex";
                document.getElementById("kotakan").style.width = "auto";
                  stopGame(`Ohh Tidak !! Jawaban ${username} <span> Salah</span>`);
                  lanjutL3.addEventListener('click', () => {
                    skor.innerHTML=score;
                  })

              }
              }
              //jika jawaban kosong
             
          }

            btnAns1.addEventListener("click", () => {
                let answere = parseInt(ans1);
                document.getElementById("inputValue").value = answere;
                check3()
            });
            btnAns2.addEventListener("click", () => {
                let answere = parseInt(ans2);
                document.getElementById("inputValue").value = answere;
                check3()
            });
            btnAns3.addEventListener("click", () => {
                let answere = parseInt(ans3);
                document.getElementById("inputValue").value = answere;
                check3()
            });
            btnAns4.addEventListener("click", () => {
                let answere = parseInt(ans4);
                document.getElementById("inputValue").value = answere;
                check3()
            });
            btnAns5.addEventListener("click", () => {
              let answere = parseInt(ans5);
              document.getElementById("inputValue").value = answere;
              check3()
            });
            btnAns6.addEventListener("click", () => {
              let answere = parseInt(ans6);
              document.getElementById("inputValue").value = answere;
              check3()
            });
            
           
          
          
            
          };
        questionGenerator3()
  

    const stopGame = (resultText) => {
        result.innerHTML = resultText;
        lanjutL3.innerText = "↩ Coba Lagi";
        result.classList.remove('hide')
        controls.classList.remove("hide");
        startBtn.classList.add("hide");
        lanjutL2.classList.add("hide");
        judul.classList.add("hide");
        deskripsi.classList.add("hide");
        username.classList.add('hide');
        labelUsername.classList.add('hide');
    //     lanjutL3.addEventListener('click', () => {
    //       if(score>44){
    //         skor.innerHTML=score=25;
    //       }
    //       else if(score>34){
    //         skor.innerHTML=score=15;
    //     }
    //       else if(score>24){
    //           skor.innerHTML=score=10;
    //       }else if(score>9){
    //         skor.innerHTML=score=0;
    //       }else if (score<9){
    //         skor.innerHTML=score;
    //       }
    // });
      };
      
    
});

        