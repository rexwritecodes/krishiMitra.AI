from fastapi import FastAPI, File, UploadFile
from typing import Optional

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Welcome to KrishiMitra.AI Backend!"}

@app.post("/predict/")
async def predict_disease(file: UploadFile = File(...), crop_type: Optional[str] = None):
    # In a real application, you would load your AI model here
    # and process the image to detect diseases.
    # For now, we'll return a dummy response.

    # Read the image file
    contents = await file.read()

    # Dummy AI prediction
    disease_detected = "Healthy"
    confidence = 95.0
    recommendations = [
        "Keep watering regularly.",
        "Ensure proper sunlight exposure."
    ]

    if "disease" in file.filename.lower(): # Simple dummy logic for testing
        disease_detected = "Disease: Early Blight"
        confidence = 80.5
        recommendations = [
            "Apply a copper-based fungicide.",
            "Remove infected leaves to prevent spread."
        ]

    return {
        "filename": file.filename,
        "crop_type": crop_type,
        "disease_detected": disease_detected,
        "confidence": confidence,
        "recommendations": recommendations
    }