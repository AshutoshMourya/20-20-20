# Blink Reminder Chrome Extension

## Overview
The Blink Reminder Chrome Extension is a simple tool designed to promote eye health by reminding users to blink every 20 minutes. Regular blinking helps prevent eye strain and dryness, especially during prolonged screen time. This extension sends a notification every 20 minutes to encourage users to take a brief moment to blink and rest their eyes. 

## Features
- **Periodic Notifications**: Displays a reminder notification every 20 minutes to prompt users to blink.
- **Lightweight and Non-Intrusive**: Runs in the background with minimal resource usage.
- **User-Friendly Interface**: Includes a simple popup to start or stop the reminder.
- **Customizable**: Easily modify the notification interval by updating the code (default set to 20 minutes).

## Installation
1. **Download the Extension**:
   - Clone or download this repository to your local machine:
     ```bash
     git clone https://github.com/AshutoshMourya/20-20-20.git
     ```
2. **Load in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** (toggle in the top-right corner).
   - Click **Load unpacked** and select the folder containing the extension files.
3. **Use the Extension**:
   - The extension will automatically start sending notifications every 20 minutes.
   - Once notified please look 20 feet away for 20 seconds while blinking frequently. A hot towel will be more relaxing.
   - Click the extension icon to interact with it.

## Usage
- Once loaded, the extension runs in the background and sends a notification every 20 minutes.
- Follow the reminder to blink a few times to keep your eyes moisturized.
- Use the popup interface to toggle the reminders on or off.

## Files
- `manifest.json`: Defines the extension's metadata, permissions, and scripts.
- `background.js`: Handles the notification logic and scheduling.
- `popup.html` : Provides a user interface for controlling the extension.
- `popup.js` : Manages popup interactions.

## Example Notification
**Title**: Blink Reminder  
**Message**: Take a moment to blink and rest your eyes!

## Development
### Prerequisites
- Basic knowledge of JavaScript, HTML, and Chrome Extension APIs.
- A text editor (e.g., VS Code) and Git for version control.

### Modifying the Interval
To change the notification interval (e.g., from 20 minutes to 10 minutes):
1. Open `background.js`.
2. Update the interval in the `setInterval` function (e.g., `20 * 60 * 1000` milliseconds for 20 minutes).
3. Reload the extension in Chrome (`chrome://extensions/` > click "Reload").

### Building and Testing
- Test changes by loading the updated extension in Chrome.
- Use Chrome's Developer Tools (`Ctrl+Shift+I`) to debug `background.js` or `popup.js`.

## Contributing
Contributions are welcome! To contribute:
1. Fork this repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a Pull Request.
6. Aay suggestions or feedbacks are appreciated.

## Acknowledgements
- Inspired by the 20-20-20 rule for eye health.
- Built using the Chrome Extensions API.

## Contact
For questions or feedback, open an issue on this repository or contact me on GitHub.

---

Happy blinking! 👀