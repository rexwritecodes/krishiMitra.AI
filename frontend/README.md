# KrishiMitra.AI Frontend

This directory contains the React Native application for KrishiMitra.AI.

## Setup

1.  **Navigate to the `frontend` directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```

## Running the Application

To run the React Native application, you will need to have a mobile emulator (Android Studio or Xcode) or a physical device connected.

1.  **Start the Metro Bundler:**
    ```bash
    npm start
    # or yarn start
    ```

2.  **Run on a specific platform:**
    -   For Android:
        ```bash
        npx react-native run-android
        ```
    -   For iOS (macOS only):
        ```bash
        npx react-native run-ios
        ```

## Project Structure

-   `App.js`: The main application component.
-   `android/`: Android specific project files.
-   `ios/`: iOS specific project files.

## Interaction with Backend

The frontend will communicate with the backend API (running on FastAPI) to send images for disease prediction and receive recommendations.
