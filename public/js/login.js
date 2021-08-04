const loginFunction = async function(e) {
    e.preventDefault();
  
    const username = document.querySelector('#username-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to login');
    }
  };
  
  document.querySelector('#loginBtn').addEventListener('click', loginFunction);