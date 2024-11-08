# StravaAthleteStats

An app to further analyse athlete data pulled from strava specifically built for cyclist data junkies.

Current projects are 
Calculate the **heart rate drift**, we only care about data from when you have been in zone 2 for at least 10 minutes Zone 2 is between 60-70% of your max heart rate which in my case is between 130-150 bpm, We can then see if your heart rate drifts up for the same power over time. This could be an indication of fatigue or dehydration. To keep the program effecient, we use a windowed or moving average to calculate the averages and then compare the averages.
