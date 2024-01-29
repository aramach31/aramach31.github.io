---
layout: post
title:  "Journey of a Battery"
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
<link rel="stylesheet" type="text/css" href="/assets/css/image-styling.css">

[comment]: <> (To be included)
<script src="/assets/js/interactive-word.js"></script>
<script src="/assets/js/image-carousel.js"></script>

## Background

The 2019 Nobel Prize in Chemistry was awarded to the scientists behind the development of Lithium-ion batteries, first introduced to the market in 1991. Since then, within the next 30 years, they've only gotten better, with volumetric density increasing threefold and the costs dropping tenfold. So much better that it's powering the screen you're reading this on, your car and even your toothbrush. 

![battery-cost-decline](/assets/images/battery-production/Battery-cost-decline.png)
Source: OWID

This chart is slightly outdated, but gives us something to be proud of. In less than 30 years, the Li-ion battery has found its way to almost every technological equipment we've interacted with.

The story for the last couple of years has been a little more muted, primarily due to supply chain chocks resulting from the pandemic, rising demand as the global economy started to recover and the Russia-Ukraine war - tough to keep your supply chain humming when there's a war raging the background - among other factors.

![battery-cost-2018-present](/assets/images/battery-production/battery-costs-2018-present.png)
Source: IEA

The chart above suggests that battery prices have plateaued. But there are telling signs that could make us expect further drops in prices, with average battery pack prices falling to $139 per kilowatt hour as of November 2023, a 14% drop from $161/kWh in 2022<sup>[1](https://www.bloomberg.com/news/articles/2023-11-26/battery-prices-are-falling-again-as-raw-material-costs-drop)</sup>. From IEA,

>The combination of an expected 40% increase in supply and slower growth in demand, especially for EVs in China, has contributed to this trend. This drop – if sustained – could translate into lower battery prices.

For a long time, the accepted standard to reach total cost of ownership parity with ICE vehicles was battery pack prices of USD 100/kWh, which corresponds to battery cell prices of USD 80/kWh. Picture this as the financial 'sound barrier' we've been racing to break. We just hit a record low of USD 139/kWh a couple of months ago<sup>[5](https://about.bnef.com/blog/lithium-ion-battery-pack-prices-hit-record-low-of-139-kwh/#:~:text=New%20York%2C%20November%2027%2C%202023,research%20provider%20BloombergNEF%20(BNEF))</sup>, so presumably, we're well positioned to hit our targets pretty soon.

But there's more. Companies like Renault and Ford have publicly announced targets of $80/kWh by 2030<sup>[6](https://about.bnef.com/blog/battery-pack-prices-fall-to-an-average-of-132-kwh-but-rising-commodity-prices-start-to-bite/)</sup>. Meanwhile, the US Department of Energy is moving the goalposts even further, setting their sights on a groundbreaking $60/kWh. Quoting David Howell, the Principal Deputy Director at DoE<sup>[6](https://themobilist.medium.com/the-goalposts-move-the-new-lithium-ion-standard-is-an-astonishing-60-per-kwh-7153fa8ec328):

> By getting to $60/kWh, an EV’s total cost of ownership will be 26 cents a mile. Combustion is 27 cents.

So with all this mind, can we get there reasonably soon? The rest of this post will explore why the answer might just be a resounding 'Yes, we can.'"

## What goes into a Li-ion battery?

## Costs incurred

![cost-components](/ass)

Reducing costs at the cell level is akin to fine-tuning an intricate machine. The focus? Managing supply chain expenses for key materials and enhancing manufacturing efficiency – think less waste, more power.

Interestingly, investments in R&D on materials and chemistry were key to the price decline, while economies of scale contributed somewhat less. 

![price-time-marketsize-patents](/assets/images/battery-production/price-time-marketsize-patents.gif)

A deep dive into the data reveals a striking insight: an R² value of 0.96 illustrates a strong correlation between price decline and the number of patents filed. In simpler terms, more innovation equals lower costs. This contrasts with an R² of 0.88 for price against market size, suggesting that while growing demand helps, cutting-edge research is the real game-changer.

So, how are we tackling the challenge of mineral cost reduction? Let's explore.

### Cathode

The cathode represents over 50% of the total cost in producing battery cells, with key components like Lithium, Nickel, and Cobalt accounting for approximately 50-65% of the cost, fluctuating with raw material prices. These metals are not only expensive but also come with several other challenges. For instance, consider Cobalt. Battery manufacturers are actively seeking alternatives to cobalt due to several reasons:

1. Cost: Cobalt is the second most expensive mineral used in batteries. While Lithium carbonate currently holds the top spot, its price is expected to decrease as supply begins to meet the demand deficit.

2. Supply and Geopolitical Risk: More than 60% of the world's cobalt supply originates from the Democratic Republic of Congo (DRC), a region plagued by political instability and ethical concerns in mining practices<sup>[2](https://www.npr.org/sections/goatsandsoda/2023/02/01/1152893248/red-cobalt-congo-drc-mining-siddharth-kara).

3. Scarcity: Forecasts indicate significant regional disparities in cobalt demand and supply, as well as supply security levels. This imbalance is expected to lead to a shortage between 2028 and 2033<sup>[3](https://www.nature.com/articles/s41467-022-29022-z).

So, generally, we want to move towards Cobalt-free batteries, but it's tough and will take more than a village to do so<sup>[4](https://pubs.acs.org/doi/10.1021/acsenergylett.2c01553)</sup>. One strategy to solving for short term availability of Cobalt while mitigating risks is pushing for a circular economy (more on that later).

Hedging risks: Only recently did market participants gain access to lithium carbonate futures<sup>[7](https://www.cmegroup.com/media-room/press-releases/2023/6/20/cme_group_to_launchlithiumcarbonatefuturesaselectricvehicledeman.html)</sup>. With a new tool for managing price risk, we should expect a more stable and predictable market environment for lithium carbonate. This development could lead to better financial planning for companies involved in lithium production and usage. Additionally, it may attract further investment into the lithium market, as the ability to hedge can make it a more appealing option for portfolio diversification. Over time, this could also provide a clearer picture of supply and demand dynamics as reflected in the futures pricing, potentially driving more informed decision-making across the industry.

Why can we get there?

1. More R&D efforts - government grants, startup funding
2. Tools for managing price volatility
3. Supply chain switchup


Trends:

1. Movement towards Nickel rich chemistries: Nickel-rich batteries offer higher energy density compared to other types of lithium-ion batteries<sup>[8](https://www.sciencedirect.com/science/article/abs/pii/S2405829722002604)</sup>. For a long time, scientists were trying to figure out why capacity fading - a reduction in the battery’s charge-discharge capacity after use - occurs in nickel-rich chemistries, which is crucial to make them commercial-grade<sup>[9](https://pubs.acs.org/doi/10.1021/acsenergylett.1c01089)</sup>. Only recently have scientists figured out the main culprit behind some of the issues we've faced<sup>[10](https://www.nature.com/articles/s41467-023-43792-0)</sup>, with more breakthroughs coming up every month. 
2. Cobalt-free
3. Movement away from Lithium altogether: Lithium is great because it occupies the early bird spot in the periodic table. It's light and can carry massive firepower for its weight. But there's a massive supply deficit currently, which is expected to continue for a while. Price volatility, underinvestment, supply concentration risk doesn't help things further.

![lithium-deficit](/assets/images/battery-production/lithium-deficit.png)

Enter Sodium. While chemically and structurally similar, sodium has yet to be used on a large scale, partly due to the better range and performance of similarly sized lithium cells. With large scale investments - like BYD announced in November<sup>[11](https://carnewschina.com/2023/11/20/sodium-ion-batteries-are-real-in-china-byd-to-build-30-gwh-sodium-battery-plant/) - sodium might be powering future flying cars<sup>[12](https://en.wikipedia.org/wiki/Flying_car)






 














