function quadratic_equation() {
    var a = Number(prompt('Please enter argument a [ not "0" ] :', 2));
    var b = Number(prompt('Please enter argument b :', 4));
    var c = Number(prompt('Please enter argument c :', 1));
    document.getElementById('text_output').innerHTML = 'You entered a quadratic equation ' + a + 'x²+' + b + 'x+' + c + '=0; ';
    if (a !== 0) {
        var d = dsc_f(a, b, c);
        if (d > 0) {
            q_s(a, b, d);
        }
        else if (d == 0) {
            q_s0(b, a);
        }
        else if (d < 0) {
            document.getElementById('text_output').innerHTML += 'Dyskruminant: D<0 - No Answer, goodbye. ';
        }
    }
    else {
        document.getElementById('text_output').innerHTML += '"a" not equal "0", goodbye. ';
    }

    function q_s(a, b, d) {
        var x1 = (-b + Math.sqrt(d)) / (2 * a);
        var x2 = (-b - Math.sqrt(d)) / (2 * a);
        document.getElementById('text_output').innerHTML += 'Answer: X1= ' + x1 + ', X2= ' + x2 +'; ';
    }

    function q_s0(b, a) {
        var x = (-b) / (2 * a);
        document.getElementById('text_output').innerHTML += 'Answer: X= ' + x +'; ';
    }

    function dsc_f(a, b, c) {
        var d = (b * b) - (4 * a * c);
        document.getElementById('text_output').innerHTML += 'Dyskruminant: D= ' + d +'; ';
        return d;
    }
}