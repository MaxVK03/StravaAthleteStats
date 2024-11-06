from fastapi import FastAPI, HTTPException, APIRouter
import requests
import stravaAPIManagement.generate_api_key

router = APIRouter()


@router.get("/cadence/{activity_id}")
async def get_cadence_stream(activity_id: int):
    access_token = stravaAPIManagement.generate_api_key.get_access_token()
    headers = {"Authorization": f"Bearer {access_token}"}

    url = f"https://www.strava.com/api/v3/activities/{activity_id}/streams"
    params = {
        "keys": "time, cadence",
        "key_by_type": True
    }

    response = requests.get(url, headers=headers, params=params)
    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail=response.json().get("message", "Error fetching "
                                                                                                "streams"))
    responsecadence_stream = response.json()
    time_stream = responsecadence_stream.get("time")
    cadence_stream = responsecadence_stream.get("cadence")

    if not cadence_stream:
        raise HTTPException(status_code=404, detail="No cadence stream found for the given activity")

    return {
        "time": time_stream["data"],
        "cadence": cadence_stream["data"],
    }


@router.get("/heartrate/{activity_id}")
async def get_heartrate_stream(activity_id: int):
    access_token = stravaAPIManagement.generate_api_key.get_access_token()
    headers = {"Authorization": f"Bearer {access_token}"}
    url = f"https://www.strava.com/api/v3/activities/{activity_id}/streams"

    params = {
        "keys": "time, heartrate",
        "key_by_type": True
    }

    response = requests.get(url, headers=headers, params=params)

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail=response.json().get("message", "Error fetching "
                                                                                                "streams"))
    responeStreams = response.json()
    time_stream = responeStreams.get("time")
    heartrate_stream = responeStreams.get("heartrate")

    if not heartrate_stream:
        raise HTTPException(status_code=404, detail="No heartrate stream found for the given activity")

    return {
        "time": time_stream["data"],
        "heartrate": heartrate_stream["data"],
    }


@router.get("/power/{activity_id}")
async def get_time_power_cadence_stream(activity_id: int):
    # Replace with your function to get a valid access token
    access_token = stravaAPIManagement.generate_api_key.get_access_token()
    headers = {"Authorization": f"Bearer {access_token}"}

    url = f"https://www.strava.com/api/v3/activities/{activity_id}/streams"
    params = {
        "keys": "time,watts",
        "key_by_type": True
    }

    response = requests.get(url, headers=headers, params=params)

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail=response.json().get("message", "Error fetching "
                                                                                                    "streams"))
    streams = response.json()

    if not streams:
        raise HTTPException(status_code=404, detail="No streams found for the given activity")

    time_stream = streams.get("time")
    power_stream = streams.get("watts")


    return {
        "time": time_stream["data"],
        "power": power_stream["data"],
    }
