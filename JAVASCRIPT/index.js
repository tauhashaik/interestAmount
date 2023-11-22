let AInput= document.getElementById('AInput');
let RInput = document.getElementById('RInput');
let YInput = document.getElementById('YInput');
let output1 = document.getElementById('output1');
let calcbtn = document.getElementById('calcbtn');

calcbtn.addEventListener('click', Interest)

// simple interest calculation.
function Interest(){

    // enabling values in input fields.
    let a = parseInt(AInput.value);
    let r = parseInt(RInput.value);
    let y = parseInt(YInput.value);

    let Interestrate = (a * r *y) / 100;

    // Validating if it is numbers being entered.
    if (isNaN(a) || isNaN(r) || isNaN(y)) {
        alert("Enter valid numbers");
        return;
    }
    // displaying result in designated input tag.
    output1.value = Interestrate
}