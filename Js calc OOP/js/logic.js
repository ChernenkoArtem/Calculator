function summ(a, b) {
    if(a == null || b == null){
        return false;
    }
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'не число';
    }
    else{
        a += b;
        let d = String(a);
        if (d.length>9){
            return 'error'
        }else{
            a = cutDisplay(d);
            a = parseFloat(a);
            return a;
        }
    }
}

function minus(a, b) {
    if(a == null || b == null){
        return false;
    }
    if(typeof a !== 'number' || typeof b !== 'number' ){
        return 'не число';
    }
    else{
        a -= b;
        let d = String(a);
        a = cutDisplay(d);
        a = parseFloat(a);
        return a;
    }
}

function divide(a, b) {
    if(a == null || b == null){
        return false;
    }
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'не число';
    }
    else if (b === 0){
        return 0;
    }
    else{
        a /= b;
        let d = String(a);
        a = cutDisplay(d);
        a = parseFloat(a);
        return a;
    }

}

function multiply(a, b) {
    if(a == null || b == null){
        return false;
    }
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'не число';
    }
    else if (b === 0){
        return 0;
    }
    else{
        a *= b;
        let d = String(a);
        if (d.length>9){
            return 'error'
        }else{
            a = cutDisplay(d);
            a = parseFloat(a);
            return a;
        }
    }
}

function cutDisplay(a) {
    if (a.length > 9) {
        a = a.slice(0, 9);
    }
    display.value = a;
    return a;
}