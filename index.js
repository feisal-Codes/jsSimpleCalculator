let total = 0;
let buffer = "0";
let initial_operation;
let display = document.querySelector(".sect");


function buttonClick(value) {
    if (isNaN((parseInt(value)))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    };
    refresh();
};





function handleNumber(value) {
    if (buffer === "0") {
      buffer = value;
    } else {
      buffer += value;
    }
  }

function handleSymbol(value) {
    switch (value) {
        case "C":
            buffer = "0";
            total = 0;
            break;
        case "Erase":
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substr(0, buffer.length - 1);
            }
            break;
        case "=":
            if(initial_operation===null){
                return;
            }
            doMath(parseInt(buffer));
            initial_operation=null;
            buffer=+total;
            total=0;
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(value);
            break;
    }
}

function handleMath(value) {
    if (buffer === "0") {
        return;
    }
   

    const intBuffer = parseInt(buffer);
    if (total === 0) {
        total = intBuffer;
    } else {
        doMath(intBuffer);
    }

    initial_operation = value;
    buffer = "0";

}


function doMath(value) {
    if (initial_operation === "+") {
        total += value;
    } else if (initial_operation === "-") {
        total -= value;
    } else if (initial_operation === "*") {
        total *= value;
    } else if (initial_operation === "/") {
        total /= value;
    }
}


function refresh() {
    display.innerText = buffer;
    


}

function main() {
    document.querySelector(".set2").addEventListener("click", function (event) {
        buttonClick(event.target.innerText);
        
    });
}

main();