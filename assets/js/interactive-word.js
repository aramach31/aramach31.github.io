document.addEventListener("DOMContentLoaded", function() {
    const interactiveWords = document.querySelectorAll('.interactive-word');
  
    interactiveWords.forEach((word) => {
      word.addEventListener('mouseenter', function(event) {
        // Check if a popup is already open
        const existingPopup = document.querySelector('.popup');
        if (existingPopup) {
          existingPopup.remove();
        }
  
        // Create the popup
        const popup = document.createElement('div');
        popup.classList.add('popup');
        
        // Get explanation from data-explanation attribute
        const explanation = event.target.getAttribute('data-explanation');
        popup.textContent = explanation;
  
        // Initial positioning
        const rect = event.target.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        popup.style.left = (rect.left + scrollLeft) + 'px';
        popup.style.top = (rect.bottom + scrollTop + 10) + 'px';
        
        // Temporarily add popup to the document to measure its dimensions
        popup.style.visibility = 'hidden';
        document.body.appendChild(popup);
        
        // Check if the popup goes beyond the right edge of the viewport
        const popupRect = popup.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        if (popupRect.right > viewportWidth) {
          popup.style.left = (viewportWidth - popupRect.width - 10) + 'px';  // 10px padding
        }
  
        // Make the popup visible
        popup.style.visibility = 'visible';
  
        // Attach a mouseleave event to the word to remove the popup
        word.addEventListener('mouseleave', function() {
          popup.remove();
        });
      });
    });
  });