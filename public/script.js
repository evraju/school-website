function checkAnswer() {
    const userAnswer = document.getElementById("answer").value;
    const result = document.getElementById("result");
  
    if (userAnswer === "4") {
      result.textContent = "🎉 Correct! Well done!";
      result.style.color = "green";
    } else {
      result.textContent = "❌ Oops! Try again.";
      result.style.color = "red";
    }
  }
  