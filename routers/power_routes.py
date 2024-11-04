from fastapi import FastAPI, HTTPException, APIRouter
import requests
import stravaAPIManagement.generate_api_key

router = APIRouter()


@router.get("/cadPower/{activity_id}")
async def get_time_power_cadence_stream(activity_id: int):
    # Replace with your function to get a valid access token
    access_token = stravaAPIManagement.generate_api_key.get_access_token()
    headers = {"Authorization": f"Bearer {access_token}"}

    url = f"https://www.strava.com/api/v3/activities/{activity_id}/streams"
    params = {
        "keys": "time,power,cadence",
        "key_by_type": True
    }

    response = requests.get(url, headers=headers, params=params)

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail=response.json().get("message", "Error fetching streams"))

    streams = response.json()

    if not streams:
        raise HTTPException(status_code=404, detail="No streams found for the given activity")

    return {
        "time": streams.get("time"),
        "power": streams.get("power"),
        "cadence": streams.get("cadence")
    }
