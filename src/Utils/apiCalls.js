const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=i7VC0jDS5LOoTBqSVLELbepXUTJqY77xUTn0fg9O'
const get30Images = '&count=30'

export const fetchNASAData = async () => {
    let url = `${baseURL}${get30Images}`;
    let response = await fetch(url);
    let data = await checkForErrors(response);
    return data;
  };


  
export const checkForErrors = response => {
    if (response.status === 404) {
      throw new Error('Oops, something went wrong. Please check back later.');
    } else if (response.status === 500) {
      throw new Error(
        "Our servers seem to be down, please check back later!"
      );
    } else if (response.ok) {
      return response.json();
    } else {
      throw new Error('Oops, something went wrong. Please try again!');
    }
  };

