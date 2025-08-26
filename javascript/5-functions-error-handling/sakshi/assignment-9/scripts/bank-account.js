// Bank account using closure
function createBankAccount(initialBalance = 0) {
    let balance = initialBalance;
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                return `Deposited: ${amount}. New Balance: ${balance}`;
            }
            return "Enter a valid amount to deposit.";
        },
        withdraw: function(amount) {
            if (amount <= 0) return "Enter a valid amount to withdraw.";
            if (amount > balance) return "Insufficient balance!";
            balance -= amount;
            return `Withdrawn: ${amount}. Remaining Balance: ${balance}`;
        },
        checkBalance: function() {
            return `Current Balance: ${balance}`;
        }
    };
}
const myAccount = createBankAccount(100); 
document.getElementById("depositBtn").addEventListener("click", () => {
    const amount = Number(document.getElementById("depositAmount").value.trim());
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("output").textContent = "Please enter a valid positive number.";
        return;
    }
    document.getElementById("output").textContent = myAccount.deposit(amount);
    document.getElementById("depositAmount").value = "";
});

document.getElementById("withdrawBtn").addEventListener("click", () => {
    const amount = Number(document.getElementById("withdrawAmount").value.trim());
    if (isNaN(amount)) {
        document.getElementById("output").textContent = "Please enter a valid number.";
        return;
    }
    document.getElementById("output").textContent = myAccount.withdraw(amount);
    document.getElementById("withdrawAmount").value = "";
});

document.getElementById("checkBtn").addEventListener("click", () => {
    document.getElementById("output").textContent = myAccount.checkBalance();
});

document.getElementById("clearBtn").addEventListener("click", () => {
    document.getElementById("output").textContent = "";
    document.getElementById("depositAmount").value = "";
    document.getElementById("withdrawAmount").value = "";
});
