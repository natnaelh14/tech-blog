const registerFunction = async function(event) {
    event.preventDefault();
    
    const firstName = document.querySelector('#firstname-input').value.trim();
    const lastName = document.querySelector('#lastname-input').value.trim();
    const username = document.querySelector('#username-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();
    
    if (firstName && lastName && username && password) {
    const response = await fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({firstName, lastName, username, password}),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Unable to sign up');
    }
  } else {
    alert('Unable to sign up');
  }
}
  
  document.querySelector('#registerBtn').addEventListener('click', registerFunction);

