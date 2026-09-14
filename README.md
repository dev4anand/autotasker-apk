# 🚀 AutoTasker APK Releases & Distribution Repository

Official release repository for **AutoTasker** Android application binary builds (`.apk`), version configuration (`version.json`), and instant in-app update metadata.

---

## 📥 Download Latest Release

| Version | Build Code | Release Date | Download Link |
| :--- | :--- | :--- | :--- |
| **v4.6.0** (Latest) | `24` | Sep 14, 2026 | [⬇️ Download AutoTasker-v4.6.0.apk](https://raw.githubusercontent.com/dev4anand/autotasker-apk/main/AutoTasker-v4.6.0.apk) |

---

## ✨ Features & Fixes in v4.6.0

- 📍 **GPS / Location Direct Toggle & Null Fallback**: Removed hardcoded coordinates fallback (`12.9716, 77.5946`) in location fetch—returns explicit `"null"` when GPS is off. Implemented direct background GPS toggling via `WRITE_SECURE_SETTINGS` (one-tap ADB command grant available in Settings -> Permissions).
- ⚡ **AutoTasker Accessibility Service**: Automated switch toggling for Wi-Fi and Mobile Data with fast 50ms click interaction.
- ⏰ **Native Time & Date Pickers**: Integrated system `TimePickerDialog` (12-hour clock with AM/PM) and `DatePickerDialog` into Task Builder.
- 📸 **Camera Focus Warm-Up Delay**: Fixed blurry photo issue in Silent Photo action by running a continuous auto-focus preview stream for a configurable warm-up delay before capturing.
- 🔄 **Subroutine / Manual Only Trigger (`MANUAL_SUBROUTINE`)**: Added standalone subroutine trigger for tasks without continuous hardware background triggers.

---

## 🛠️ Installation Instructions

1. Download `AutoTasker-v4.6.0.apk` using the link above.
2. Open the file on your Android phone.
3. If prompted, allow installation from unknown sources for your browser/file manager.
4. Open **AutoTasker** and grant the required permissions (WRITE_SECURE_SETTINGS via ADB, Accessibility Service, Camera, Location, Calls, Notifications).

---

## 🔗 Related Links

- 📦 **Source Code Repository**: [dev4anand/autotasker](https://github.com/dev4anand/autotasker)
- 🐛 **Report Issues**: Open an issue on the source repository.
