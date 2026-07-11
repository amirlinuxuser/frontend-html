
const realtimeInput = document.getElementById('realtimeInput');
const realtimeDisplay = document.getElementById('realtimeDisplay');

// گوش دادن به هر تغییر در مقدار اینپوت
realtimeInput.addEventListener('input', (event) => {
    // در رویداد input، مقدار در event.target.value موجود است
    realtimeDisplay.textContent = event.target.value;
});