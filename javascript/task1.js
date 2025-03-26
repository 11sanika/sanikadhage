function reverseNumber() {
    let num = document.getElementById("numberInput").value;
    let reversedNum = parseInt(num.toString().split('').reverse().join(''));
    document.getElementById("result").innerText = "Reversed Number: " + reversedNum;
}
