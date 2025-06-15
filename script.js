document.addEventListener('DOMContentLoaded', () => {
  // Current year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Reveal fade‑in elements
  document.querySelectorAll('.fade-in').forEach(el => {
     setTimeout(() => el.classList.add('visible'), 100);
  });
});

// Quick “save” for greeting demo (no backend needed)
function sendGreeting(){
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !message){
     alert('Please fill in both fields 😄');
     return;
  }
  alert(`Thanks, ${name}! Your message for Dad was saved:\n"${message}"`);
  document.getElementById('greetForm').reset();
}