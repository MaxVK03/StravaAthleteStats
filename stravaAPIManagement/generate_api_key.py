import requests


def test_access_token():
    token = get_access_token()
    url = "https://www.strava.com/api/v3/athlete/activities"
    params = {"per_page": 1, "page": 1}
    response = requests.get(url, headers={"Authorization": f"Bearer {token}"}, params=params)
    print(response.json())
    return response


def get_access_token():
    payload = {
        "client_id": "138059",
        "client_secret": "202031e23fba233dcb02f279e131fdc390c24184",
        "refresh_token": "8bfa1781a1a18a42824d529e98639448c3ad194e",
        "grant_type": "refresh_token",
        "f": "json"
    }

    auth_url = "https://www.strava.com/oauth/token"
    response = requests.post(auth_url, data=payload, verify=False)

    if response.status_code == 200:
        access_token = response.json()["access_token"]
        print(f"Your new access token is: {access_token}")
        return access_token

    else:
        print(f"Error {response.status_code}: {response.json()['message']}")
        print("Details:", response.json().get("errors", "No additional error details provided"))


if __name__ == "__main__":
    test_access_token()