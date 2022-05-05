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

