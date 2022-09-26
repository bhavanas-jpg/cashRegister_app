const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")
const availableNotes = [2000, 500, 100,  20, 10,5, 1];


checkButton.addEventListener("click", function validateBillAndCashAmount(){
    message.style.display = "none";
    if(billAmount.value > 0 && cashGiven.value ){
        if( cashGiven.value >= billAmount.value)
        {
            console.log("here");
          const amountToBeReturned = cashGiven.value - billAmount.value;
           calculateChange(amountToBeReturned );
        }else{
        showMessage("Do you wanna wash plates?")
        }
    }else{
       showMessage("Invalid bill amount")
    }
})
 
const calculateChange = (amountToBeReturned ) =>{
for(let i=0; i < availableNotes.length; i++){
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]) 
        amountToBeReturned =  amountToBeReturned  % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes; 
}
}

const showMessage  = (msg) =>{
    message.style.display = "block";
    message.innerText = msg ;
}


