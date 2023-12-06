---
layout: post
title:  "On the 3 nm Process"
date:   2023-11-13 16:20:58 +0530
categories: jekyll update
---

[comment]: <> (To be included)
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

[comment]: <> (To be included)
<link rel="stylesheet" type="text/css" href="/assets/css/interactive-word.css">
<link rel="stylesheet" type="text/css" href="/assets/css/table.css">
<link rel="stylesheet" type="text/css" href="/assets/css/image-carousel.css">

[comment]: <> (To be included)
<script src="/assets/js/interactive-word.js"></script>
<script src="/assets/js/image-carousel.js"></script>

Inspired by Quantian's excellent post on portfolio update

SoftBank's investment in WeWork

Prior odds - return

Assuming you hope for a 10x exit.

![Distribution of U.S. venture outcomes](/assets/images/2023-11-27-on-startups-and-the-kelly-criterion/distribution-venture-outcomes.png)

You have about 5% chance of winning big.

Before the larger than life personality that Neumann is entered Son's life, this would be your "prior" odds, according to the market.

Neumann's spiel on how WeWork can contribute to increased happiness (a central tenet of SoftBank's investing strategy) enamours Son to the point of him believing that WeWork has a 10% chance of working out. 

You want to be Kelly optimal. So you look at your fund size, say $W^o$. For every dollar, you expect 10 dollars to be paid out, with a probability $p$, setting the probability of the investment crashing and burning to $1-p$. $w$ is the fraction of the fund size, which you want to optimize for.

Maximizing wealth, when a bet's payoff is X with a probability $p$, is trivial. 

$
W_{final}(f) = (f*W)*X*p + (1-f)*W
$

What should I set f to realize maximum wealth gains from making the bet?

$
W_{final}'(f) = W*X*p - W = 
$

$
w^* = \max_w E[\log W^o] =\max_w (p \log( wX + (1-w)) + (1-p)\log(1-w))
$



giving 

$
w^* = \frac{pX-1}{X-1}\
$

Placing the values in, (p=0.1, X=10)

$
w^* = 0
$

Makes sense. Risk/reward is factored appropriately, as p=1/X. What happens when p>1/X, say 0.2

$
w^* = 2/9 = 0.22
$

THe SoftBank Vision Fund was about USD 100 bn. From which they invested USD 4.4 bn, so assuming target multiple remains the same, Son's $p$ estimate was much lower at [TODO]

$
Bayes Factor (BF) = \exp(\lambda(0.1) - \lambda(0.05)) = 2.111...
$

New information comes in 

	The $1.75bn deal led by Goldman in 2019, as well as SoftBank’s decision to pump roughly $3.7bn into the company through debt and equity, helped allay fears that WeWork would immediately go out of business at the start of the decade.

The company was valued at $9 billion earlier this year, a sharp drop from the $47 billion valuation from SoftBank Group in 2019

Success outcome is 47/9*10 = 50x

Using a (very) simplistic model, revised probability of WeWork per market is now (9/47)*=19.1%

Since the market thought the likeliness of WeWork succeeding earlier was 5%, new $p$ is =19.1%*5% = ~1%

But you're Son. You still believe in Neumann. You still believe in unicorns. So your Bayes factor is still at 2.111...

New posterior odds = new prior odds + bayes factor

$
New posterior odds = \exp(\lambda(0.01) + \log(2.111..)) = 0.021
log(new posterior odds) = -3.863
$

$
New posterior probability = \sigma(-3.863) = 0.02 
$

So you've revised your probability down to 2%.





Consider a pre-phase 1 biotech currently trading at a $500 million market cap. The sell-side reports (which are surely objective and correct and not at all currying favor for the inevitable future offering) suggest a terminal value of $10 billion in the event it succeeds in its eventual phase 3 trial, so we will assume that if this occurs your investment will pay off 20:1. In the event it fails somewhere along the way, executives will steal all your money and you will baghold the stock to 0 and lose your entire investment smartly generate a tax loss from a worthless security.

