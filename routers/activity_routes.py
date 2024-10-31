from fastapi import APIRouter
import requests
import stravaAPIManagement.generate_api_key

router = APIRouter()


@router.get("/recent_activity")
async def get_recent_activity():
    url = "https://www.strava.com/api/v3/athlete/activities"
    params = {"per_page": 1, "page": 1}
    access_token = stravaAPIManagement.generate_api_key.get_access_token()

    response = requests.get(url, headers={"Authorization": f"Bearer {access_token}"}, params=params)

    if response.status_code == 200:
        latest_activity = response.json()[0]
        return latest_activity
    else:
        return {"error": response.json()["message"]}
