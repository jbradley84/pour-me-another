function signupFormHandler(event) {
   event.preventDefault();

   const username = document.querySelector('#username-signup').value.trim();
   const email = document.querySelector('#email-signup').value.trim();
   const password = document.querySelector('#password-signup').value.trim();

   //posting the info from our signup form to our server
   if (username && email && password) {
       fetch('api/user', {
           method: 'POST',
           body: JSON.stringify({
               username,
               email,
               password
           }),
           headers: { 'Content-Type': 'application/json' }
       }).then((response) => {
           if (response.ok) {
               document.location.replace('/mybar')
               console.log(response)
           }
       })
   }
}



document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);