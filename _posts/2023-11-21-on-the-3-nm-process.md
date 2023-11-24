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

1. Scale Comparison: Start by illustrating just how small 3 nm is. A nanometer is one-billionth of a meter. For perspective, a human hair is about 80,000-100,000 nanometers wide. Comparing it to everyday objects helps to ground the concept in familiar terms.
2. Historical Context: Give a brief overview of the evolution of semiconductor technology. In the 1960s, the scale was measured in micrometers (thousands of nanometers). This historical perspective shows the trajectory of miniaturization and the technological marvel of reaching 3 nm.
3. Technical Challenges and Innovations: Discuss the challenges of working at such a small scale, like quantum effects, heat dissipation, and manufacturing precision. Explain how overcoming these challenges often requires breakthroughs in materials science, photolithography, and design methodologies.
4. Benefits of Smaller Process Nodes: Highlight the benefits of smaller transistors, such as increased performance, lower power consumption, and greater density of transistors on a chip, leading to more powerful and energy-efficient electronic devices.
5. Real-world Applications: Offer examples of how these advancements impact consumer electronics, computing, telecommunications, and other fields. This ties the technological achievement back to its practical implications.
6. Future Outlook: Speculate on the future of semiconductor technology. How much smaller can transistors get? What are the potential next steps beyond 3 nm, like 2 nm or 1 nm processes, or entirely new technologies like quantum computing or carbon nanotubes?
7. Ethical and Environmental Considerations: Briefly touch upon the ethical and environmental aspects of semiconductor manufacturing, like resource usage, waste, and the life cycle of electronic devices.
8. Conclusion: Reiterate the wonder of the 3 nm process and its significance in the broader context of technological advancement and societal impact.

In September, Apple announced the iPhone 15 Pro lineup featuring the A17 Pro chipset, fabricated by TSMC on their 3 nm N3B process, packing a whopping 19 billion transistors. For perspective, the previous Pro lineup chipset, the A16 Bionic, packed about 16 billion transistors. Geekbench results show A17 Pro is close to achieving the multi-core performance of the M1 chips:

![processor-performance-comparison](/assets/images/on-the-3-nm-process/processor-performance-comparison.jpeg)

<div class="carousel">
    <div class="carousel-image"><img src="/assets/images/on-the-3-nm-process/a17-pro-1.webp" alt=""></div>
    <div class="carousel-image"><img src="/assets/images/on-the-3-nm-process/a17-pro-2.webp" alt=""></div>
    <div class="carousel-image"><img src="/assets/images/on-the-3-nm-process/a17-pro-3.webp" alt=""></div>
    <div class="carousel-image"><img src="/assets/images/on-the-3-nm-process/a17-pro-4.webp" alt=""></div>
    <a class="prev" onclick="moveSlide(-1)">&#10094;</a>
    <a class="next" onclick="moveSlide(1)">&#10095;</a>
</div>

### How did we get here?

The term "3 nanometer" has no relation to any actual physical feature (such as gate length, metal pitch or gate pitch) of the transistors. According to the projections contained in the 2021 update of the International Roadmap for Devices and Systems published by IEEE Standards Association Industry Connection, a 3 nm node is expected to have a contacted gate pitch of 48 nanometers and a tightest metal pitch of 24 nanometers.

<table>
  <tr>
    <th>Company</th>
    <th>Power Reduction</th>
    <th>Area Reduction</th>
    <th>
      <span class="interactive-word" data-explanation="How fast the chip operates">Performance Improvement</span>
    </th>
  </tr>
  <tr>
    <td>TSMC (3 nm FinFET vs. 5 nm FinFET)</td>
    <td>25–30%</td>
    <td>33%</td>
    <td>10–15%</td>
  </tr>
  <tr>
    <td>Samsung (3 nm process vs. 5 nm process)</td>
    <td>45%</td>
    <td>16%</td>
    <td>23%</td>
  </tr>
</table>

<table>
  <thead>
    <tr>
      <th>Process</th>
      <th>Gate Pitch</th>
      <th>Metal Pitch</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5 nm</td>
      <td>51 nm</td>
      <td>30 nm</td>
      <td>2020</td>
    </tr>
    <tr>
      <td>3 nm</td>
      <td>48 nm</td>
      <td>24 nm</td>
      <td>2022</td>
    </tr>
    <tr>
      <td>2 nm</td>
      <td>45 nm</td>
      <td>20 nm</td>
      <td>2024?</td>
    </tr>
  </tbody>
</table>

### Getting to 2 nm

<div style="text-align: center;">
    <img src="/assets/images/on-the-3-nm-process/lithography-scaling.png" alt="Lithography Scaling" />
</div>

Quite a lot to break down here.

#### Nominal Feature Size Scaling

Nominal feature size scaling is the process of shrinking the smallest manufacturable dimensions of semiconductor components over time. This trend, essential for boosting performance and efficiency in electronics, has evolved from micrometer-scale features in the 1970s to nanometer-scale features today. As illustrated in the chart, advances in photolithography, such as the shift from <span class="interactive-word" data-explanation="Wavelength associated with deep ultraviolet (DUV) lithography; used for manufacturing processes for chips with feature sizes ranging down to around 130nm">248nm</span> to <span class="interactive-word" data-explanation="Another DUV wavelength, used for more advanced semiconductor nodes below 130nm, down to the sizes such as 90nm or even smaller">193nm</span> light sources, have enabled this miniaturization, with each step down in wavelength marking a new era in chip design and potential computing power.

#### 






