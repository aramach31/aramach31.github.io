---
layout: post
title:  "Atlassian acquires Loom"
date:   2023-10-26 16:20:58 +0530
categories: jekyll update
---

A couple of weeks ago we heard that Atlassian is acquiring Loom for $975M<sup>[1](https://techcrunch.com/2023/10/12/atlassian-to-acquire-former-unicorn-loom-for-975m/)</sup> (no $1B jokes here). Is that a good exit?

There are a few reports with exit multiples flying around, but I wanted to walk through the math myself and build an understanding of what a sale means for stakeholders.

## Funding Timeline

<div style="position: relative; display: flex; flex-direction: column; align-items: center;">
  <!-- Vertical Line -->
  <div style="position: absolute; top: 0; bottom: 0; left: 50%; width: 2px; background-color: darkgrey;"></div>

  <!-- Milestone A -->
  <div style="display: flex; align-items: center; margin: 20px;">
    <div style="text-align: right; margin-right: 300px;">
      <strong>Early 2016: Series Seed 2 <span class="interactive-word" data-explanation="Explanation for Preferred">Preferred</span></strong><br>
      $0.15/sh, $622K<br>
      Best guess: Friends & Fam, Angels
    </div>
    <div style="width: 20px; height: 20px; background-color: darkgrey; border-radius: 50%; color: white; text-align: center; line-height: 20px; position: absolute; left: 50%; margin-left: -10px;">
      A
    </div>
  </div>

  <!-- Milestone B -->
  <div style="display: flex; align-items: center; margin: 20px;">
    <div style="width: 20px; height: 20px; background-color: darkgrey; border-radius: 50%; color: white; text-align: center; line-height: 20px; position: absolute; left: 50%; margin-left: -10px;">
      B
    </div>
    <div style="text-align: left; margin-left: 300px;">
      <strong>Oct 2016: Series Seed 1 Preferred</strong><br>
      $0.37/sh, $3.1M<br>
      First VC $$ from 1517 Fund
    </div>
  </div>

  <!-- Milestone C -->
  <div style="display: flex; align-items: center; margin: 20px;">
    <div style="width: 20px; height: 20px; background-color: darkgrey; border-radius: 50%; color: white; text-align: center; line-height: 20px; position: absolute; left: 50%; margin-left: -10px;">
      C
    </div>
    <div style="text-align: right; margin-right: 370px;">
      <strong>Nov 2018: Series A Preferred</strong><br>
      $0.74/sh, $11M<br>
      Showtime! Ilya Fushman at Kleiner Perkins leads the round and takes a Board Seat
    </div>
  </div>
  
  <!-- Milestone D -->
  <div style="display: flex; align-items: center; margin: 20px;">
    <div style="width: 20px; height: 20px; background-color: darkgrey; border-radius: 50%; color: white; text-align: center; line-height: 20px; position: absolute; left: 50%; margin-left: -10px;">
      D
    </div>
    <div style="text-align: left; margin-left: 375px;">
      <strong>Oct 2019: Series B Preferred</strong><br>
      $2.08/sh, $28M<br>
      Andrew Reed at Sequoia Capital leads the round and takes a Board Seat<br>
    </div>
  </div>

  <!-- Milestone E -->
  <div style="display: flex; align-items: center; margin: 20px;">
    <div style="width: 20px; height: 20px; background-color: darkgrey; border-radius: 50%; color: white; text-align: center; line-height: 20px; position: absolute; left: 50%; margin-left: -10px;">
      E
    </div>
    <div style="text-align: right; margin-right: 370px;">
      <strong>May 2020: Series B+ Preferred</strong><br>
      $3.94/sh, $23.5M<br>
      2x price increase, 2 months into COVID? Makes sense given the movement to remote work
    </div>
  </div>

  <!-- Milestone F -->
  <div style="display: flex; align-items: center; margin: 20px;">
    <div style="width: 20px; height: 20px; background-color: darkgrey; border-radius: 50%; color: white; text-align: center; line-height: 20px; position: absolute; left: 50%; margin-left: -10px;">
      F
    </div>
    <div style="text-align: left; margin-left: 375px;">
      <strong>May 2021: Series C Preferred</strong><br>
      $16.19/sh, $130M<br>
      ZIRP time! Andreessen Horowitz comes in with a major valuation step-up (to $1.5B)<br>a16z does *not* get a board seat<br>
    </div>
  </div>

   <!-- Milestone G -->
  <div style="display: flex; align-items: center; margin: 20px;">
    <div style="width: 20px; height: 20px; background-color: darkgrey; border-radius: 50%; color: white; text-align: center; line-height: 20px; position: absolute; left: 50%; margin-left: -10px;">
      G
    </div>
    <div style="text-align: right; margin-right: 245px;">
      <strong>Oct 2023: Sale to Atlassian!</strong><br>
      $975M<br>
    </div>
  </div>
</div>


## Cap Table

![Cap Table]({{ site.url }}/
<figure>
  <figcaption style="color: lightgray; font-style: italic;">
    <center>
    Cap Table, from CBInsights
    </center
  </figcaption>
</figure>

#### What do some of these terms mean?

1. Par Value
2. Dividend Rate
3. Issuance Price
4. Liquidation Price
5. Liquidation Multiple
6. Conversion Price



As far as I know, this data is available on paid sources like Crunchbase, Pitchbook etc.

EquityZen assumes

## Questions

1. What is this "Preferred" we're seeing appended to each round?
  - 

This is a paragraph with an <span class="interactive-word" data-explanation="Basic">interactive word</span> in it.

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

<!--|Allotment   |# of shares  |% share|
|:----------:|:-----------:|:-:|
|Common Stock|~45M shares  |45%|
|Seed 1      |4.3M shares  |4% |
|Seed 2      |8.4M shares  |8% |
|Series A    |14.4M shares |15%|
|Series B    |13.5M shares |14%|
|Series B+   |5.9M shares  |6% |
|Series C    |8M shares    |8% |










