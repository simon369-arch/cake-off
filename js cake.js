const BASEURL = "http://localhost:3000";

function fetchFirstCake() {
  fetch(`${BASEURL}/cakes/1`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      document.getElementById('cake-name').textContent = data.name;
      document.getElementById('cake-image').src = data.image_url;
      document.getElementById('cake-description').textContent = data.description;
    })
    .catch(error => console.error('Fetch error:', error));
}

document.getElementById('review-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const reviewText = document.getElementById('review').value;
  if (reviewText.trim()) {
    const reviewList = document.getElementById('review-list');
    const newReview = document.createElement('li');
    newReview.textContent = reviewText;
    reviewList.appendChild(newReview);
    document.getElementById('review').value = '';
  }
});

document.addEventListener("DOMContentLoaded", fetchFirstCake);
