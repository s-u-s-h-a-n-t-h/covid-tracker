const axios = require("axios");
const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;
  let provinceUrl = "";
  let provincesData = [];

  if (country) {
    console.log("Country: ", country);
    changeableUrl = `${url}/countries/${country}`;
    provinceUrl = `${changeableUrl}/confirmed`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths },
    } = await axios.get(changeableUrl);

    if (country) {
      const { data: proData } = await axios.get(provinceUrl);
      provincesData = proData.map(function (province) {
        return {
          provinceState: province.provinceState,
          confirmed: province.confirmed,
          recovered: province.recovered,
          active: province.active,
          deaths: province.deaths,
        };
      });
    }
    const countryData = {
      confirmed: confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
    };
    return { countryData, provincesData };
  } catch (error) {
    return error;
  }
};

export async function fetchCountries() {
  let {
    data: { countries },
  } = await axios.get(`${url}/countries`);
  countries = countries.map((country) => country.name);
  return countries;
}
