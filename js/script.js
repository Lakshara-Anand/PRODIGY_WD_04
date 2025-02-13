function updateDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateString;
}

window.onload = function() {
    updateDate();
};
