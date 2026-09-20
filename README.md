# 🚀 DevTasker APK Releases & Distribution Repository

Official release repository for **DevTasker** Android application binary builds (`.apk`), version configuration (`version.json`), and instant in-app update metadata.

---

## 📥 Download Latest Release

| Version | Build Code | Release Date | Download Link |
| :--- | :--- | :--- | :--- |
| **v5.4.0** (Latest) | `29` | Sep 20, 2026 | [⬇️ Download DevTasker-v5.4.0.apk](https://raw.githubusercontent.com/dev4anand/autotasker-apk/main/DevTasker-v5.4.0.apk) |

---

## ✨ Major Features & Additions in v5.4.0

- 📄 **Generate Report Action**: New automation action compiles execution logs and status of all preceding actions in the workflow into a structured `.txt` report file.
- 🗄️ **Media Vault Reports Integration**: Generated reports are saved directly into the Media Vault (`DevTasker_Reports`), with a dedicated clean "Reports" tab and in-app full text report viewer modal.
- ✉️ **Email Report Attachment**: Direct email attachment support for "Latest Report", plus `{{report_path}}` added to the "Insert Data" variable bar for email messages and text fields.
- 📤 **Report Sharing & Export**: Share generated report logs via system share intent (WhatsApp, Gmail, Drive) or export directly to the device Documents folder.

---

## 🛠️ Installation Instructions

1. Download `DevTasker-v5.4.0.apk` using the link above.
2. Open the file on your Android phone.
3. If prompted, allow installation from unknown sources for your browser/file manager.
4. Open **DevTasker** and grant the required permissions (WRITE_SECURE_SETTINGS via ADB, Accessibility Service, Camera, Microphone/Record Audio, Location, Calls, Notifications).

---

## 🔗 Related Links

- 📦 **Source Code Repository**: [dev4anand/autotasker](https://github.com/dev4anand/autotasker)
- 🐛 **Report Issues**: Open an issue on the source repository.
