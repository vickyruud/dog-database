const dogs = () => {
  fetch(`https://thedogapi.com/v1/images?api_key=${process.env.REACT_APP_API_KEY}`, {mode:'cors'})
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.error(error));
}

export default dogs;