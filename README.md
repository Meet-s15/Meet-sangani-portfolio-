# Meet Sangani - Frontend Developer Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript, featuring EmailJS integration for real-time contact form functionality.

## ✨ Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Interactive Elements**: 3D hover effects, smooth scrolling, and dynamic content
- **EmailJS Integration**: Real-time contact form with instant email delivery to Gmail
- **Modern UI/UX**: Clean, professional design with gradient backgrounds and glassmorphism effects

## 🚀 EmailJS Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email provider
4. Connect your Gmail account (meetsangani150807@gmail.com)
5. Note down your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Portfolio Message from {{from_name}}

Hello Meet,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
{{from_name}}
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key** (e.g., `user_def456`)

### Step 5: Update Portfolio Configuration
Replace the placeholder values in your `index.html` file:

```javascript
// Line 1950: Replace YOUR_PUBLIC_KEY
emailjs.init("user_def456");

// Line 1980: Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
emailjs.send('service_abc123', 'template_xyz789', {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'meetsangani150807@gmail.com'
})
```

### Step 6: Test the Contact Form
1. Open your portfolio website
2. Navigate to the Contact section
3. Fill out and submit the contact form
4. Check your Gmail for the received message

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 769px - 1024px
- **Desktop**: 1025px+

## 🎨 Design Features

- **Gradient Backgrounds**: Modern color schemes with smooth transitions
- **Glassmorphism Effects**: Semi-transparent elements with backdrop blur
- **3D Animations**: Interactive hover effects and smooth transitions
- **Custom Icons**: Font Awesome integration for professional icons
- **Typography**: Clean, readable fonts with proper hierarchy

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Advanced styling with Grid, Flexbox, and animations
- **JavaScript**: Interactive functionality and form handling
- **EmailJS**: Real-time email service integration
- **Font Awesome**: Professional icon library

## 📧 Contact Form Features

- **Real-time Validation**: Client-side form validation
- **Loading States**: Visual feedback during email sending
- **Success/Error Messages**: Clear user feedback
- **Auto-reset**: Form clears after successful submission
- **Spam Protection**: Built-in EmailJS security features

## 🔧 Customization

### Colors
Update the CSS custom properties in the `:root` selector to match your brand colors:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #feca57;
    --text-color: #333;
    --bg-color: #f8f9fa;
}
```

### Content
- Update personal information in the HTML
- Modify skills and experience sections
- Add your own projects and achievements
- Customize the hero section with your photo

## 📁 File Structure

```
portfolio/
├── index.html          # Main portfolio file
├── README.md           # This documentation
└── assets/             # Optional: Add images, icons, etc.
```

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main` or `master`)
4. Your portfolio will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your portfolio folder to [Netlify](https://netlify.com)
2. Get instant deployment with custom domain support

### Vercel
1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Automatic deployments on every push

## 📞 Support

If you encounter any issues with EmailJS setup:
1. Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
2. Verify your service and template IDs
3. Ensure your Gmail account is properly connected
4. Check browser console for error messages

## 📄 License

This portfolio template is open source and available under the MIT License.

## 🙏 Acknowledgments

- **EmailJS** for providing the email service
- **Font Awesome** for the icon library
- **CSS Grid & Flexbox** for modern layout techniques
- **Modern CSS** for advanced styling capabilities

---

**Built with ❤️ by Meet Sangani**

*Computer Science Engineering Student & Aspiring Frontend Developer*