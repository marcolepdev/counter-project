//VARIABLES

let incrementOne = document.querySelector('#increment-one');
let decrementOne = document.querySelector('#decrement-one');
let incrementTen = document.querySelector('#increment-ten');
let decrementTen = document.querySelector('#decrement-ten');
let resetCounter = document.querySelector('#reset');
let numValue = document.querySelector('#input-number');
let warnPar = document.createElement("p");
let warningContainer = document.querySelector('.warn-container');
warningContainer.style.visibility ="hidden";

let num = parseInt(numValue);

let add = document.querySelector('#add');
let remove = document.querySelector('#remove');

let int = document.querySelector('#counter-number');
let counter = 0;



// BUTTONS TO INCREASE THE COUNTER

incrementOne.addEventListener('click', function(){
    counter += 1;
    warningContainer.style.visibility ="hidden";
    document.querySelector('#input-number').style.borderColor= "#FFFFFF";
    int.innerHTML = counter;
})

incrementTen.addEventListener('click', function(){
        counter += 10;
        warningContainer.style.visibility ="hidden";
        document.querySelector('#input-number').style.borderColor= "#FFFFFF";
        int.innerHTML = counter;
    })

// resetting both counters and input field

resetCounter.addEventListener('click', function(){
    warningContainer.style.visibility ="hidden";
        counter = 0;
        document.querySelector('#input-number').value = "";
        document.querySelector('#input-number').style.borderColor= "#FFFFFF";        
        int.innerHTML = counter;
    })

    
// BUTTONS TO DECREASE THE COUNTER

decrementOne.addEventListener('click', function(){
    counter -= 1;
    warningContainer.style.visibility ="hidden";
    document.querySelector('#input-number').style.borderColor= "#FFFFFF";
    int.innerHTML = counter;
    })

decrementTen.addEventListener('click', function(){
    counter -= 10;
    warningContainer.style.visibility ="hidden";
    document.querySelector('#input-number').style.borderColor= "#FFFFFF";
    int.innerHTML = counter;
})


// add and remove buttons and prevent adding values when the input field is empty
add.addEventListener('click', function(){
    if(document.querySelector('#input-number').value === ""){
     document.querySelector('#input-number').style.borderColor = "red";   

     warningContainer.appendChild(warnPar);
     warningContainer.classList.add('.warn-container');
     warningContainer.style.visibility = "visible";
     warnPar.textContent ="Please type a valid number";
     warnPar.style.color ="#FFFFFF";    
    } else{
    document.querySelector('#input-number').style.borderColor= "#FFFFFF";
    numValue = document.querySelector('#input-number').value;
    warningContainer.style.visibility ="hidden";
    num = parseInt(numValue);   
    document.querySelector('#input-number').value = "";
    counter +=num;
    int.innerHTML = counter;
}}
)
// add and remove buttons and prevent removing values when the input field is empty
remove.addEventListener('click', function(){
    if(document.querySelector('#input-number').value === ""){
     document.querySelector('#input-number').style.borderColor = "red";
     warningContainer.appendChild(warnPar);
     warningContainer.classList.add('.warn-container');
     warningContainer.style.visibility = "visible";
     warnPar.textContent ="Please insert a valid number";
     warnPar.style.color ="#FFFFFF";
    } else{

    warningContainer.style.visibility = "hidden";
    document.querySelector('#input-number').style.borderColor= "#FFFFFF";
    numValue = document.querySelector('#input-number').value;
    
    
    num = parseInt(numValue);
    document.querySelector('#input-number').value = "";
    counter -=num;
    int.innerHTML = counter;
}
})

// don't add these characters into the input field

let invalidChars =[
    "-",
    "+",
    "e",
    ",",
    "."
];

numValue.addEventListener("input", function() {
    this.value = this.value.replace(/[e\+\-\,]/gi, "");
  });

numValue.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });
