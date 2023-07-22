lanjutL7.addEventListener("click", () => {
    answerValue = "";
    controls.classList.add("hide");
    startBtn.classList.add("hide");
    ucapan.classList.remove('hide');
    lanjutL3.classList.remove('hide');
    lanjutL4.classList.add('hide');
    lanjutL5.classList.add('hide');
    lanjutL6.classList.add('hide');
   
    level = 7;
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
        const questionGenerator7= () => {
            btnAns5.classList.remove('hide')
            btnAns6.classList.remove('hide')
    
                let operators = ["*","/"];
                let pembagi = ["2","3"];
                let nilaiBagi = ["6","12","18","24","30","42","48","66","54","60","72"]
    
                //menentukan angka anatara 1-20
                let [num1, num2] = [randomValue(10, 20), randomValue(1, 10)];
                // let random = randomValue(1,20);
                //menentukan operator random
                let randomOperator = operators[Math.floor(Math.random() * operators.length)];
                let randomPembagi = pembagi[Math.floor(Math.random() * pembagi.length)]
                let randomNilaiBagi = nilaiBagi[Math.floor(Math.random() * nilaiBagi.length)]
                
                if (randomOperator == "/") {
                  [num1, num2] = [randomNilaiBagi, randomPembagi];
                }
              
                //membuat variabel jawaban 
                let solution = eval(`${num1}${randomOperator}${num2}`);
              
                 if(randomOperator == "/") {
                    answerValue = solution;
                    question.innerHTML = `${num1} / ${num2} = <input type="number" id="inputValue" placeholder="?"\>`;
                    setTimeout(function() {
                        question.style.color = "#eeedf1";
                        document.getElementById('inputValue').placeholder = "";
                        return;
                      }, 3000);
                } else {
                    answerValue = solution;
                    question.innerHTML = `${num1} * ${num2} = <input type="number" id="inputValue" placeholder="?"\>`;
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
              
            
            const check7 = () => {
              // errorMessage.classList.add("hide");
              let userInput = document.getElementById("inputValue").value;
              //jika inuptan tidak kosong
              if (userInput) {
              if (userInput == answerValue) {
                  let username = document.getElementById('username').value;
                  lanjutL8.classList.remove('hide');
                  lanjutL6.classList.add("hide");
                  document.getElementById("kotakan").style.backgroundColor = "transparent";
                  document.getElementById("kotakan").style.display = "inline-flex";
                  document.getElementById("kotakan").style.width = "auto";
                  result.style.backgroundColor = "#79ff80";
                  score=score;
                  score += 10;
                  skor.innerHTML = score;
                  stopGame(`Yeayy !! Jawaban ${username} <span>Benar</span><br>Score +10`);
                  lanjutL7.classList.add('hide');

                  // lanjutL3.addEventListener('click', () => {
                  //   skor.innerHTML=score-20;
                  // })
              }
             
              else if(userInput !== answerValue) {
                  let username = document.getElementById('username').value;
                  document.getElementById("kotakan").style.backgroundColor = "transparent";
                  lanjutL8.classList.remove('hide');
                  result.style.backgroundColor = "#ff9a9a";
                  document.getElementById("kotakan").style.backgroundColor = "transparent";
                document.getElementById("kotakan").style.display = "inline-flex";
                document.getElementById("kotakan").style.width = "auto";
                score=score;
                  stopGame(`Ohh Tidak !! Jawaban ${username} <span> Salah</span>`);
                  
              }
              }
              //jika jawaban kosong
             
          }

            btnAns1.addEventListener("click", () => {
                let answere = parseInt(ans1);
                document.getElementById("inputValue").value = answere;
                check7()
            });
            btnAns2.addEventListener("click", () => {
                let answere = parseInt(ans2);
                document.getElementById("inputValue").value = answere;
                check7()
            });
            btnAns3.addEventListener("click", () => {
                let answere = parseInt(ans3);
                document.getElementById("inputValue").value = answere;
                check7()
            });
            btnAns4.addEventListener("click", () => {
                let answere = parseInt(ans4);
                document.getElementById("inputValue").value = answere;
                check7()
            });
            btnAns5.addEventListener("click", () => {
              let answere = parseInt(ans5);
              document.getElementById("inputValue").value = answere;
              check7()
            });
            btnAns6.addEventListener("click", () => {
              let answere = parseInt(ans6);
              document.getElementById("inputValue").value = answere;
              check7()
            });
            
           
          
          
            
          };
        questionGenerator7()
  

    const stopGame = (resultText) => {
      result.innerHTML = resultText;
      lanjutL7.innerText = "↩ Coba Lagi";
      result.classList.remove('hide')
      controls.classList.remove("hide");
      startBtn.classList.add("hide");
      lanjutL2.classList.add("hide");
      lanjutL3.classList.add("hide");
      lanjutL4.classList.add("hide");
      lanjutL5.classList.add("hide");
      lanjutL6.classList.add("hide");
      judul.classList.add("hide");
      deskripsi.classList.add("hide");
      username.classList.add('hide');
      labelUsername.classList.add('hide');
      };
      
    
});

        
