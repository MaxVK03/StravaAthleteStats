import requests
from stravaAPIManagement import generate_api_key


def single_actvitity_service():
    url = "https://www.strava.com/api/v3/athlete/activities"
    params = {"per_page": 1, "page": 1}
    access_token = generate_api_key.get_access_token()

    response = requests.get(url, headers={"Authorization": f"Bearer {access_token}"}, params=params)
    return response
