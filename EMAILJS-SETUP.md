# 🚀 Quick EmailJS Setup Guide

## ⚡ 5-Minute Setup

### 1. Sign Up for EmailJS
- Go to [EmailJS.com](https://www.emailjs.com/)
- Click "Get Started Free"
- Sign up with your Gmail account

### 2. Get Your Credentials
After signing up, you'll need 3 values:

#### 🔑 Public Key
- Go to **Account** → **API Keys**
- Copy your **Public Key** (starts with `user_`)

#### 📧 Service ID  
- Go to **Email Services**
- Click **"Add New Service"**
- Choose **Gmail**
- Connect your Gmail account
- Copy the **Service ID** (starts with `service_`)

#### 📝 Template ID
- Go to **Email Templates**
- Click **"Create New Template"**
- Use this template:

```
Subject: New Portfolio Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

- Save and copy the **Template ID** (starts with `template_`)

### 3. Update Configuration
Open `emailjs-config.js` and replace the placeholder values:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: "user_abc123def456",        // Your actual Public Key
    SERVICE_ID: "service_xyz789",           // Your actual Service ID  
    TEMPLATE_ID: "template_abc123",         // Your actual Template ID
    TO_EMAIL: "meetsangani150807@gmail.com" // Your Gmail (already set)
};
```

### 4. Test It!
- Open your portfolio website
- Go to Contact section
- Fill out the form and submit
- Check your Gmail inbox!

## 🎯 What You'll Get

✅ **Real-time emails** sent directly to your Gmail  
✅ **Professional contact form** with loading states  
✅ **Success/error messages** for user feedback  
✅ **Spam protection** built-in  
✅ **Mobile responsive** design  

## 🔧 Troubleshooting

**Form not working?**
- Check browser console for errors
- Verify all 3 IDs are correct
- Ensure Gmail account is connected in EmailJS

**Emails not received?**
- Check spam folder
- Verify EmailJS service is active
- Test with EmailJS dashboard

## 📞 Need Help?

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)
- Check the main README.md for detailed instructions

---

**That's it! Your portfolio now has a professional contact form that sends real-time emails to your Gmail! 🎉**
