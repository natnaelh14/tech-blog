const loginFunction = async function(e) {
    e.preventDefault();
  
    const username = document.querySelector('#username-input');
    const password = document.querySelector('#password-input');
  
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to login');
    }
  };
  
  document.querySelector('#loginBtn').addEventListener('click', loginFunction);