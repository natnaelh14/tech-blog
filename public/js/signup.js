const registerFunction = async function(event) {
    event.preventDefault();

    const username = document.querySelector('#username-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();
  
    const response = await fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Unable to sign up');
    }
  };
  
  document.querySelector('#registerBtn').addEventListener('submit', registerFunction);

