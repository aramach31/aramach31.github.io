---
layout: post
title:  "In Bayes, We Trust"
date:   2023-10-26 16:20:58 +0530
categories: jekyll update
---
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

<link rel="stylesheet" type="text/css" href="/assets/css/interactive-word.css">

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

P(F) is even simpler; it's just the proportion of emails that are in your spam box out of all emails (we have data from a few [sources](https://www.statista.com/statistics/420391/spam-email-traffic-share/) to help inform this).

Great! After going through this gauntlet, as a not-so-helpful reminder, we want to find $P(F|E)$ for the sake of posterity. My spam filter works only as long as it's able to predict whether it has a good estimate of how likely incoming mail is spam conditional to the mail containing the word "Dear". Is there a way to calculate $$P(F|E)$ from $$P(E|F)$$? 

Enter Bayes! With some additional information, we can indeed figure out what $$P(F|E)$$ is given $$P(E|F)$$.

#### The formula, in all it's glory

$$
P(F|E) = \frac{P(E|F)*P(F)}{P(E|F)*P(F) + P(E|F^{c})*P(F^{c})}
$$




### Vitamin B12











