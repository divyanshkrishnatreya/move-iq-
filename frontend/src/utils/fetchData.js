// Remove the redeclaration of exerciseOptions
export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "23603a4fb9mshf1ac4b067d4adcap1ab7f4jsn32c2a14f2499",
  },
};

export const fetchData = async (url, options, isYoutube = false) => {
  try {
    let res;
    if (isYoutube) {
      // YouTube-specific fetch logic
      res = await fetch(url);
    } else {
      // General fetch logic for exercise data
      res = await fetch(url, options);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
