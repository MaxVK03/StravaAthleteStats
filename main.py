from fastapi import FastAPI

from routers import activity_routes, power_routes

app = FastAPI()

app.include_router(activity_routes)
app.include_router(power_routes)

