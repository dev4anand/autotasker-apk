# 🚀 AutoTasker APK Releases & Distribution Repository

Official release repository for **AutoTasker** Android application binary builds (`.apk`), version configuration (`version.json`), and instant in-app update metadata.

---

## 📥 Download Latest Release

| Version | Build Code | Release Date | Download Link |
| :--- | :--- | :--- | :--- |
| **v3.7.0** (Latest) | `10` | Sep 13, 2026 | [⬇️ Download AutoTasker-v3.7.0.apk](https://raw.githubusercontent.com/dev4anand/autotasker-apk/main/AutoTasker-v3.7.0.apk) |

---

## ✨ Features in v3.7.0

- 🛠️ **Bulletproof In-App Update Engine**: Rebuilt the update installer with automatic cache-busting (`?nocache=...`), HTTP 301/302/307 redirect resolution, and Android 8.0+ Unknown App Installation permission detection (`Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES`).
- 📱 **Direct Card Click to Edit Workflow**: Clicking anywhere on a task card directly opens the workflow editor. Removed redundant Edit button and optimized spacing for **Test Workflow** and **Delete Task** action buttons.
- 📞 **Smart Country Code Handling (+91 Default)**: Phone call action & incoming call triggers now explicitly support international phone numbers with country codes (`+91` pre-filled by default for India). Automatically cleans and formats 10-digit input to `+91`.
- 🧹 **Clean Single-APK Distribution**: Repository keeps only the latest release binary (`AutoTasker-v3.7.0.apk`) for faster downloads and clean repository history.
- 🎨 **Enhanced Logo & Symbol Aesthetics**: Scaled up inner logo symbol size (2.25x scaling) and expanded logo badge dimensions across Splash Screen, Dashboard Header, Welcome Screen, and App Icon.
- 🌐 **Offline-First Design**: AutoTasker works 100% offline seamlessly. When internet access is available, it automatically checks GitHub for updates and installs them directly.

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
