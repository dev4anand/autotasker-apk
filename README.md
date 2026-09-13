# 🚀 AutoTasker APK Releases & Distribution Repository

Official release repository for **AutoTasker** Android application binary builds (`.apk`), version configuration (`version.json`), and instant in-app update metadata.

---

## 📥 Download Latest Release

| Version | Build Code | Release Date | Download Link |
| :--- | :--- | :--- | :--- |
| **v4.4.2** (Latest) | `20` | Sep 13, 2026 | [⬇️ Download AutoTasker-v4.4.2.apk](https://raw.githubusercontent.com/dev4anand/autotasker-apk/main/AutoTasker-v4.4.2.apk) |

---

## ✨ Features & Fixes in v4.4.2

- ⚙️ **Hybrid Foreground Automation Engine**: Added a user toggle in Settings ("Run Background Automation Engine") to control background service execution. When ON, a lightweight, 0%-battery foreground service keeps Wi-Fi, Bluetooth, Location, and system triggers running 100% instantly even when the app is closed or swiped away.
- 💡 **Trigger Helper Notices**: Clear notices displayed in the task builder and trigger picker for Wi-Fi, Bluetooth, and Location triggers reminding users that the background engine setting controls trigger execution when the app is closed.
- 📶 **Wi-Fi & Bluetooth Zero-Service Fix**: Integrated dynamic `ConnectivityManager.NetworkCallback` and fallback Wi-Fi transport matching (`<unknown ssid>` and wildcard matching).
- 📜 **Bottom Sheet Scroll Fix**: Resolved nested scroll gesture conflict in Action & Trigger Picker bottom sheets using `skipPartiallyExpanded = true` and `fillMaxHeight(0.75f)`.

---

## 🛠️ Installation Instructions

1. Download `AutoTasker-v4.4.2.apk` using the link above.
2. Open the file on your Android phone.
3. If prompted, allow installation from unknown sources for your browser/file manager.
4. Open **AutoTasker** and grant the required permissions (Camera, Location, Calls, Notifications).

---

## 🔗 Related Links

- 📦 **Source Code Repository**: [dev4anand/autotasker](https://github.com/dev4anand/autotasker)
- 🐛 **Report Issues**: Open an issue on the source repository.