Because you are very clever, you spend your time reading all the relevant scientific literature (and spend your investor’s money on expert network calls to various doctors and PhDs), and you conclude that the drug mechanism seems much more plausible than the market thinks- in fact, you believe there’s a 10% chance that it passes all the trials and your bet pays off. The Kelly optimal payoff is easy to calculate in this case: (0.1*20-1)/(20 - 1) = 1/19, so you should put about 5.2% of your portfolio into this long-shot bet, since the odds are in your favor and the payoff is so substantial.2

At this point, I’d like to take a brief detour into Bayesian statistics (it will be brief, I promise). You have probably seen Bayes’ theorem before, written something like this:

 
\(P(O|E) = \frac{P(E|O)P(O) }{P(E)}\)
We won’t be using this formula, because I hate it for reasons of aesthetic crankery. Instead, we will use a slightly different formula we get by rearranging terms:

\(\log(PosteriorOdds) = \log(PriorOdds) + \log(BayesFactor)\)
The Bayes Factor term is a ratio of the likelihoods of the evidence, and so gives a way to evaluate the “strength” of the information we have available to us: the higher it is, the more we shift our posterior odds away from the prior odds, and vice versa. For example, say I flipped a count 10 times. Your prior odds, assuming the coin is fair, would be 1: it’s equally likely to be heads or tails. If I got 10 heads on my flips, you might suspect that I actually had a coin with two heads, and the bayes factor would be the ratio of the probability I got 10 heads with a fair coin (p = 2^-10) vs. 10 heads with a coin that only came up heads (p = 1). Thus, your posterior probability that the coin is fair would be about 0.0975%, and you would be quite confident I used a two-headed coin and quite disinclined to bet tails would appear on the next flip.

Importantly, the transformation we have done into log odds space means that the impact of the same amount of evidence gets the correct nonlinear adjustment across the entire probability space: if we initially have a 1% chance or a 50% or a 99% chance of an event occurring, an extra bit of evidence that event will occur will correctly take us to 2% or 66% or 99.5%, in a way that dealing with raw probabilities won’t.

In our example above, the “prior odds” are given by the market: 5%, and our posterior odds by our own back of the envelope vibes, so we can work backwards to calculate the effective Bayes Factor of our beliefs as follows:

 
 
 
\(BayesFactor = \exp( \log \frac{0.1}{0.9} - \log \frac{0.5}{0.95}) = \frac{19}{9} = 2.111...\)
At this point, let’s introduce some standard notation to make our lives easier. The logit function transforms probabilities to log odds, and the logistic function turns log odds into probabilities. They’re defined as follows:

 
 
\(x = \lambda(p) = \log \frac{p}{1-p}; \; \; \;p = \sigma(x) = \frac{1}{1+e^{-x}}\)
We could just have easily written the above expression as:

\(\lambda(0.1) = \lambda(0.05) + \log(19/9)\)
and that’s how we’ll be writing things going forward. Alright, that’s enough of that, let’s return back to our original example before this turns into LessWrong.

Ok, so we’re chugging along now, with 5.2% of our portfolio in this fantastic speculative investment, when suddenly we hit a snag. The company publishes the highly anticipated preliminary readout of their initial trials, and they’re not as great as the market hoped. The stock immediately falls 50%, as other investors revise down their probability of success by a factor of 2, to 2.5% instead of 5%. What does your portfolio look like now? Well, your investment is now only worth 1/2 of 1/19th of your portfolio, so it’s 1/38th of your initial wealth, and you’ve lost the other 1/2 of 1/19th of your portfolio, so you now have 37/38ths of your initial wealth, so currently 1/38/(37/38) = 1/37th of your portfolio is in this name.

