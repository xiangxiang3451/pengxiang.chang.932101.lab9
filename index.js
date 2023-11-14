function appendValue(value) {
    var inputValue = document.getElementById('textInput');

    inputValue.textContent+=value;

    var currentValue = inputValue.textContent;
    var grayedOutValue = currentValue.replace(/(.*)([+\-*/])/g, '<span class="gray">$1</span>$2');
    
    var displayDiv=document.getElementById('text2');

    displayDiv.innerHTML=grayedOutValue;
    
}

function clearNum() {
    document.getElementById('text2').textContent = "";
    document.getElementById('textInput').textContent = "";
    
}

function calculate() {
    var input = document.getElementById("textInput").textContent;

    var result = eval(input);

    var result2 = parseFloat(result.toFixed(10));

    var input = document.getElementById("text2").textContent=result2;
    document.getElementById('textInput').textContent=result2;

}

function back() {
    var inputValue = document.getElementById('text2');
    var text2 = document.getElementById('text2');

    inputValue.textContent = inputValue.textContent.slice(0, -1);
    text2.textContent = inputValue.textContent.slice(0, -1);
}