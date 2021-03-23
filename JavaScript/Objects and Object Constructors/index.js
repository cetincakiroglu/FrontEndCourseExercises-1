function Account (name){
    let currentAmount = 0;
    this.name = name
    this.IBAN = 'GR00010003';

    this.deposit = function(num){
        if(typeof num === 'number'){
            currentAmount = currentAmount + num;
            console.log(currentAmount);
            return currentAmount;
        } else{
            console.log("Error 'Invalid amount'")
        }
    };
    this.withdraw = function(num){
        if(currentAmount > num && num > 0 && typeof num === 'number'){
            currentAmount = currentAmount-num;
            console.log(currentAmount);
            return currentAmount;
        }
         else{
            console.log("Error, 'Invalid amount'")
        }
     
    };

    this.getBalance = function(){
        console.log(currentAmount);
        return currentAmount;
    }
}

const newAccount = new Account('Çetin Çakıroğlu');
newAccount.getBalance();
newAccount.deposit(100);
newAccount.getBalance();
newAccount.withdraw(50);
newAccount.getBalance();
newAccount.withdraw(-150);
newAccount.getBalance();