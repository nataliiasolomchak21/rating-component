const submitBtn = document.getElementById('submit-btn');
const container = document.querySelector('.thank-you');
const userRating = document.getElementById('user-rating');
const ratingNums = document.querySelectorAll('.num');

// Add event listener to each .num element
ratingNums.forEach(num => {
  num.addEventListener("click", function() {
    // Remove 'active' class from all nums
    ratingNums.forEach(num => num.classList.remove('active'));
    // Add 'active' class to the clicked num
    num.classList.add('active');

    // Check if any num is selected
    const selectedNum = document.querySelector('.num.active');
    // Toggle the 'disabled' class of the submit button based on whether a rating is selected
    submitBtn.classList.toggle('disabled', !selectedNum);
  });
});

submitBtn.addEventListener("click", function() {
  // Find the selected num
  const selectedNum = document.querySelector('.num.active');
  
  // If a rating is selected
  if (selectedNum) {
    container.classList.add('active');
    // Set userRating text to the selected num's text content
    userRating.textContent = selectedNum.textContent;
  } else {
    // If no rating is selected, display a message and hide the container
    userRating.innerText = 'Give a rating please';
    container.classList.remove('active');
  }
});
