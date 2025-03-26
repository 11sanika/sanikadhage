function showDate() {
    let today = new Date();
    let formattedDate = today.getDate() + "/" + 
                        today.toLocaleString('default', { month: 'long' }) + "/" + 
                        today.getFullYear();
    document.getElementById("dateDisplay").innerText = formattedDate;
}

function showTime() {
    let now = new Date();
    document.getElementById("timeDisplay").innerText = now.toString();
}
