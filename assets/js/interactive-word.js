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
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Temporarily add popup to the document to measure its dimensions
      popup.style.visibility = 'hidden';
      document.body.appendChild(popup);
      
      // Calculate available width based on the post container
      const postContainer = word.closest('.post');
      const postRect = postContainer.getBoundingClientRect();
      const availableWidth = postRect.right - rect.left - scrollLeft - 20; // 20px for some padding
      popup.style.maxWidth = `${availableWidth}px`;

      // Adjust the left position only if the popup exceeds the post container width
      let adjustedLeft = rect.left + scrollLeft;
      const popupRect = popup.getBoundingClientRect();
      if (popupRect.right + scrollLeft > postRect.right) {
        adjustedLeft = postRect.right - popupRect.width - scrollLeft - 20; // Align right edges, minus padding
      }

      // Set the final left position
      popup.style.left = `${adjustedLeft}px`;
      popup.style.top = `${rect.bottom + scrollTop + 10}px`; // 10px space below the word

      // Make the popup visible
      popup.style.visibility = 'visible';

      // Attach a mouseleave event to the word to remove the popup
      word.addEventListener('mouseleave', function() {
        popup.remove();
      });
    });
  });
});