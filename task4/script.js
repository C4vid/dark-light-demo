const toggleBtn = document.getElementById('toggleBtn');
const navbar = document.getElementById('header');

toggleBtn.addEventListener('click', function() {
  navbar.classList.toggle('darklight');
});
