const button = document.getElementById('result').value;
button.addEventListener('click', function diplay(num){

    let a = button.value += num

    return num;
});

button.addEventListener('click',function solve() {
    let x = button.value ;
    let y = eval(x);

    button.value = y;
    return y;
});

button.addEventListener('click',function clearScreen(){
    button.value = '';
});