That’ll sting, and your monthly letter will be a bit awkward to write, but whatever, you’ve lost more and bounced back- perhaps it’s time to average down. Based on your research, you’re still just as relatively confident as you were before- even if you don’t think the odds are 10% anymore, you still believe the your Bayes Factor is 2.111. So, what is your new expected probability of success? Because of the convexity of the logarithm, you don’t also revise down your estimate by a factor of 2 to 5%, but rather to:

 
\(p_{new} = \sigma(\lambda(\frac{0.025}{0.975}) +\log(2.111...)) = 19/370 \approx 5.14\% \)
Also, since the market cap has been cut in half but our success outcome is unchanged (it’s just less likely now), the expected return of success has now doubled to 40x from 20x. Thus, our new Kelly fraction is:

 
 
 
\(w^* = \frac{\frac{19}{370} \times 40 -1}{40-1} = \frac{1}{37}\)
CURIOUS. Our optimal Kelly fraction is precisely the same as our current position after taking the loss! As it turns out, we should do nothing to change the size of this position, since it’s still just as optimal as it was before the change in market-assessed probabilities. In other words, the Kelly sizing of a binary outcome is invariant to the arrival of new information, so long as that new information does not change the original piece of side information that caused us to put on the bet.

This isn’t just a contrived example I picked to make the math work out, either. Let’s assume that our initial price, prior to the arrival of new information, is p₀, and our payoff is X. We have incremental positive information in the form of a Bayes factor, BF>1, which we use to size our initial bet. Then our initial Kelly fraction is:

 
 
 
 
 
\(w^*_0 = \frac{\sigma(\lambda(\frac{p_0}{X}) + \log(BF_0)) \times\frac{X}{p_0}-1}{\frac{X}{p_0}-1} = \frac{p_0(BF_0-1)}{p_0(BF_0-1)+X}\)
Now, new information arrives, the market adjusts its implied probability of the positive outcome3, and the market price moves from p₀ to p₁. Our new portfolio weight is then:

 
 
 
 
 
\(w_1 = \frac{PositionSize}{TotalEquity} = \frac{w_0^* \frac{p_1}{p_0}} {(1-w_0^*)+w_0^* \frac{p_1}{p_0}} = \frac{ p_1 (BF_0-1) }{p_1(BF_0-1)+X}\)
But this is the same value as if we re-derived the optimal weight just using what was known from p₁, without referring to p₀ at all:

 
 
 
 
 
\(w^*_1 = \frac{\sigma(\lambda(\frac{p_1}{X}) + \log(BF_1)) \times\frac{X}{p_1}-1}{\frac{X}{p_1}-1} = \frac{p_1(BF_1-1)}{p_1(BF_1-1)+X} = w_1\)
Now here’s the kicker. Everything we have done above assumes BF₀ = BF₁, and our estimate doesn’t change over time, but that’s hardly best Bayesian practices- because it’s a very hazy estimate we essentially pulled out of thin air, it should itself be under uncertainty and subject to an updating process with the arrival of new information! If p₁ > p₀, then the price has increased because the market have received confirming evidence, and this confirming evidence means BF₁ should grow towards the upper end of its range as we become more confident we were right. As a result, w₁* > w₁ and we should increase the position size more than it grew in the market. By contrast, if p₁ < p₀, then our old evidence conflicts with the new evidence, and we should tend to become more suspicious we were right in the first place and shrink BF₁ towards the lower end of its range, so w₁* < w₁ and we should cut out position more than it moved down. In other words, the optimal strategy under uncertainly is to momentum trade price movements in the market, rather than fade them and double down on losing trades.

The only circumstance where it’s acceptable to drastically increase your position in the fact of a falling price is if your estimate of BF independently goes way, way up (the clearest example would be if you have material non-public information, of course, but other sources of alternative data only available to a subset of market participants would work too). If you’re stubbornly revising the estimate of your information quality up at the same time everyone is revising theirs down, you would do well to stop and contemplate Cromwell’s Rule: “I beseech you, in the bowels of Christ, think it possible that you may be mistaken”





