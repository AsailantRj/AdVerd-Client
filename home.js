document.addEventListener('DOMContentLoaded', () => {
  const authToken = localStorage.getItem('authToken');


  document.querySelectorAll('.protected').forEach(link => {
    link.addEventListener('click', (event) => {
      if (!authToken) {
        event.preventDefault();
        alert('You need to log in to access this page');
        window.location.href = 'index.html'; 
      }
    });
  });


  document.querySelectorAll('nav a').forEach(link => {
    if (link.textContent === 'Logout') { 
      link.addEventListener('click', () => {
        localStorage.removeItem('authToken');
        window.location.href = 'index.html'; 
      });
    }
  });
});
