# Women's Health Quiz Website

An educational web application focused on women's health topics, featuring interactive quizzes with scientifically-based questions and detailed explanations. Built with modern web technologies to provide an engaging learning experience.

## 🌟 Features

- **4 Health Topics**: Comprehensive coverage of important women's health areas

  - **Menopause**: Hormonal changes and biological processes
  - **Endometriosis**: Understanding the condition and its impact
  - **Breast Health**: Awareness and early detection
  - **PCOS**: Polycystic Ovary Syndrome education

- **Interactive Quizzes**: 10-12 scientifically-based questions per topic
- **Immediate Feedback**: Detailed explanations with medical terms clearly defined
- **Progress Tracking**: Real-time score updates and completion status
- **Modern UI**: Beautiful, responsive design with accessibility features
- **Educational Focus**: Based on scientific research and medical knowledge

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd women-health
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

## 📁 Project Structure

```
women-health/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/         # shadcn/ui component library
│   │   │   └── examples/   # Example components
│   │   ├── pages/          # Page components (Home, Quiz, Results)
│   │   ├── data/           # Quiz content and data
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
│   └── index.html
├── server/                 # Backend Express application
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Data storage logic
│   └── vite.ts             # Vite development server setup
├── shared/                 # Shared TypeScript types
│   ├── quiz-schema.ts      # Quiz data types
│   └── schema.ts           # General schemas
├── attached_assets/        # Static assets and illustrations
└── package.json            # Project dependencies and scripts
```

## 🛠️ Technology Stack

### Frontend

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Wouter** - Lightweight routing library
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Beautiful, customizable component library
- **Framer Motion** - Smooth animations and transitions

### Backend

- **Express.js** - Fast, unopinionated web framework
- **Node.js** - JavaScript runtime
- **TypeScript** - Type-safe server-side code

### Build Tools

- **Vite** - Fast build tool and development server
- **ESBuild** - Fast JavaScript bundler
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixing

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Production
npm run build        # Build for production
npm start            # Start production server

# Development Tools
npm run check        # TypeScript type checking
npm run db:push      # Push database schema changes
```

## 🎯 Quiz Topics

### 1. The Biology of Menopause

- **12 Questions** | **~8 minutes**
- Covers hormonal changes, biological processes, and health implications
- Topics include hot flashes, osteoporosis, cardiovascular health, and more

### 2. Understanding Endometriosis

- **10 Questions** | **~6 minutes**
- Explains the condition, symptoms, diagnosis, and treatment options
- Focuses on biological mechanisms and impact on daily life

### 3. Breast Health Awareness

- **11 Questions** | **~7 minutes**
- Covers self-examination, screening, risk factors, and early detection
- Emphasizes prevention and awareness

### 4. PCOS (Polycystic Ovary Syndrome)

- **12 Questions** | **~8 minutes**
- Explains the condition, symptoms, diagnosis, and management
- Covers hormonal aspects and long-term health implications

## 🎨 Design Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Modern UI**: Clean, professional design with smooth animations
- **Educational Focus**: Clear explanations with medical terminology defined
- **Progress Tracking**: Visual progress indicators and completion status

## 🔧 Development

### Adding New Quiz Content

Quiz questions and explanations are located in:

```
client/src/data/quizData.ts
```

To add new questions:

1. Open the file and navigate to the desired topic
2. Add new question objects following the existing format
3. Include proper explanations with medical terms defined
4. Update the `questionCount` in the topic metadata

### Customizing the UI

The project uses shadcn/ui components located in:

```
client/src/components/ui/
```

### Type Safety

All quiz data is typed using shared schemas:

```
shared/quiz-schema.ts
```

## 🚀 Deployment

### Building for Production

```bash
npm run build
```

This creates optimized assets in the `dist/` directory.

### Running Production Build

```bash
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [package.json](package.json) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [troubleshooting section](#troubleshooting) below
2. Review the browser console for frontend errors (F12)
3. Check the terminal output for backend errors
4. Ensure all prerequisites are installed and up to date

## 🔧 Troubleshooting

### Port Already in Use

If port 5000 is already in use:

- Stop any other application using port 5000
- Or modify the port in `server/index.ts`

### Dependencies Installation Issues

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Application Won't Start

1. Ensure you're in the project root directory
2. Verify Node.js version is 18 or higher: `node --version`
3. Check that all dependencies installed successfully
4. Look for error messages in the terminal output

### Browser Shows Blank Page

1. Check the terminal for compilation errors
2. Verify the server started successfully
3. Try clearing your browser cache and refreshing
4. Check the browser console (F12) for JavaScript errors

## 📚 Educational Resources

This application is designed for educational purposes and includes:

- Scientifically-based questions reviewed for accuracy
- Clear explanations of medical terminology
- Focus on biological processes and health awareness
- Evidence-based information about women's health topics

---

**Note**: This application is for educational purposes only and should not replace professional medical advice. Always consult with healthcare providers for medical concerns.
