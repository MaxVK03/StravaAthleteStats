from fastapi import FastAPI
from routers.activity_routes import router as activity_routes

app = FastAPI()

app.include_router(activity_routes)
# app.include_router(power_routes)

