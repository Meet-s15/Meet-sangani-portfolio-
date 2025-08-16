// EmailJS Configuration File
// Update these values with your actual EmailJS credentials

const EMAILJS_CONFIG = {
    // Your EmailJS Public Key
    // Get this from: EmailJS Dashboard → Account → API Keys
    PUBLIC_KEY: "vsddE33KPKel00DQg",
    
    // Your EmailJS Service ID
    // Get this from: EmailJS Dashboard → Email Services
    SERVICE_ID: "service_a151pfr",
    
    // Your EmailJS Template ID
    // Get this from: EmailJS Dashboard → Email Templates
    TEMPLATE_ID: "template_qbvaqk8",
    
    // Your Gmail address where you want to receive messages
    TO_EMAIL: "meetsangani150807@gmail.com"
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EMAILJS_CONFIG;
} else {
    // For browser usage
    window.EMAILJS_CONFIG = EMAILJS_CONFIG;
}
