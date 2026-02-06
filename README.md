# APEX Smart Password Plugin

A powerful, real-time password strength indicator plugin for Oracle APEX. This plugin helps enforce strong password policies by providing users with immediate visual feedback on their password strength and security compliance.

## 🎯 Overview

APEX Smart Password Plugin is a custom Oracle APEX item type plugin that helps enforce strong password policies with real-time validation and user-friendly feedback. It improves security by guiding users to create strong passwords and preventing weak or common passwords during registration or password change scenarios.

## ✨ Features

- **Real-time Password Strength Detection**: Immediate visual feedback as users type
- **Multi-level Strength Indicators**: Weak / Medium / Strong password classification
- **Customizable Validation Rules**: Configure minimum length, character requirements, and complexity rules
- **Visual Strength Meter**: Intuitive progress bar showing password strength
- **Real-time Validation**: Instant feedback without page refresh
- **User-Friendly Feedback**: Clear messages guiding users to create stronger passwords
- **Easy Installation**: Simple SQL-based installation process
- **Mobile-Responsive Design**: Works seamlessly on all devices
- **Security Best Practices**: Implements industry-standard password validation algorithms

## 📋 Requirements

- Oracle APEX 21.2 or higher
- Oracle Database 11.2.0.4 or higher
- Modern web browser with JavaScript enabled

## 🚀 Installation

### Step 1: Download the Plugin
1. Download the `item_type_plugin_smart_password_strength.sql` file from this repository

### Step 2: Import into APEX
1. Log in to your Oracle APEX workspace
2. Navigate to **SQL Workshop → SQL Scripts**
3. Click **Upload** and select the downloaded SQL file
4. Click **Upload**
5. Click **Run** to execute the script

### Step 3: Alternative Import Method
1. Go to **Shared Components → Plugins**
2. Click **Import**
3. Upload the plugin export file
4. Follow the import wizard

### Step 4: Use in Your Application
1. Create a new page item
2. Select **Smart Password Strength** as the item type
3. Configure the item properties as needed
4. Save and run the page

## 💻 Usage

### Basic Implementation

```sql
-- Create a password item with the plugin
INSERT INTO apex_application_page_items (...)
VALUES (
  application_id => 100,
  page_id => 1,
  item_name => 'P1_PASSWORD',
  item_type => 'Smart Password Strength',
  ...
);
```

### Configuration Options

- **Minimum Password Length**: Set minimum required characters (default: 8)
- **Require Uppercase**: Enforce at least one uppercase letter
- **Require Numbers**: Enforce at least one numeric character
- **Require Special Characters**: Enforce special character inclusion
- **Exclude Common Passwords**: Enable common password dictionary check

## 🔒 Security Considerations

- Passwords are validated client-side for user experience
- Server-side validation is recommended for production environments
- All validation rules follow NIST password guidelines
- No passwords are stored or transmitted outside your application

## 📝 Plugin Type

- **Type**: Item Type Plugin
- **Internal Name**: IN.SKSAIKUMAR.APEX.SMARTPASSWORD
- **Compatible with**: Dynamic Actions, Page Processing

## 🎨 Customization

The plugin includes two main files for customization:

### pwd_strength.js
Contains the core validation logic and strength calculation algorithm

### pwd_strength.css
Contains styling for the strength indicator and visual feedback elements

## 🐛 Support & Issues

For bug reports, feature requests, and general support:
- **GitHub Issues**: https://github.com/saikumar0003/apex-smart-password-plugin/issues
- **Email**: rsaikumar976@example.com

Please provide detailed information including:
- APEX version
- Browser and version
- Steps to reproduce the issue
- Expected vs. actual behavior

## 📚 Documentation

For detailed documentation, examples, and API reference, visit:
https://github.com/saikumar0003/apex-smart-password-plugin

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

You are free to use, modify, and distribute this plugin in both commercial and non-commercial projects.

## 👤 Author

**Saikumar Ravada**
- Email: rsaikumar976@example.com
- GitHub: https://github.com/saikumar0003
- Profile: Full-stack Oracle APEX developer specializing in plugin development and security enhancements

## 🙏 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## 📦 File Structure

```
apex-smart-password-plugin/
├── README.md
├── LICENSE
├── apexplugin.json
├── item_type_plugin_smart_password_strength.sql
├── pwd_strength.js
├── pwd_strength.css
└── preview.png
```

## 🔄 Version History

### v1.0 (Current)
- Initial release with core password strength validation
- Real-time strength indicator
- Customizable validation rules
- Mobile-responsive design

## 📞 Contact & Support

For questions or additional information:
- Open an issue on GitHub
- Email: rsaikumar976@example.com
- Check existing issues for solutions

---

**Last Updated**: 2026-02-06 12:33:36
**Status**: Active Development
