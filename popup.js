document.getElementById("startBtn").addEventListener("click", () => {
    chrome.storage.local.set({ isRunning: true }, () => {
      //alert("Blink reminders started!");
      document.getElementById("statusBanner").style.display = "block";
      setTimeout(() => document.getElementById("statusBanner").style.display = "none", 3000);
    });
  });
  
  document.getElementById("stopBtn").addEventListener("click", () => {
    chrome.storage.local.set({ isRunning: false }, () => {
      //alert("Blink reminders stopped!");
      document.getElementById("statusBanner").style.display = "block";
      setTimeout(() => document.getElementById("statusBanner").style.display = "none", 3000);
    });
  });