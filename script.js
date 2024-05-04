const confeti = '❤️'; //Sustituir por el emoticono que quieras que llueva (yo uso esta pagina https://emojipedia.org/es)

    let acepta = false;
    document.getElementById("yesButtonNo").addEventListener("click", function () {
      startHearts();
    });
    document.getElementById("yesButton").addEventListener("click", function () {
      startHearts();
    });

    function startHearts() {
      for (let i = 0; i < 150; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animation = 'floating ' + (2 + Math.random() * 3) + 's ease-in infinite';
        heart.innerText = confeti;
        heart.style.transform = 'rotate(' + 360 * Math.random() + 'deg)';
        document.body.appendChild(heart);
      }
    }
    function yesAnswer() {
      acepta = true;
      document.getElementById("questionSection").style.display = "none";
      document.getElementById("thinkAgainSection").style.display = "none";
      document.getElementById("happyAnimal").style.display = "block";
    }

    function noAnswer() {
      document.getElementById("questionSection").style.display = "none";
      document.getElementById("thinkAgainSection").style.display = "block";
      startTimer();
    }

    function timerAnswer() {
      acepta = true;
      document.getElementById("questionSection").style.display = "none";
      document.getElementById("thinkAgainSection").style.display = "none";
      document.getElementById("finishedTimerSection").style.display = "block";
      startHearts();
    }

    function startTimer() {
      var timeLeft = 10;
      var timerId = setInterval(countdown, 1000);

      function countdown() {
        if (timeLeft == -1) {
          clearTimeout(timerId);
          doSomething();
        } else {
          document.getElementById("thinkAgainSectionText").innerHTML = '<p>Tienes </p><h1> ' + timeLeft + ' segundos</h1><p> mejor si quiereme amorcito de mi vida JAJAJA</p>';
          timeLeft--;
        }
      }
    }

    function doSomething() {
      if (acepta == false) {

        timerAnswer()
      }
    }