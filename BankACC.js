let balance = 1000;
function updateBalance() {
    document.getElementById('Balance').value = balance.toFixed(2);
}
function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    balance += amount;
    updateBalance();
}
function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    if (amount > balance) {
        alert('Insufficient funds.');
        return;
    }
    balance -= amount;
    updateBalance();
}
updateBalance();
