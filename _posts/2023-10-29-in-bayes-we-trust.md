---
layout: post
title:  "In Bayes, We Trust"
date:   2023-10-26 16:20:58 +0530
categories: jekyll update
---

<style>
.interactive-word {
  position: relative;
  cursor: pointer;
  color: lightblue;
  padding: 1px 2px;  /* Adjust as needed */
  text-align: center;
}

.interactive-word:hover {
  border-radius: 15px;
  background-color: lightblue;
  color: white;
  text-align: center;
}

.interactive-word:hover:after {
  content: "i";
  position: absolute;
  right: -15px;  /* Adjust as needed */
  top: 50%;
  transform: translateY(-50%);
  background-color: lightblue;
  color: white;
  border-radius: 50%;
  width: 15px;  /* Smaller circle */
  height: 15px;  /* Smaller circle */
  line-height: 15px;  /* Center "i" vertically */
  text-align: center;  /* Center "i" horizontally */
}

.popup {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 1000;
}
</style>

<script>
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
      
      // Position the popup
      const rect = event.target.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      popup.style.left = (rect.left + scrollLeft) + 'px';
      popup.style.top = (rect.bottom + scrollTop + 10) + 'px'; 
      
      // Style the popup to be translucent
      popup.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      
      // Add the popup to the document
      document.body.appendChild(popup);

      // Attach a mouseleave event to the word to remove the popup
      word.addEventListener('mouseleave', function() {
        popup.remove();
      });
    });
  });
});
</script>

Some time ago, I decided to get my Vitamin B12 levels and <span class="interactive-word" data-explanation="Thyroid function tests typically include thyroid hormones such as thyroid-stimulating hormone (TSH, thyrotropin), thyroxine (T4), and triiodothyronine (T3)">Thyroid functions</span> tested on a whim. Thankfully, no red flags were raised in the reports. But it got me thinking. One of the first few examples we encounter in an undergrad Probability and Statistics course has to do with an untrustworthy medical test. Provided some information (which we'll shortly cover), we have to plug values into the formidable-looking Bayes' formula to get an answer that should make us doubt a lot of what we assume as de facto truth.

Why not apply it here and see if it yields fruit? Disclaimer: I'm more interested in practically applying Bayes' theorem to get a feel for it, rather than being right about my numbers. Always, always seek professional advice when in doubt.

### Setting the stage

Alright, Bayes' formula, here we come. Following content assumes a basic understanding of proability and related notations.

#### Why is Bayes so cool?

Oftentimes we might know $P(State\ of\ the\ world\ B\ |  Observation\ A)$, but what we really want to know is 
$P(Observation\ A\ | State\ of\ the\ world\ B)$
**(Tricky!)**

Let's take a real life example. 

Say you want to detect spam mail. You've lately been concerned with how casually Nigerian princes and Swiss bankers use "Dear" in their correspondence. You intuit that there is likely some correlation between emails containing the word "Dear" and the email being spam. How do you put a number to that?

One way is to go through our spam-box, search for the word "Dear" and count those mails to arrive at an estimate.

$$P(Mail\ starts\ with\ "Dear" | Mail\ in\ spam-box) = {P(Mail starts with "Dear" \cap Mail in spam-box)} \over {P(Mail in spam-box)}$$



### Vitamin B12











