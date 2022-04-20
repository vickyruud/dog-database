const dogs = () => {
  fetch(`/getdogs`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

export default dogs;