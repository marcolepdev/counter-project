//VARIABLES

let incrementOne = document.querySelector('#increment-one');
let decrementOne = document.querySelector('#decrement-one');
let incrementTen = document.querySelector('#increment-ten');
let decrementTen = document.querySelector('#decrement-ten');
let resetCounter = document.querySelector('#reset');
let numValue = document.querySelector('#input-number').value;
let num = parseInt(numValue);

let add = document.querySelector('#add');
let remove = document.querySelector('#remove');

let int = document.querySelector('#counter-number');
let counter = 0;



// BUTTONS TO INCREASE THE COUNTER

incrementOne.addEventListener('click', function(){
    counter += 1;
    int.innerHTML = counter;
})

incrementTen.addEventListener('click', function(){
        counter += 10;
        int.innerHTML = counter;
    })

// BUTTONS TO RESET THE COUNTER

resetCounter.addEventListener('click', function(){
        counter = 0;
        numValue.value = 0;
        int.innerHTML = counter;
    })

    
// BUTTONS TO DECREASE THE COUNTER

decrementOne.addEventListener('click', function(){
    counter -= 1;
    int.innerHTML = counter;
    })

decrementTen.addEventListener('click', function(){
    counter -= 10;
    int.innerHTML = counter;
})


// ADD AND REMOVE BUTTONS
add.addEventListener('click', function(){
    if (numValue === "" ){
        alert('Please insert a valid umber!');
    } else {
    numValue = document.querySelector('#input-number').value;
    num = parseInt(numValue);
    counter +=num;
    int.innerHTML = counter;
}
})

remove.addEventListener('click', function(){
    if (numValue === ""){
        alert('Please insert a valid number!');
    } else{
    numValue = document.querySelector('#input-number').value;
    num = parseInt(numValue);
    counter -=num;
    int.innerHTML = counter;
}
})
