function searchDog() {
  const breed = document.getElementById('breedInput').value.trim().toLowerCase();
  const resultDiv = document.getElementById('result');
  if (!breed) {
    resultDiv.innerHTML = '<p>Please enter a breed.</p>';
    return;
  }
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(res => res.json())
    .then(data => {
      if (data.status === "success") {
        resultDiv.innerHTML = `<iframe src="${data.message}" title="${breed}" style="width:100%;height:400px;border-radius:8px;" allowfullscreen></iframe>`;
      } else {
        resultDiv.innerHTML = `<p>Breed not found. Try another.</p>`;
      }
    })
    .catch(() => {
      resultDiv.innerHTML = `<p>Error fetching image.</p>`;
    });
}