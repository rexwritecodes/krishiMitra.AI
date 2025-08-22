# KrishiMitra.AI Frontend

This directory contains the React Native mobile application for KrishiMitra.AI.

## Setup

1. **Install dependencies:**
   ```bash
   cd KrishiMitraApp
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Run on Android:**
   ```bash
   npm run android
   ```

4. **Run on iOS (requires macOS):**
   ```bash
   npm run ios
   ```

## Features

- **Home Screen**: Introduction to the app and its features
- **Camera Screen**: Take or select photos of plant leaves/fruits
- **Result Screen**: View disease detection results and recommendations

## Backend Integration

The app communicates with the FastAPI backend for disease detection. The API service is configured in `services/api.js`. By default, it points to `http://10.0.2.2:8000` which is the localhost equivalent for Android emulators.

For physical devices or iOS simulators, you may need to update the API_URL in `services/api.js` to point to your backend server's IP address.

## Development Notes

- The app uses Expo for easier development and testing
- Image picking is handled by expo-image-picker
- Navigation is implemented using React Navigation
- API calls are made using Axios