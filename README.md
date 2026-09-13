# 🚀 AutoTasker APK Releases & Space Distribution Portal

Official distribution repository and space-themed landing page for **AutoTasker** Android application binary builds (`.apk`), version configuration (`version.json`), and instant in-app update metadata.

---

## 📥 Download Latest Release

| Version | Build Code | Release Date | Download Link |
| :--- | :--- | :--- | :--- |
| **v3.7.0** (Latest) | `10` | Sep 13, 2026 | [⬇️ Download AutoTasker-v3.7.0.apk](https://raw.githubusercontent.com/dev4anand/autotasker-apk/main/AutoTasker-v3.7.0.apk) |
| **v3.6.0** | `9` | Sep 13, 2026 | [⬇️ Download AutoTasker-v3.6.0.apk](https://raw.githubusercontent.com/dev4anand/autotasker-apk/main/AutoTasker-v3.6.0.apk) |

---

## ✨ Features & Enhancements in v3.7.0

- 📥 **Offline Task Queueing**: Internet-dependent actions (such as sending emails via SMTP) triggered in Airplane mode or offline are automatically queued into Room DB and sent as soon as network connects.
- 📱 **Open Particular App Action**: Added `OPEN_APP` action with interactive Package Manager app picker to select and open any installed application.
- ⏰ **AM/PM & Recurrence Time Scheduling**: Alarm scheduling now supports 12-hour AM/PM input, target date (`YYYY-MM-DD`), and Daily, Monthly, or Yearly recurrence rules.
- ⚡ **Event Trigger Reliability**: Fixed `SCREEN_ON` dynamic broadcast listening, `LOCATION_STATE_CHANGED` GPS provider detection, `AIRPLANE_MODE` target state filtering, and `ACTION_BOOT_COMPLETED` background service recovery.
- 🌌 **Space-Themed Distribution Site**: Interactive landing page with starfield canvas background, live workflow simulator, release notes, and direct APK download.

---

## 🛠️ Installation Instructions

1. Download `AutoTasker-v3.7.0.apk` using the link above.
2. Open the file on your Android phone.
3. If prompted, allow installation from unknown sources for your browser/file manager.
4. Open **AutoTasker** and grant the required permissions (Camera, Location, Calls, Notifications).

---

## 🔗 Related Links

- 📦 **Source Code Repository**: [dev4anand/autotasker](https://github.com/dev4anand/autotasker)
- 🐛 **Report Issues**: Open an issue on the source repository.
