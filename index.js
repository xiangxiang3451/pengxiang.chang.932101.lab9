function appendValue(value) {
    var inputValue = document.getElementById('textInput');
    var displayDiv = document.getElementById('text2');
    // var currentValue = inputValue.textContent;
    var lastChar = inputValue.textContent[inputValue.textContent.length - 1];

    if (((lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/')) && (value === '+' || value === '-' || value === "*" || value === "/")) {
        inputValue.textContent = inputValue.textContent.slice(0, -1) + value;
    } else {
        inputValue.textContent += value;
    }

    var grayedOutValue = inputValue.textContent.replace(/(.*)([+\-*/])/g, '<span class="gray">$1</span>$2');

    displayDiv.innerHTML = grayedOutValue;

}

function clearNum() {
    document.getElementById('text2').textContent = "";
    document.getElementById('textInput').textContent = "";

}

function calculate() {
    var input = document.getElementById("textInput").textContent;

    var result = eval(input);

    var result2 = parseFloat(result.toFixed(10));

    var input = document.getElementById("text2").textContent = result2;
    document.getElementById('textInput').textContent = result2;
}

function back() {
    var inputValue = document.getElementById('textInput');
    var text2 = document.getElementById('text2');

    inputValue.textContent = inputValue.textContent.slice(0, -1);
    text2.textContent = inputValue.textContent;
}
function appendDot() {
    if (document.getElementById('text2').textContent[document.getElementById('text2').textContent.length - 1] != '.' && !isNaN(document.getElementById('text2').textContent[document.getElementById('text2').textContent.length - 1])) {
        document.getElementById('text2').textContent += '.';
        document.getElementById('textInput').textContent += '.';
    }
}