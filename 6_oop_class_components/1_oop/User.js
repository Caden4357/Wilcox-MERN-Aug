class User {
    constructor(username, emailAddress, accountBalance = 0){
        this.username = username;
        this.emailAddress = emailAddress;
        this.accountBalance = accountBalance;
    }
    makeDeposit(amount){
        this.accountBalance += amount;
        return this;
    }
    makeWithdrawal(amount){
        if(this.accountBalance - amount < 0){
            console.log("Not Enough Funds charging $5.00")
            this.accountBalance -= amount + 5;
        }else{
            this.accountBalance -= amount;
        }
        return this;
    }
    displayBalance(){
        console.log(this.username +"'s account balance is " + "$" + this.accountBalance)
    }
    transferMoney(user1, amount){
        if(this.accountBalance - amount < 0){
            console.log("Not Enough Funds charging $5.00")
            this.accountBalance -= amount + 5;
        }else{
            this.accountBalance -= amount;
        }
        user1.accountBalance += amount;
        return this;
    }
}

//creating 3 users 
const person1 = new User("Caden43", "wilcox4357@gmail.com");
const person2 = new User("Brittnay", "itsBritBit@gmail.com", 1000);
const person3 = new User("Jo Jo", "itsJoJo@gmail.com", 50);


//transfer money between two users working! 
person2.transferMoney(person1, 100)
//person1 making 3 deposits and 1 withdrawal then displaying their balance 
person1.makeDeposit(200).makeDeposit(100).makeDeposit(20).makeWithdrawal(300).displayBalance();


//person2 
person2.makeDeposit(1000).makeDeposit(1000).makeWithdrawal(600).makeWithdrawal(200).displayBalance();

person3.transferMoney(person1, 55)
person3.makeDeposit(100).makeWithdrawal(20).makeWithdrawal(50).makeWithdrawal(100).displayBalance();


