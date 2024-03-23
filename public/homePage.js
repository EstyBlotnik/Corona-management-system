document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('.login-btn');
  
    loginBtn.addEventListener('click', async (event) => {
        const endpoint = `/login`;
        fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(response => response.json())
          .catch(err => console.log(err));
        // Assuming the response is HTML content, you can replace the current page content with the login page
        const loginPage = await response.text();
        document.body.innerHTML = loginPage;
      
    });
  });
  