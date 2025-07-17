# Doon Coding Academy Website

A professional, modern website for Doon Coding Academy built with Next.js 14 and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with custom color scheme
- **Responsive Layout**: Mobile-first approach with perfect responsiveness
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance**: Optimized images and fast loading times
- **Interactive Components**: Smooth animations and hover effects
- **WhatsApp Integration**: Direct enrollment and contact via WhatsApp
- **Google Maps Integration**: Location maps for both centers

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel ready

## 🏗️ Project Structure

```
doon-coding-academy/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── courses/
│   │   └── page.tsx
│   ├── enroll/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   └── Navbar.tsx
├── public/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Design System

### Colors
- **Navy Blue**: #1f2d5a (Primary brand color)
- **Green**: #2ca86d (Accent color)
- **Gray**: Various shades for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Components
- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Hover effects with shadow transitions
- **Forms**: Focused states with brand colors

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server**
   ```bash
   npm start
   ```

## 📱 Pages

### Home Page
- Hero section with call-to-action
- Features showcase
- Course overview
- Student testimonials
- Newsletter signup

### Courses Page
- Full Stack Web Development course details
- Programming language courses (Python, Java, C)
- Course features and curriculum
- Pricing information

### About Page
- Academy mission and vision
- Teaching philosophy
- Hybrid learning model
- Success statistics

### Contact Page
- Contact information
- Contact form
- Google Maps integration
- WhatsApp quick contact

### Blog Page
- Latest programming articles
- Category filtering
- Newsletter signup
- SEO-optimized content

### Enroll Page
- Course selection
- WhatsApp enrollment
- Phone enrollment
- Process steps

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_PHONE_NUMBER=919876543210
NEXT_PUBLIC_EMAIL=info@dooncodingacademy.com
```

### Google Maps Integration
To enable Google Maps:
1. Get a Google Maps API key
2. Add it to your environment variables
3. Update the map components in contact page

## 📧 Contact Integration

### WhatsApp
- Pre-filled messages for different courses
- Direct enrollment links
- Quick contact buttons

### Email
- Contact form submissions
- Newsletter signup
- Course inquiries

### Phone
- Click-to-call functionality
- Multiple contact numbers
- Business hours display

## 🎯 SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for better search results
- **Sitemap**: Auto-generated sitemap
- **Robots.txt**: Search engine directives

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📊 Analytics

Ready for integration with:
- Google Analytics
- Google Tag Manager
- Facebook Pixel
- Hotjar/Clarity

## 🔒 Security

- Input validation
- CSRF protection
- Secure headers
- Environment variables

## 🎨 Customization

### Brand Colors
Update `tailwind.config.js`:
```javascript
colors: {
  navy: '#1f2d5a',
  green: '#2ca86d',
}
```

### Typography
Update font imports in `app/globals.css`

### Content
- Update course information in respective pages
- Modify contact details
- Change testimonials and success stories

## 📞 Support

For technical support or customization requests:
- Email: info@dooncodingacademy.com
- Phone: +91 9876543210
- WhatsApp: +91 9876543210

## 📄 License

This project is proprietary and belongs to Doon Coding Academy.

---

Built with ❤️ by Doon Coding Academy
