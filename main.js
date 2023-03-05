
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.querySelector('.hours').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;
}

const btn_sleep = document.querySelector('.btn-sleep');
const time_sleep = document.querySelectorAll('.time_sleep-item');
const now = new Date();
btn_sleep.onclick = function () {
    
    var count = 1;
    var firstFuture = new Date();
    firstFuture.setMinutes(firstFuture.getMinutes() + 15); // thêm 15 phút cho lần đầu tiên
    for (var i = 0; i < time_sleep.length; i++) {
        var future = new Date();

        future.setTime(firstFuture.getTime() + (90 * count) * 60 * 1000); // tính toán thời gian cho các lần sau
        ++count;

        const hours = future.getHours();
        const minutes = future.getMinutes();
        const seconds = future.getSeconds();
        time_sleep[i].innerText = `${hours}:${minutes}:${seconds}`;
    }
}
setInterval(updateTime);