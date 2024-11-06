from fastapi import APIRouter, HTTPException
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


@router.get("/recent_activities{limit}")
async def get_recent_activity(limit: int):
    response = activity_services.single_actvitity_service()

    if response.status_code == 200:
        latest_activity = response.json()[0:limit]
        return latest_activity
    else:
        return {"error": response.json()["message"]}


@router.get("/activity/{activity_id}")
async def get_activity(activity_id: int):
    url = f"https://www.strava.com/api/v3/activities/{activity_id}/zones"
    access_token = stravaAPIManagement.generate_api_key.get_access_token()

    response = requests.get(url, headers={"Authorization": f"Bearer {access_token}"})

    if response.status_code == 200:
        activity = response.json()
        return activity
    else:
        return {"error": response.json()["message"]}
