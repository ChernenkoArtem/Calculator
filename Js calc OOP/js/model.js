let isCheck = true;
let isResult = true;

let countNumber = 0;
let memoryNumber = 0;

let operationType = '';

let dubBtn;
let display;
let btnList;
let plusBtn;
let clearBtn;
let minusBtn;
let divideBtn;
let ressultBtn;
let multiplyBtn;


const model = {

    setIsCheck(value) {
        isCheck = value;
    },
    getIsCheck() {
        return isCheck;
    },
    setIsResult(value) {
        isResult = value;
    },
    getIsResult() {
        return isResult;
    },
    setCountNumber(value) {
        countNumber = value;
    },
    getCountNumber() {
        return countNumber;
    },
    setMemoryNumber(value) {
        memoryNumber = value;
    },
    getMemoryNumberr() {
        return memoryNumber;
    },
    setOperationType(value) {
        operationType = value;
    },
    getOperationType() {
        return operationType;
    },
    setBtnList(value) {
        btnList = value;
    },
    getBtnList() {
        return btnList;
    },
    setPlusBtn(value) {
        plusBtn = value;
    },
    getPlusBtn() {
        return plusBtn;
    },
    setMinusBtn(value) {
        minusBtn = value;
    },
    getMinusBtn() {
        return minusBtn;
    },
    setMultiplyBtn(value) {
        multiplyBtn = value;
    },
    getMultiplyBtn() {
        return multiplyBtn;
    },
    setDivideBtn(value) {
        divideBtn = value;
    },
    getDivideBtn() {
        return divideBtn;
    },
    setClearBtn(value) {
        clearBtn = value;
    },
    getClearBtn() {
        return clearBtn;
    },
};