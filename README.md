# Thon Peter Mawut - Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Showcasing my work as a Computer Science Teacher, Full Stack Developer, and Data Analyst.

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark mode support
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized with Next.js 15 and React 19
- **Animations**: Smooth animations using Framer Motion
- **Interactive**: Particle background effects and smooth scrolling
- **Contact Form**: Functional contact form with email integration
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Particles**: TSParticles
- **Forms**: React Hook Form
- **Icons**: React Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-porftolio-1
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
```
# SMTP Configuration for Contact Form
# For Gmail setup:
# 1. Go to https://myaccount.google.com/apppasswords
# 2. Select "Mail" and "Other (Custom name)" 
# 3. Enter "Portfolio Contact Form" as the name
# 4. Copy the 16-character password generated
# 5. Use your Gmail address as SMTP_USER and the app password as SMTP_PASSWORD

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-character-app-password

# GitHub API Token (Optional - increases rate limits)
# Get one at: https://github.com/settings/tokens
GITHUB_TOKEN=your_github_personal_access_token
```

**Important:** The contact form sends emails to `thonawangjr@gmail.com`. Make sure your SMTP_USER has permission to send emails.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx              # Hero section
│   │   ├── About.tsx             # About section
│   │   ├── Experience.tsx        # Experience timeline
│   │   ├── Projects.tsx          # Projects showcase
│   │   ├── Education.tsx         # Education & certifications
│   │   └── Contact.tsx           # Contact form
│   ├── Navigation.tsx            # Navigation bar
│   ├── Footer.tsx                # Footer component
│   └── ParticleBackground.tsx   # Particle background effect
└── contexts/
    └── ThemeContext.tsx          # Dark mode context
```

## 🎨 Customization

### Update Personal Information

Edit the following files to update your personal information:

- `src/components/sections/Hero.tsx` - Hero section content
- `src/components/sections/About.tsx` - About section and skills
- `src/components/sections/Experience.tsx` - Work experience
- `src/components/sections/Projects.tsx` - Projects showcase
- `src/components/sections/Education.tsx` - Education and certifications
- `src/components/sections/Contact.tsx` - Contact information

### Update Profile Image

Replace `/public/prof2.png` with your profile image.

### Update Resume

Replace `/public/Resume-2024.pdf` with your resume.

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This Next.js app can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📧 Contact Form Setup

To enable the contact form, you need to configure SMTP settings:

1. For Gmail:
   - Enable 2-factor authentication
   - Generate an App Password
   - Use `smtp.gmail.com` as host and `587` as port

2. Add your credentials to `.env`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Thon Peter Mawut**

- Email: thonawangjr@gmail.com
- LinkedIn: [linkedin.com/in/thon-peter](https://linkedin.com/in/thon-peter)
- GitHub: [github.com/Thonpeter](https://github.com/Thonpeter)
- Location: Juba, South Sudan

---

Made with ❤️ using Next.js
