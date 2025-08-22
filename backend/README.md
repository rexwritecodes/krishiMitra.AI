# KrishiMitra.AI Backend

This directory contains the FastAPI backend for the KrishiMitra.AI application.

## Setup

1.  **Create a virtual environment (recommended):**
    ```bash
    python -m venv venv
    ```

2.  **Activate the virtual environment:**
    -   On Windows:
        ```bash
        .\venv\Scripts\activate
        ```
    -   On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

## Running the Application

To run the FastAPI application, navigate to this directory in your terminal and execute:

```bash
uvicorn main:app --reload
```

The API will be accessible at `http://127.0.0.1:8000`.

## API Endpoints

-   **GET /**: Welcome message.
-   **POST /predict/**: Upload an image for disease prediction.
    -   `file`: The image file (required).
    -   `crop_type`: Optional crop type (e.g., "Wheat", "Tomato").

## AI Model

The `predict` endpoint currently returns a dummy response. In a production environment, you would integrate a pre-trained image classification model (e.g., MobileNet/EfficientNet fine-tuned on the PlantVillage dataset) to perform actual disease detection.