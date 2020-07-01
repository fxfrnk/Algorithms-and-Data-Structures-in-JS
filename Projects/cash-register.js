function checkCashRegister(price, cash, cid) {
  let myRegister = new CashRegister(cid)
  return myRegister.tenderChange(price, cash);
}

function CashRegister (money){
  this.money = money
  this.fiat = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.10, "QUARTER": 0.25, "ONE": 1.00, "FIVE": 5.00, "TEN": 10.00, "TWENTY": 20.00, "ONE HUNDRED": 100.00}

  this.countTotal = function() {
    let total = this.money.reduce((acc, denomination) => {
      return acc + denomination[1]
    }, 0)

    return parseFloat(total.toFixed(2))
  }

  this.tenderChange = function(amount, moneyGiven){
    var changeRequired = moneyGiven - amount
    let change = [];
    if(changeRequired > this.countTotal()){
      return {"status": "INSUFFICIENT_FUNDS", "change": change}
    }

    else if(changeRequired == this.countTotal()){
      return {"status": "CLOSED", "change": this.money}
    }

    for(let index = this.money.length-1; index>=0; index--){
        let denomination = this.money[index][0]
				let amountAvailable = this.money[index][1]
        let amountTendered = 0;

        while((amountAvailable > 0)&&(changeRequired >= this.fiat[denomination])){
          amountTendered += this.fiat[denomination]
          amountAvailable -= this.fiat[denomination]
          changeRequired -= this.fiat[denomination]
          changeRequired = parseFloat(changeRequired.toFixed(2))
        }

        if(amountTendered > 0){
          change.push([denomination, amountTendered])
        }

      }

      if(changeRequired > 0){
        return {"status": "INSUFFICIENT_FUNDS", "change": []}
      }

      return {"status": "OPEN", "change": change}
    }
  
}

let result = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

console.log(result)
