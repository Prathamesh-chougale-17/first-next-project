import React from "react";
import { fetchWeatherApi } from "openmeteo";

const Weather = async () => {
  const params = {
    latitude: 52.52,
    longitude: 13.41,
    start_date: "1950-01-01",
    end_date: "2050-12-31",
    models: [
      "CMCC_CM2_VHR4",
      "FGOALS_f3_H",
      "HiRAM_SIT_HR",
      "MRI_AGCM3_2_S",
      "EC_Earth3P_HR",
      "MPI_ESM1_2_XR",
      "NICAM16_8S",
    ],
    daily: "temperature_2m_max",
  };
  const url = "https://climate-api.open-meteo.com/v1/climate";
  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const latitude = response.latitude();
  const longitude = response.longitude();

  const daily = response.daily()!;
  const weatherData = {
    daily: {
      time: range(
        Number(daily.time()),
        Number(daily.timeEnd()),
        daily.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2mMax: daily.variables(0)!.valuesArray()!,
    },
  };
  // for (let i = 0; i < weatherData.daily.time.length; i++) {
  //   console.log(
  //     weatherData.daily.time[i].toISOString(),
  //     weatherData.daily.temperature2mMax[i]
  //   );
  // }

  return (
    <main>
      {weatherData.daily.time.map((t, i) => (
        <div key={i}>
          {t.toISOString()} {weatherData.daily.temperature2mMax[i]}
        </div>
      ))}
    </main>
  );
};

export default Weather;
