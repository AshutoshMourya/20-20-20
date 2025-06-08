chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("blinkReminder", {
    periodInMinutes: 20 / 60 // 10 seconds
  });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "blinkReminder") {
    chrome.storage.local.get("isRunning", (data) => {
      if (data.isRunning !== false) { // Run by default unless explicitly stopped
        chrome.notifications.create({
          type: "basic",
          iconUrl: "icon48.png",
          title: "Blink Reminder",
          message: "20=20=20 : Time to blink your eyes!",
          priority: 2
        });
      }
    });
  }
});