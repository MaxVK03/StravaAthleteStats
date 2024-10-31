from fastapi import APIRouter
import requests
import stravaAPIManagement.generate_api_key
from services import activity_services
router = APIRouter()


@router.get("/recent_activity")
async def get_recent_activity():
    response = activity_services.single_actvitity_service()

    if response.status_code == 200:
        latest_activity = response.json()[0]
        return latest_activity
    else:
        return {"error": response.json()["message"]}
