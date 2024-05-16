document.addEventListener('DOMContentLoaded', function() {
    const keys = document.querySelectorAll('.key');
  
    keys.forEach(key => {
      key.addEventListener('click', () => {
        const keyValue = key.textContent;
        console.log('You clicked:', keyValue);
        // You can perform any action you want with the clicked key value
      });
    });
  });
  
