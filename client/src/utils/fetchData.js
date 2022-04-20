/*
 * Returns a promise for fetching dogs
 */
export const dogs = () => {
  return fetch("/getdogs").then((res) => {
    return res.json();
  })
    .then(data => {
      return data
  })
  
};

/*
 * url - The url of the character to be fetched
 *
 * Returns a promise for the fetching of a character
 */

