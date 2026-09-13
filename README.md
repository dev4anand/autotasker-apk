# 🚀 AutoTasker APK Releases & Distribution Repository

Official release repository for **AutoTasker** Android application binary builds (`.apk`), version configuration (`version.json`), and instant in-app update metadata.

---

## 📥 Download Latest Release

| Version | Build Code | Release Date | Download Link |
| :--- | :--- | :--- | :--- |
| **v4.4.1** (Latest) | `19` | Sep 13, 2026 | [⬇️ Download AutoTasker-v4.4.1.apk](https://raw.githubusercontent.com/dev4anand/autotasker-apk/main/AutoTasker-v4.4.1.apk) |

---

## ✨ Features & Fixes in v4.4.1

- 📶 **Wi-Fi & Bluetooth Connected Triggers Zero-Service Fix**: Integrated dynamic `ConnectivityManager.NetworkCallback` and fallback Wi-Fi transport matching (`<unknown ssid>` and wildcard matching) to guarantee 100% reliable trigger execution without running any battery-draining background service.
- 📜 **Bottom Sheet Scroll Fix**: Resolved nested scroll gesture conflict in Action & Trigger Picker bottom sheets using `skipPartiallyExpanded = true` and `fillMaxHeight(0.75f)`, ensuring smooth scrolling to the bottom of the list without freezing.
- 🔦 **Blink Torch Action**: Custom user-selected duration in seconds (1s, 2s, 3s, 5s, 10s or custom).
- 🧹 **Clean Plain Text Choice Pills**: Professional, clutter-free choice buttons across the workflow builder.
- ⚙️ **Settings & Version Sync**: Full update manager synchronization for `v4.4.1` (Build 19).

---

## 🛠️ Installation Instructions

1. Download `AutoTasker-v4.4.1.apk` using the link above.
2. Open the file on your Android phone.
3. If prompted, allow installation from unknown sources for your browser/file manager.
4. Open **AutoTasker** and grant the required permissions (Camera, Location, Calls, Notifications).

---

## 🔗 Related Links

- 📦 **Source Code Repository**: [dev4anand/autotasker](https://github.com/dev4anand/autotasker)
- 🐛 **Report Issues**: Open an issue on the source repository.
