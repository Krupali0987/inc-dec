console.log('hello');

var x = 0;

function increment(){
    x++
    document.getElementById("numbers").innerHTML = x;
}

function decrement(){
    x--
    document.getElementById("numbers").innerHTML = x;
    
}