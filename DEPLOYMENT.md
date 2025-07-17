# Deployment Guide for Doon Coding Academy Website

## Quick Deployment Options

### 1. Vercel (Recommended - Free)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy automatically

### 2. Netlify (Alternative - Free)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `out`

### 3. Traditional Hosting (cPanel/Shared Hosting)
1. Run `npm run build` locally
2. Upload the `out` folder contents to your hosting
3. Configure your domain to point to the uploaded files

## Environment Variables for Production

Create these environment variables in your hosting platform:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_PHONE_NUMBER=919876543210
NEXT_PUBLIC_EMAIL=info@dooncodingacademy.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Domain Configuration

1. Point your domain to your hosting provider
2. Update contact information in the code
3. Test all WhatsApp and phone links
4. Verify Google Maps integration

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify WhatsApp links work
- [ ] Check phone number links
- [ ] Test contact form
- [ ] Verify responsive design on mobile
- [ ] Check SEO meta tags
- [ ] Test Google Maps integration
- [ ] Verify all internal links work

## Performance Optimization

- Enable compression (Gzip/Brotli)
- Set up CDN if needed
- Configure caching headers
- Optimize images
- Enable HTTPS

## Analytics Setup

Add your tracking codes to `app/layout.tsx`:
- Google Analytics
- Facebook Pixel
- Google Tag Manager

## Maintenance

- Regular security updates
- Content updates
- Course information updates
- Contact details verification
- Performance monitoring
