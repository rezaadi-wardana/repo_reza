lanjutL9.addEventListener("click", () => {
    answerValue = "";
    controls.classList.add("hide");
    startBtn.classList.add("hide");
    ucapan.classList.remove('hide');
    lanjutL3.classList.remove('hide');
    lanjutL4.classList.add('hide');
    lanjutL5.classList.add('hide');
    lanjutL6.classList.add('hide');
    lanjutL7.classList.add('hide');
    lanjutL8.classList.add('hide');
   
    level = 9;
    tampil();
    question.style.color = "#131313";

    document.getElementById("ans1").innerHTML = "";
    document.getElementById("ans2").innerHTML = "";
    document.getElementById("ans3").innerHTML = "";
    document.getElementById("ans4").innerHTML = "";
    document.getElementById("ans5").innerHTML = "";
    document.getElementById("ans6").innerHTML = "";

    waktu.innerHTML = "Pertanyaan akan hilang dalam 5 detik.";

    [num1, num2] = [0, 0];
        const questionGenerator9= () => {
           


            let operators = ["*","/"];
            let pembagi = ["2","3"];
            let nilaiBagi = ["24","30","42","48","66","54","60","72"];

           
            let randomOperator = operators[Math.floor(Math.random() * operators.length)];
            let randomPembagi = pembagi[Math.floor(Math.random() * pembagi.length)]
            let randomNilaiBagi = nilaiBagi[Math.floor(Math.random() * nilaiBagi.length)]
            if (randomOperator == "/") {
              [num1, num2] = [randomNilaiBagi, randomPembagi];

              let solution = eval(`${num1} / ${num2} + ${num1*2}`);
              answerValue = solution;
              question.innerHTML = `${num1} / ${num2} + ${num1*2}  = <input type="number" id="inputValue" placeholder="?"\>`;
              setTimeout(function() {
                question.style.color = "#eeedf1";
                document.getElementById('inputValue').placeholder = "";
                return;
              }, 5000);
            } else
            if (randomOperator == "*") {
                [num1, num2] = [ randomNilaiBagi, randomPembagi];

              let solution = eval(`${num1} * ${num2} - ${num1*2}`);
              answerValue = solution;
              question.innerHTML = `${num1} * ${num2} - ${num1*2}  = <input type="number" id="inputValue" placeholder="?"\>`;
              setTimeout(function() {
                question.style.color = "#eeedf1";
                document.getElementById('inputValue').placeholder = "";
                return;
              }, 5000);
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
            ans2 = randomValue(1,200);
            ans3 = randomValue(1,200);
            ans4 = randomValue(1,200);
            ans5 = randomValue(1,200);
            ans6 = randomValue(1,200);

            setTimeout(function() {
                document.getElementById("ans1").innerHTML = ans1;
                document.getElementById("ans2").innerHTML = ans2;
                document.getElementById("ans3").innerHTML = ans3;
                document.getElementById("ans4").innerHTML = ans4;
                document.getElementById("ans5").innerHTML = ans5;
                document.getElementById("ans6").innerHTML = ans6;
                  },5000)
            const check9 = () => {
              // errorMessage.classList.add("hide");
              let userInput = document.getElementById("inputValue").value;
              //jika inuptan tidak kosong
              if (userInput) {
              if (userInput == answerValue) {
                  let username = document.getElementById('username').value;
                  lanjutL10.classList.remove('hide');
                  lanjutL9.classList.add("hide");
                  document.getElementById("kotakan").style.backgroundColor = "transparent";
                  document.getElementById("kotakan").style.display = "inline-flex";
                  document.getElementById("kotakan").style.width = "auto";
                  result.style.backgroundColor = "#79ff80";
                  score=score;
                  score += 10;
                  skor.innerHTML = score;
                  stopGame(`Yeayy !! Jawaban ${username} <span>Benar</span><br>Score +10`);
                //   lanjutL7.classList.add('hide');

                  // lanjutL3.addEventListener('click', () => {
                  //   skor.innerHTML=score-20;
                  // })
              }
             
              else if(userInput !== answerValue) {
                  let username = document.getElementById('username').value;
                  document.getElementById("kotakan").style.backgroundColor = "transparent";
                  lanjutL10.classList.remove('hide');
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
                check9()
            });
            btnAns2.addEventListener("click", () => {
                let answere = parseInt(ans2);
                document.getElementById("inputValue").value = answere;
                check9()
            });
            btnAns3.addEventListener("click", () => {
                let answere = parseInt(ans3);
                document.getElementById("inputValue").value = answere;
                check9()
            });
            btnAns4.addEventListener("click", () => {
                let answere = parseInt(ans4);
                document.getElementById("inputValue").value = answere;
                check9()
            });
            btnAns5.addEventListener("click", () => {
              let answere = parseInt(ans5);
              document.getElementById("inputValue").value = answere;
              check9()
            });
            btnAns6.addEventListener("click", () => {
              let answere = parseInt(ans6);
              document.getElementById("inputValue").value = answere;
              check9()
            });
            
           
          
          
            
          };
        questionGenerator9()
  

    const stopGame = (resultText) => {
      result.innerHTML = resultText;
      lanjutL9.innerText = "↩ Coba Lagi";
      result.classList.remove('hide')
      controls.classList.remove("hide");
      startBtn.classList.add("hide");
      lanjutL2.classList.add("hide");
      lanjutL3.classList.add("hide");
      lanjutL4.classList.add("hide");
      lanjutL5.classList.add("hide");
      lanjutL6.classList.add("hide");
      lanjutL7.classList.add("hide");
      lanjutL8.classList.add("hide");
      judul.classList.add("hide");
      deskripsi.classList.add("hide");
      username.classList.add('hide');
      labelUsername.classList.add('hide');
      };
      
    
});

        
