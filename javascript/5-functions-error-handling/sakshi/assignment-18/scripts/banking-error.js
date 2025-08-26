function withdrawAmount(balance, withdraw) {
  if (withdraw > balance) {
    // Throw custom error object
    throw {
      errorCode: "INSUFFICIENT_FUNDS",
      errorMessage: `Withdrawal of ₹${withdraw} exceeds balance ₹${balance}.`
    };
  }
  return balance - withdraw;
}

const balanceInput = document.getElementById("balance");
const withdrawInput = document.getElementById("withdraw");
const result = document.getElementById("result");
const error = document.getElementById("error");

document.getElementById("withdrawBtn").addEventListener("click", () => {
  result.textContent = "";
  error.textContent = "";

  try {
    const balance = parseFloat(balanceInput.value);
    const withdraw = parseFloat(withdrawInput.value);

    if (isNaN(balance) || isNaN(withdraw)) {
      throw {
        errorCode: "INVALID_INPUT",
        errorMessage: "Please enter valid numbers for balance and withdrawal."
      };
    }

    const newBalance = withdrawAmount(balance, withdraw);
    result.textContent = `✅ Withdrawal successful. Remaining Balance: ₹${newBalance}`;

  } catch (err) {
    // Handle custom error object
    if (err.errorCode && err.errorMessage) {
      error.textContent = `❌ Error [${err.errorCode}]: ${err.errorMessage}`;
    } else {
      error.textContent = "❌ Unexpected error occurred.";
      console.error(err);
    }
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  balanceInput.value = "";
  withdrawInput.value = "";
  result.textContent = "";
  error.textContent = "";
});
