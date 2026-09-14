# 🚀 AutoTasker APK Releases & Distribution Repository

Official release repository for **AutoTasker** Android application binary builds (`.apk`), version configuration (`version.json`), and instant in-app update metadata.

---

## 📥 Download Latest Release

| Version | Build Code | Release Date | Download Link |
| :--- | :--- | :--- | :--- |
| **v4.5.1** (Latest) | `23` | Sep 14, 2026 | [⬇️ Download AutoTasker-v4.5.1.apk](https://raw.githubusercontent.com/dev4anand/autotasker-apk/main/AutoTasker-v4.5.1.apk) |

---

## ✨ Features & Fixes in v4.5.1

- ⏰ **Native Time & Date Pickers**: Integrated system `TimePickerDialog` (12-hour clock with AM/PM) and `DatePickerDialog` (calendar date picker) into the Task Builder.
- 📸 **Camera Focus & Sensor Warm-Up Delay**: Fixed blurry photo issue in Silent Photo action by running a continuous auto-focus (`CONTROL_AF_MODE_CONTINUOUS_PICTURE`) preview stream for a configurable warm-up delay (1s, 2s, 3s, 5s) before capturing the still image.
- ⚡ **Subroutine / Manual Only Trigger (`MANUAL_SUBROUTINE`)**: Added a dedicated standalone trigger for tasks that are only invoked manually from the Home screen or called as sub-workflows via `Run Another Task Workflow` action.
- 📩 **Notification Keyword Trigger**: Triggers automatically when a system notification containing specified keywords/codes arrives.
- 🌿 **Run Another Task Workflow Action (`TRIGGER_WORKFLOW`)**: Execute any saved task workflow as a subroutine within another task.

---

## 🛠️ Installation Instructions

1. Download `AutoTasker-v4.5.1.apk` using the link above.
2. Open the file on your Android phone.
3. If prompted, allow installation from unknown sources for your browser/file manager.
4. Open **AutoTasker** and grant the required permissions (Camera, Location, Calls, Notifications, Notification Access).

---

## 🔗 Related Links

- 📦 **Source Code Repository**: [dev4anand/autotasker](https://github.com/dev4anand/autotasker)
- 🐛 **Report Issues**: Open an issue on the source repository.
