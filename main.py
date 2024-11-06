from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from routers.activity_routes import router as activity_routes
from routers.metrics import router as power_routes

app = FastAPI()

origins = [
    "http://localhost:3000",  # Your React app
    "http://localhost:5000",  # Your Express server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(activity_routes)
app.include_router(power_routes)

