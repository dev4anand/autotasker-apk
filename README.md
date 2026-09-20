# 🚀 DevTasker APK Releases & Distribution Repository

Official release repository for **DevTasker** Android application binary builds (`.apk`), version configuration (`version.json`), and instant in-app update metadata.

---

## 📥 Download Latest Release

| Version | Build Code | Release Date | Download Link |
| :--- | :--- | :--- | :--- |
| **v5.0.0** (Latest) | `25` | Sep 20, 2026 | [⬇️ Download DevTasker-v5.0.0.apk](https://raw.githubusercontent.com/dev4anand/autotasker-apk/main/DevTasker-v5.0.0.apk) |

---

## ✨ Major Features & Additions in v5.0.0

- 🚀 **Project Rebranded to DevTasker**: Fully rebranded application interface, launcher, and web distribution portal to **DevTasker**.
- 🎥 **Silent Video Recording (`SILENT_VIDEO`)**: Record video silently in the background (Camera lens: FRONT or BACK, configurable duration: 5s, 10s, 30s, 60s) saved directly to Media Vault.
- 🎙️ **Silent Audio Recording (`SILENT_AUDIO`)**: Record voice/audio silently via microphone in background (Duration: 10s, 30s, 60s, 120s) saved directly to Media Vault.
- 📁 **Media Vault UI**: Bottom navigation bar tab upgraded from "Gallery" to **Media Vault** featuring filter tabs (`All`, `📷 Photos`, `🎥 Videos`, `🎙️ Audio Records`) with an embedded **Audio Player bar**, Video preview, batch delete, and media library export options.
- 📧 **Email Media Attachments**: Send Email action updated to attach recorded Photos, Videos, or Audio files dynamically to automated SMTP email alerts.
- 📍 **Direct GPS Toggle & Clean Null Fallback**: Direct background GPS toggle via `WRITE_SECURE_SETTINGS` and explicit `"null"` fallback when GPS is disabled.

---

## 🛠️ Installation Instructions

1. Download `DevTasker-v5.0.0.apk` using the link above.
2. Open the file on your Android phone.
3. If prompted, allow installation from unknown sources for your browser/file manager.
4. Open **DevTasker** and grant the required permissions (WRITE_SECURE_SETTINGS via ADB, Accessibility Service, Camera, Microphone/Record Audio, Location, Calls, Notifications).

---

## 🔗 Related Links

- 📦 **Source Code Repository**: [dev4anand/autotasker](https://github.com/dev4anand/autotasker)
- 🐛 **Report Issues**: Open an issue on the source repository.
