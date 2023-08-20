---
layout: post
title:  "The Cannonball Problem"
date:   2023-08-14 16:20:58 +0530
categories: mathematics
---
Sir Walter Raleigh, an English statesman and explorer, posed the cannonball problem to his mathematical assistant, Thomas Harriot (to whom the theory of refraction is attributed), during one of their expeditions to America. The problem goes like this - given how many cannonballs ran along the side of the bottom layer, how could the total number of cannonballs in the stack be figured out without having to count them individually. 

Let's take a crack at solving this. 

If base layer has k cannonballs, then total cannonballs in base layer is $k$*$k$=$k^2$
One layer up, and the number of cannonballs becomes $(k-1)$*$(k-1)$=$(k-1)^2$
And so on, until we reach the top layer which has just one cannonball.
Our final summation ends up looking like \(\sum_{k=1}^{k} n^2\)



