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


@router.get("/powerStream")
async def get_power_stream(activity_id: int):
    url = f"https://www.strava.com/api/v3/activities/{activity_id}/streams"
    params = {"keys": "watts", "key_by_type": True, "series_type": "time"}
    access_token = stravaAPIManagement.generate_api_key.get_access_token()

    response = requests.get(url, headers={"Authorization": f"Bearer {access_token}"}, params=params)

    if response.status_code == 200:
        power_stream = response.json()
        return power_stream
    else:
        return {"error": response.json()["message"]}


@router.get("/recentPowerStream")
async def get_power_stream():
    access_token = stravaAPIManagement.generate_api_key.get_access_token()
    headers = {"Authorization": f"Bearer {access_token}"}

    activities_url = "https://www.strava.com/api/v3/athlete/activities"
    activities_response = requests.get(activities_url, headers=headers)

    if activities_response.status_code != 200:
        raise HTTPException(status_code=activities_response.status_code,
                            detail=activities_response.json().get("message", "Error fetching activities"))

    activities = activities_response.json()
    if not activities:
        raise HTTPException(status_code=404, detail="No activities found")

    most_recent_activity_id = activities[2]["id"]
    print("ID LOOK FOR " + str(most_recent_activity_id))

    streams_url = f"https://www.strava.com/api/v3/activities/{most_recent_activity_id}/streams"
    params = {"keys": "watts", "key_by_type": True}
    streams_response = requests.get(streams_url, headers=headers, params=params)

    if streams_response.status_code != 200:
        raise HTTPException(status_code=streams_response.status_code,
                            detail=streams_response.json().get("message", "Error fetching power stream"))

    streams = streams_response.json()
    power_stream = streams.get("watts")

    if not power_stream:
        raise HTTPException(status_code=404, detail="Power stream not found for the most recent activity")

    return power_stream

