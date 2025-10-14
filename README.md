# StravaAthleteStats

An app to further analyse athlete data pulled from strava specifically built for cyclist data junkies. Ultimatley shelved due to discovery of Intervals.icu

Current projects are 
## Heart rate drift
Calculate the **heart rate drift**, we only care about data from when you have been in zone 2 for at least 10 minutes Zone 2 is between 60-70% of your max heart rate which in my case is between 130-150 bpm, We can then see if your heart rate drifts up for the same power over time. This could be an indication of fatigue or dehydration. To keep the program effecient, we use a windowed or moving average to calculate the averages and then compare the averages.

## Better zoned power analysis
Built a graph anaylser to better isolate intervals of power output so that they can be more accuratley analysed with the ultimate goal being to have complete independence with how you look at your power.
