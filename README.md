# KrishiMitra.AI

## Project Description
KrishiMitra.AI is a plant disease detection system that helps farmers identify crop diseases early through AI-powered image analysis. The system:
- Takes images of crops (leaves/fruits)
- Detects diseases using AI models
- Provides treatment/prevention recommendations

## Directory Structure
```
krishiMitra.AI/
├── frontend/       # React web application
├── backend/        # Python AI backend (FastAPI/Flask)
├── README.md       # Project documentation
└── .gitignore      # Git ignore file
```

## Tech Stack
- **Frontend**: React Native (mobile)
- **Backend**: Python (FastAPI/Flask)
- **AI Model**: Pre-trained models (MobileNet/EfficientNet) on PlantVillage dataset
- **Database**: Firebase/MongoDB (optional)
- **Hosting**: Render/Vercel (frontend), Railway/Heroku (backend)

## Getting Started
1. Clone this repository
2. Install dependencies for both frontend and backend
3. Run development servers

## Features
- Crop disease detection from images
- Treatment/prevention recommendations
- Dashboard showing prediction confidence
- Nearest agri-store suggestion (bonus)