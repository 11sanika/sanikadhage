function reverseNumber() {
    let num = document.getElementById("numberInput").value;
    let reversedNum = parseInt(num.toString().split('').reverse().join(''));
    document.getElementById("result").innerText = "Reversed Number: " + reversedNum;
}

function sortString() {
    let str = document.getElementById("stringInput").value;
    let sortedStr = str.split('').sort().join('');
    document.getElementById("sortedResult").innerText = "Sorted String: " + sortedStr;
}
