function initElements() {
    dubBtn = document.getElementById('dub');
    display = document.getElementById('talo');
    clearBtn = document.getElementById('del');
    plusBtn = document.getElementById('plusBtn');
    minusBtn = document.getElementById('minusBtn');
    ressultBtn = document.getElementById('equally');
    divideBtn = document.getElementById('divideBtn');
    multiplyBtn = document.getElementById('multiplyBtn');
    btnList = document.querySelectorAll('.btn,.bigbuttonend_n');
}

function addListeners() {
    for (let i = 0; i < model.getBtnList().length; i++) {
        let btn = model.getBtnList()[i];
        btn.addEventListener('click', function (e) {
            clickNumber(e.target.textContent);
            console.log(e.target.textContent);
        });
    }


    let clickNumber = num => {
        if (model.getIsCheck()) {
            display.value = num;
            model.setIsCheck(false);
        } else {
            display.value += num;
            displayCut(display.value);
        }
    }

    dubBtn.addEventListener('click', function (e) {
        for (let i = 0; i < display.value.length; i++) {
            if (display.value[i] === '.') {
                return;
            }
        }

        display.value += '.';
        model.setIsCheck(false);
    });

    model.getPlusBtn().addEventListener('click', function () {
        onOperationsClickBtn('+');
    });

    model.getMinusBtn().addEventListener('click', function () {
        onOperationsClickBtn('-');
    });
    model.getDivideBtn().addEventListener('click', function () {
        onOperationsClickBtn('/');
    });
    model.getMultiplyBtn().addEventListener('click', function () {
        onOperationsClickBtn('*');
    });
    model.getClearBtn().addEventListener('click', function () {
        clear()
        onOperationsClickBtn('');
    });


    ressultBtn.addEventListener('click', function () {
        if (model.getIsResult()) {
            model.setCountNumber(+display.value);
        }

        if (model.getCountNumber() == 0) {
            model.setMemoryNumber(0);
            clear();

            return;
        }
        lastOperation();
        model.getIsCheck();
        model.setIsResult(false);
    });
}

function onOperationsClickBtn(operType) {
    lastOperation();
    model.setMemoryNumber(+display.value);
    model.setOperationType(operType);
    model.setIsCheck(true);
    model.setIsCheck(true);
}

function clear() {
    display.value = '0';
}

function displayCut(a){
    display.value = cutDisplay(a)
}

function lastOperation() {
    switch (operationType) {
        case '+' :
            if (model.getIsCheck()) {
                model.setMemoryNumber(display.value);
            } else {
                model.setMemoryNumber(summ(memoryNumber, parseFloat(display.value)));
            }
            model.setMemoryNumber(display.value);
            break;
        case '-' :
            if (model.getIsCheck()) {
                model.setMemoryNumber(display.value);
            } else {
                model.setMemoryNumber(minus(memoryNumber, parseFloat(display.value)));
            }
            model.setMemoryNumber(display.value);
            break;
        case '/' :
            if (model.getIsCheck()) {
                model.setMemoryNumber(display.value);
            } else {
                model.setMemoryNumber(divide(memoryNumber, parseFloat(display.value)));
            }
            model.setMemoryNumber(display.value);
            break;
        case '*' :
            if (model.getIsCheck()) {
                model.setMemoryNumber(display.value);

            } else {
                model.setMemoryNumber(multiply(memoryNumber, parseFloat(display.value)));
            }
            model.setMemoryNumber(display.value);
            break;
    }
    cutDisplay(display.value);
}
