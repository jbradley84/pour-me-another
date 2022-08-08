async function newBeverageHandler(event) {
   event.preventDefault();

   const beverage_name = document.querySelector('input[name="beverage-name"]').value;
   const beverage_type = document.querySelector('input[name="beverage-type"]').value;

   const response = await fetch(`/api/beverage`, {
      method: 'POST',
      body: JSON.stringify({
         beverage_name,
         beverage_type
      }),
      headers: {
         'Content-Type': 'application/json'
      }
   });

   if (response.ok) {
      document.location.replace('/mybar');
   } else {
      alert(response.statusText);
   }
}

document.querySelector('.new-beverage-form').addEventListener('submit', newBeverageHandler);