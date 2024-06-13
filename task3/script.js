const toggleBtn = document.getElementById('toggleBtn');
const toggleDiv = document.getElementById('toggleDiv');

toggleBtn.addEventListener('click', function() {
  toggleDiv.classList.toggle('show');
});