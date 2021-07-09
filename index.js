// Submit Button Event Handler.......................
const submit = document.getElementById('submit').addEventListener('click', function () {
    const loginArea = document.getElementById('loginArea');
    loginArea.style.display='none';

    const transactionArea = document.getElementById('transactionArea');
    transactionArea.style.display='block';
})
// Deposit Button Event Handler..........................
const deposit = document.getElementById('depositBtn').addEventListener('click', function () {
    const depositNumber = getInput('depositAmount');

    spanTag('currentDeposit', depositNumber);
    document.getElementById('depositAmount').value = "";
    spanTag('currentBalance', depositNumber);    
})
// Withdraw Button Event Handler..........................
const withdraw = document.getElementById('withdrawBtn').addEventListener('click', function () {
    const withdrawNumber = getInput('withdrawAmount');

    spanTag('currentWithdraw', withdrawNumber);
    document.getElementById('withdrawAmount').value = "";
    spanTag('currentBalance', -1 * withdrawNumber); 
})
// Deposit and Withdraw amount input..................
function getInput(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
// Deposit amount and Total Balance........................
function spanTag(id, depositNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;

    if(totalBalance <=0){
        document.getElementById(id).innerText = "0.00";
    }
    else{
        document.getElementById(id).innerText = totalBalance;
    }
}
