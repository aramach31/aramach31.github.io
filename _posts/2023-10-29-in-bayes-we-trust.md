---
layout: post
title:  "In Bayes, We Trust"
date:   2023-10-26 16:20:58 +0530
categories: jekyll update
---

[comment]: <> (To be included)
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

[comment]: <> (To be included)
<link rel="stylesheet" type="text/css" href="/assets/css/interactive-word.css">
<link rel="stylesheet" type="text/css" href="/assets/css/table.css">

[comment]: <> (To be included)
<script src="/assets/js/interactive-word.js"></script>

Some time ago, I decided to get my Vitamin B12 levels and <span class="interactive-word" data-explanation="Thyroid function tests typically include thyroid hormones such as thyroid-stimulating hormone (TSH, thyrotropin), thyroxine (T4), and triiodothyronine (T3)">Thyroid functions</span> tested on a whim. Thankfully, no red flags were raised in the reports. But it got me thinking. One of the first few examples we encounter in an undergrad Probability and Statistics course has to do with an untrustworthy medical test. Provided some information (which we'll shortly cover), we have to plug values into the formidable-looking Bayes' formula to get an answer that should make us doubt a lot of what we assume as de facto truth.

Why not apply it here and see if it yields fruit? Disclaimer: I'm more interested in practically applying Bayes' theorem to get a feel for it, rather than being right about my numbers. Always, always seek professional advice when in doubt.

### Setting the stage

Alright, Bayes' formula, here we come. Following content assumes a basic understanding of proability and related notations.

#### Why is this formula as useful as people say it is?

Oftentimes we might know *P(State of the world B | Observation A)*, but what we really want to know is 
*P(Observation A | State of the world B)*
**(Tricky!)**

Let's take a real life example. 

Say you want to detect spam mail. You've lately been concerned with how casually Nigerian princes and Swiss bankers use "Dear" in their correspondence. You intuit that there is likely some correlation between emails containing the word "Dear" and the email being spam. How do you put a number to that?

One way is to go through our spam-box, search for the word "Dear" and count those mails to arrive at an estimate. We know that:

$$P(E|F) = \frac{P(E \cap F)}{P(F)}$$

where E = Mail contains the word 'Dear'; F = Mail is marked as spam

To get $$P(E \cap F)$$, you'd count the number of emails in your spam box that start with "Dear" and divide that by the total number of emails you have. This gives you the probability of both events happening simultaneously.

$$P(F)$$ is even simpler; it's just the proportion of emails that are in your spam box out of all emails (we have data from a few [sources](https://www.statista.com/statistics/420391/spam-email-traffic-share/) to help inform this).

Great! After going through this gauntlet, as a not-so-helpful reminder, we want to find $$P(F \vert E)$$ for the sake of posterity. My spam filter works only as long as it's able to predict whether it has a good estimate of how likely incoming mail is spam conditional to the mail containing the word "Dear". Is there a way to calculate $$P(F \vert E)$$ from $$P(E \vert F)$$? 

Enter Bayes! With some additional information, we can indeed figure out what $$P(F \vert E)$$ is given $$P(E \vert F)$$.

#### The formula, in all it's glory

$$
P(F \vert E) = \frac{P(E \vert F)*P(F)}{P(E \vert F)*P(F) + P(E \vert F^{c})*P(F^{c})}
$$

### Vitamin B12

<table>
  <thead>
    <tr>
      <th>Test Name</th>
      <th>Result</th>
      <th>Bio. Ref. Interval</th>
      <th>Method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Vitamin B12</td>
      <td>410.0 pg/mL</td>
      <td>187-833</td>
      <td>CMIA</td>
    </tr>
  </tbody>
</table>

My immediate though following the result is should I even be concerned, given everything looks hunky dory. Can I find out $$P(E \vert F)$$, where E is the event that I actually am deficient in Vitamin B12, and F is the event that the test said I'm okay to go? If this is suspiciously high, then I might be questioning a few decisions in life.

Let's frame the problem.

1. Prior Probability, $$P(E)$$: This is your initial estimate for the probability of being deficient in Vitamin B12 before taking the test. Research<sup>[1](https://onlinelibrary.wiley.com/doi/10.1111/jhn.12541),[2](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6540890/#:~:text=Conclusion%3A,is%20widespread%20in%20Indian%20population)</sup> suggests this could range anywhere from 44% to 47%. Let's take the midpoint and say its 45.5%.

2. $$P(F \vert E)$$: This is the probability that the test gives a "false negative," meaning it says you're okay when you're actually deficient. This paper suggests 36%, although I think it's quite low.

3. $$P(F \vert E^{c})$$: This is the probability that the test gives a "true negative", meaning it says you're okay when in reality you actually are. The same paper linked above suggests 64%.

\begin{equation}
P(E \vert F) = \frac{P(F \vert E)* P(E)}{P(F)}   ....(1)
\end{equation}

Using the law of total probability,

$$
\begin{align}
P(F) & = P(F \vert E)*P(E) + P(F \vert E^{c})*P(E^{c}) \\
     & = 0.36*0.455 + 0.64*(1-0.455) \\
     & = 0.513
\end{align}
$$

Replacing in (i),
$$
P(E \vert F) = \frac{0.36*0.455}{0.513} = 0.320
$$

Quite high, isn't it? Out of every 3 tests I take, 1 will point me in the wrong direction. High prevalence of Vitamin B12 deficiency in Asia combined with low sensitivity and low specificity of the tests isn't the best combo. Besides I follow a strictly vegetarian diet (Vitamin B12 is derived from animal origin food). 

There seems to be limited risk (could be due to lack of research) in exceeding normal B12 levels, so supplements shouldn't be a problem.

### Disclaimers

1. This exercise is not meant to be a thorough deep dive into the nitty gritties of the deficiency and requisite tests. It's an avenue to play around with Bayes' theorem to develop intuition on how it works.
2. When in doubt, seek professional medical help. 
3. Main motivation for me to write this post was to develop intuition towards why Bayes' theorem is applied. When I first came across the theorem 5 years ago, I (regrettably) blindly plugged in values to get the final answer. While exam questions prompted me to find $$P(A \vert B)$$ for some disease/test duo, I never fully understood why I can't just count my way to determining a value. All of this seemed laborious at the time. Over the years, with the help of excellent teachers and resources, this has become more and more clear to me, and I attempt to motivate this post starting off with the spam email example.

<!--
<table>
  <thead>
    <tr>
      <th>Thyroid Profile</th>
      <th>Result</th>
      <th>Bio. Ref. Interval</th>
      <th>Method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>T3, Total</td>
      <td>0.91 ng/mL</td>
      <td>0.35-1.93</td>
      <td>CMIA</td>
    </tr>
    <tr>
      <td>T4, Total</td>
      <td>8.5 \( \mu \)g/dL </td>
      <td>4.87-11.72</td>
      <td>CMIA</td>
    </tr>
    <tr>
      <td>Thyroid Stimulating Hormone - Ultra Sensitive</td>
      <td>1.357 \( \mu \)IU/mL</td>
      <td>0.35-4.94</td>
      <td>CMIA</td>
    </tr>
  </tbody>
</table>
-->











