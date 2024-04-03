const button = document.getElementById('result').value;
button.addEventListener('click', function diplay(num){

    let a = document.getElementById('result').value += num

    return num;
    console.log(num)
});

button.addEventListener('click',function solve() {
    let x = document.getElementById('result').value ;
    let y = eval(x);

    document.getElementById('result').value = y;
    return y;
});

button.addEventListener('click',function clearScreen(){
    document.getElementById('result').value = '';
});
