lanjutL6.addEventListener("click", () => {
    answerValue = "";
    controls.classList.add("hide");
    startBtn.classList.add("hide");
    ucapan.classList.remove('hide');
    lanjutL3.classList.remove('hide');
    lanjutL4.classList.add('hide');
    lanjutL5.classList.add('hide');
    btnAns5.classList.add('hide');
    btnAns6.classList.add('hide');
    level = 6;
    tampil();
    question.style.color = "#131313";

    document.getElementById("ans1").innerHTML = "";
    document.getElementById("ans2").innerHTML = "";
    document.getElementById("ans3").innerHTML = "";
    document.getElementById("ans4").innerHTML = "";
    document.getElementById("ans5").innerHTML = "";
    document.getElementById("ans6").innerHTML = "";

    waktu.innerHTML = "Pertanyaan akan hilang dalam 3 detik.";

    [num1, num2] = [0, 0];
        const questionGenerator6= () => {
          
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
              setTimeout(function() {
                question.style.color = "#eeedf1";
                document.getElementById('inputValue').placeholder = "";
                return;
              }, 3000);
            } else {
              answerValue = solution;
              question.innerHTML = `${num1} + ${num2} = <input type="number" id="inputValue" placeholder="?"\>`;
              setTimeout(function() {
                question.style.color = "#eeedf1";
                document.getElementById('inputValue').placeholder = "";
                return;
              }, 3000);
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

            setTimeout(function() {
              document.getElementById("ans1").innerHTML = ans1;
              document.getElementById("ans2").innerHTML = ans2;
              document.getElementById("ans3").innerHTML = ans3;
              document.getElementById("ans4").innerHTML = ans4;
              document.getElementById("ans5").innerHTML = ans5;
              document.getElementById("ans6").innerHTML = ans6;
                },3000)
              
            
            const check6 = () => {
              // errorMessage.classList.add("hide");
              let userInput = document.getElementById("inputValue").value;
              //jika inuptan tidak kosong
              if (userInput) {
              if (userInput == answerValue) {
                  let username = document.getElementById('username').value;
                  lanjutL7.classList.remove('hide');
                  lanjutL5.classList.add("hide");
                  document.getElementById("kotakan").style.backgroundColor = "transparent";
                  document.getElementById("kotakan").style.display = "inline-flex";
                  document.getElementById("kotakan").style.width = "auto";
                  result.style.backgroundColor = "#79ff80";
                  score=score;
                  score += 10;
                  skor.innerHTML = score;
                  stopGame(`Yeayy !! Jawaban ${username} <span>Benar</span><br>Score +10`);
                  lanjutL6.classList.add('hide');

                  // lanjutL3.addEventListener('click', () => {
                  //   skor.innerHTML=score-20;
                  // })
              }
             
              else if(userInput !== answerValue) {
                  let username = document.getElementById('username').value;
                  document.getElementById("kotakan").style.backgroundColor = "transparent";
                  lanjutL7.classList.remove('hide');
                  result.style.backgroundColor = "#ff9a9a";
                  document.getElementById("kotakan").style.backgroundColor = "transparent";
                document.getElementById("kotakan").style.display = "inline-flex";
                document.getElementById("kotakan").style.width = "auto";
                  stopGame(`Ohh Tidak !! Jawaban ${username} <span> Salah</span>`);
                  lanjutL6.addEventListener('click', () => {
                    skor.innerHTML=score;
                  })

              }
              }
              //jika jawaban kosong
             
          }

            btnAns1.addEventListener("click", () => {
                let answere = parseInt(ans1);
                document.getElementById("inputValue").value = answere;
                check6()
            });
            btnAns2.addEventListener("click", () => {
                let answere = parseInt(ans2);
                document.getElementById("inputValue").value = answere;
                check6()
            });
            btnAns3.addEventListener("click", () => {
                let answere = parseInt(ans3);
                document.getElementById("inputValue").value = answere;
                check6()
            });
            btnAns4.addEventListener("click", () => {
                let answere = parseInt(ans4);
                document.getElementById("inputValue").value = answere;
                check6()
            });
            btnAns5.addEventListener("click", () => {
              let answere = parseInt(ans5);
              document.getElementById("inputValue").value = answere;
              check6()
            });
            btnAns6.addEventListener("click", () => {
              let answere = parseInt(ans6);
              document.getElementById("inputValue").value = answere;
              check6()
            });
            
           
          
          
            
          };
        questionGenerator6()
  

    const stopGame = (resultText) => {
      result.innerHTML = resultText;
      lanjutL6.innerText = "↩ Coba Lagi";
      result.classList.remove('hide')
      controls.classList.remove("hide");
      startBtn.classList.add("hide");
      lanjutL2.classList.add("hide");
      lanjutL3.classList.add("hide");
      lanjutL4.classList.add("hide");
      lanjutL5.classList.add("hide");
      judul.classList.add("hide");
      deskripsi.classList.add("hide");
      username.classList.add('hide');
      labelUsername.classList.add('hide');
      };
      
    
});

        
