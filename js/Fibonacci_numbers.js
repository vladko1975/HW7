var i = Number(prompt('Please enter index [2-..] for Fibonacci numbers', 10));
var d = String(prompt('Please enter direction for Fibonacci numbers (- or +)', '+'));
top:
if (d === '+') {
 fibo_pos(i);
} else if (d === '-') {
 fibo_neg(i);
} else {
    d = String(prompt('Not CORRECT atribut'));
    break top;
}
function fibo_pos(k) {
 var x = 2, f0 = 0, f1 = 1, fn;
    while (x <= k) {
        fn = f1 + f0;
        console.log('F' + x + '=' + fn)
        x = x + 1;
        f0 = f1;
        f1 = fn;
    }
    x = x - 1;
 alert('Element ' + x + ' in the Fibonacci sequence is ' + fn);
}
function fibo_neg(k) {
 var x = -2, f0 = 0, f1 = 1, fn;
    while (x >= -k) {
        fn = f0 - f1;
        console.log('F' + x + '=' + fn)
        x = x - 1;
        f0 = f1;
        f1 = fn;
    }
    x = x + 1;
 alert('Element ' + x + ' in the Fibonacci sequence is ' + fn);
}