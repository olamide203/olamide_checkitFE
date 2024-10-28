# SpaceX Data Management Application

A Next.js application for managing SpaceX capsule data with local state management and advanced filtering capabilities.

## 🚀 Live Demo

[View Live Demo](https://olamide-checkit-fe.vercel.app/dashboard)

## 📹 Video Walkthrough

[Watch Demo Video](https://drive.google.com/file/d/106VedPt_NGC3dfuox-fZ4qmIIY_VCPL_/view?usp=sharing)

## ✨ Features

### Data Management
- Display SpaceX capsules data in a paginated table (5 items per page)
- Add new capsules locally
- Edit existing capsule information
- View detailed capsule information in a modal
- Advanced search and filtering capabilities

### Search and Filter Functionality
- Filter by multiple attributes:
  - Status
  - Original Launch Date
  - Type
- Real-time search results
- Form validation for search parameters

### Form Features
- Add new capsules with validated form inputs
- Edit existing capsule information
- Form validation with error messages
- Responsive form design

## 🛠️ Technical Stack

### Core Technologies
- **Next.js** - React framework for production
- **Formik** - Form management
- **Yup** - Form validation
- **Redux Toolkit** - State management
- **ShadcnUI** - UI components
- **Tailwind CSS** - Styling
- **Tanstack Table** - Headless Table UI

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/olamide203/YourName_CheckitFE.git
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser


## 📱 Responsive Design

The application is fully responsive and tested on:
- Desktop (1920px and above)
- Tablet (768px to 1919px)
- Mobile (320px to 767px)

## ⚡ Performance Optimizations

- Implemented pagination for better data handling
- Optimized search functionality
- Image optimization using Next.js Image component

## 🌐 API Integration

The application integrates with the SpaceX API:
- Endpoint: `https://api.spacexdata.com/v4/capsules`
- Data is fetched and managed locally
- All modifications are handled in local state
