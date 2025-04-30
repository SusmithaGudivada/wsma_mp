// count.js
let count = localStorage.getItem("visit-count") || 0;
count++;
localStorage.setItem("visit-count", count);
document.getElementById("visitorCount").innerText = count;
