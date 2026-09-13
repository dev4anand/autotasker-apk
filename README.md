# 🚀 AutoTasker APK Releases & Distribution Repository

Official release repository for **AutoTasker** Android application binary builds (`.apk`), version configuration (`version.json`), and instant in-app update metadata.

---

## 📥 Download Latest Release

| Version | Build Code | Release Date | Download Link |
| :--- | :--- | :--- | :--- |
| **v4.4.0** (Latest) | `18` | Sep 13, 2026 | [⬇️ Download AutoTasker-v4.4.0.apk](https://raw.githubusercontent.com/dev4anand/autotasker-apk/main/AutoTasker-v4.4.0.apk) |

---

## ✨ Features in v4.4.0

- 📶 **Wi-Fi & Bluetooth Connected Triggers Fix**: Declared missing network & Bluetooth permissions (`ACCESS_NETWORK_STATE`, `BLUETOOTH_CONNECT`, `BLUETOOTH_SCAN`) and registered system broadcast intent-filters (`STATE_CHANGE`, `WIFI_STATE_CHANGED`, `CONNECTIVITY_CHANGE`, `ACL_CONNECTED`, `CONNECTION_STATE_CHANGED`) to reliably trigger actions upon connection.
- 🔦 **Blink Torch Action**: Added `Blink Flashlight` mode with custom user-selected duration in seconds (1s, 2s, 3s, 5s, 10s or custom).
- 🧹 **Clean Plain Text Choice Pills**: Removed cluttering emojis from choice buttons across the builder interface.
- ⚙️ **Settings Screen Update Fix**: Settings screen update button now displays real-time download percentage, handles unknown app source permissions, and launches package installer reliably.

---

## 🛠️ Installation Instructions

1. Download `AutoTasker-v4.4.0.apk` using the link above.
2. Open the file on your Android phone.
3. If prompted, allow installation from unknown sources for your browser/file manager.
4. Open **AutoTasker** and grant the required permissions (Camera, Location, Calls, Notifications).

---

## 🔗 Related Links

- 📦 **Source Code Repository**: [dev4anand/autotasker](https://github.com/dev4anand/autotasker)
- 🐛 **Report Issues**: Open an issue on the source repository.
