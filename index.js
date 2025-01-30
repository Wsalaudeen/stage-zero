function updateTime() {
  document.getElementById(
    "utc-time"
  ).textContent = `UTC Time: ${new Date().toUTCString()}`;
}
updateTime();
