async function favoriteClickHandler(event) {
   event.preventDefault();
 
   const id = window.location.toString().split('/')[
     window.location.toString().split('/').length - 1
   ];
   const response = await fetch('/api/beverages/favorite', {
     method: 'PUT',
     body: JSON.stringify({
       beverage_id: id
     }),
     headers: {
       'Content-Type': 'application/json'
     }
   });
 
   if (response.ok) {
     document.location.reload();
   } else {
     alert(response.statusText);
   }
 }
 
 document.querySelector('.favorite-btn').addEventListener('click', favoriteClickHandler);