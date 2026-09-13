# 🚀 AutoTasker APK Releases & Distribution Repository

Official release repository for **AutoTasker** Android application binary builds (`.apk`), version configuration (`version.json`), and instant in-app update metadata.

---

## 📥 Download Latest Release

| Version | Build Code | Release Date | Download Link |
| :--- | :--- | :--- | :--- |
| **v4.0.0** (Latest) | `13` | Sep 13, 2026 | [⬇️ Download AutoTasker-v4.0.0.apk](https://raw.githubusercontent.com/dev4anand/autotasker-apk/main/AutoTasker-v4.0.0.apk) |

---

## ✨ Features in v4.0.0

- 📍 **Location Geofence Range Trigger (Office / Home Arrival Automation)**: Set exact GPS coordinates (latitude, longitude) and custom radius fence in meters (e.g. 30m, 50m, 100m). Triggers automated actions (Vibrate sound profile, notifications, silent photos, emails) as soon as device enters or leaves the range! Features a 1-tap **"📍 Pick Current GPS"** button to auto-detect office coordinates instantly!
- ⚡ **Pure Event-Driven Architecture (0% Background Service Overhead)**: Completely removed the persistent background service notification and ongoing process. AutoTasker relies 100% on native Android OS `BroadcastReceiver` triggers and system `AlarmManager` exact scheduling. Zero battery usage when idle!
- 🔍 **Full Package Visibility & All-Apps Discovery**: Discovers **100% of all user-installed applications** (WhatsApp, Instagram, YouTube, Facebook, Chrome, Spotify, Telegram, Maps, etc.) alongside system apps!
- 🛠️ **Bulletproof In-App Update Engine**: Dynamic `PackageInfo` version code detection prevents repeat update prompts.
- 📱 **Direct Card Click to Edit Workflow**: Tapping anywhere on a task card directly opens the workflow editor.
- 📞 **Smart Country Code Handling (+91 Default)**: Phone call action & incoming call triggers support international phone numbers with country codes (`+91` pre-filled by default for India).

---

## 🛠️ Installation Instructions

1. Download `AutoTasker-v4.0.0.apk` using the link above.
2. Open the file on your Android phone.
3. If prompted, allow installation from unknown sources for your browser/file manager.
4. Open **AutoTasker** and grant the required permissions (Camera, Location, Calls, Notifications).

---

## 🔗 Related Links

- 📦 **Source Code Repository**: [dev4anand/autotasker](https://github.com/dev4anand/autotasker)
- 🐛 **Report Issues**: Open an issue on the source repository.
