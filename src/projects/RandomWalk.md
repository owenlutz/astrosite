---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Random Walks And Genetics'
pubDate: 2026-09-28
description: Bioinformatics Project Brief
author: Owen Lutz
tags: ["bio","projects"]
image: 
    url: ../assets/bitcoinlogo.png
    alt: "bitcoin logo"


---

A recent paper that I completed addressed the application of random walks in the field of cancer genomics, applying the lens of graph theory to try and identify cancer driven genes. While this paper has some issues that I will point out, it is overall a good exploration of graphs and random walks.

I start out by establishing the theoretical framework of a set of genes as a graph, where each node is a gene. We hypothesized that genes which are drivers of cancer would be closer to each other on this biological network than the average pair of genes. The logical follow up to this hypothesis is to use a shortest path algorithm to calculate the shortest path between known cancer driving genes and see if they were closer than the average pair of genes. This turned out not to be the case, as the p-value was not statistically significant (see fig. 1 for a good example of why this is). 

A quick aside into my first issue with this paper: the use of only a p-value as a measure of statistical significance. The p-value threshold of 0.05 is really not good enough, by itself, to prove or disprove statistical significance. With a large enough sample size, any non-zero effect becomes statistically significant. Additionally, while the statistical effect is real, it does not make a scientific conclusion. It is possible that the difference I found was relevant, even with the high p value. Doing this again, I would include Cohen’s d as well as provide confidence intervals to further support my conclusion. 

My next idea was to use a random walk to explore a small example set of 11 nodes (so as to be visually displayed in a manner which the audience could understand).Then, apply the same logic to the full set of genes.

So what is a random walk?

Let’s say I have a sheet of graph paper, and I place my pencil at some point in the paper. I then randomly choose to draw a line to the next adjacent point, either up, down, left, or right, where all choices have equal probability. I then continue this until I reach some pre-defined condition such as hitting the boundary of the paper, moving 50 times, or the clock hitting 5 minutes. The resulting path is a useful mathematical output.

What I just described is known as a simple symmetric random walk, where the path can only jump to neighboring points and the probabilities of all the options are the same. While this type of walk is useful, I use an algorithm known as random walk with restart, which, as the name suggests, includes a chance of the walk restarting at every decision point. I start my exploration using a restart parameter of 0.3, which means that at every point, or node, the chance of returning to the starting node is 30%. Additionally, the graph is weighted, with the edge weights initially all being 1 (the simple symmetric random walk), but using a random permutation of edge weights to establish background frequencies. 


Why did I do that? Well, statistics never exist in a vacuum. Especially when we are trying to discover new information, where the basis of comparison is not yet established. A good method for verifying the “truth” of new information that we discover is by comparing it to the background probabilities. 

We can calculate how likely our observation is to occur based on chance within the background probabilities, and highlight a deviation from the background probabilities which allows us to infer that the observation is due to some other factor than chance. 

In our scenario, this allowed me to discern if the result of a random walk (the average network proximity) was because of a specific permutation of edge weights or was just the product of chance. By applying some small amount of known information (the subset of genes which we know are drivers of cancer), we can test if the network proximity of those genes is higher than the average network proximity present in the background distribution. 

This is where another issue that I have with this paper comes up. The description of the process for assigning edge weights is unclear and vague. Earlier, we mentioned that the edge weights could be modified, but here I don’t describe how or what they were modified to. For example, the edge weights could have been set by experimental data where certain proteins were shown to interact with each other more often. Say protein A interacts with protein B 70% of the time, the edge weight between the two would be .7. But that’s just one way of doing it. It’s entirely possible that I had based the edge weights on how frequently two connected genes participate in the same Gene Ontology terms. 

As it turns out, that first option is exactly how I performed this part of the exploration, using a database of experimental data provided by my professor, however I completely neglected to add this, assuming that the reader would understand that the edge weights were permuted based on this data. Which, for anyone who wasn’t my professor, is not the case. Only someone versed in the subject would make that assumption, and even if they assumed correctly it’s still not very clear

I conclude the paper by highlighting how 30 genes were predicted to also be cancer driving genes based on their network proximity to the known cancer driving genes. The method of randomly permuting the graph was also used here to establish that this result was different from the background probabilities. But again, we come to the same issue with only a p-value being used to support this result. 

For more information on random walks, I’ll point you towards the wikipedia page as a great jumping off point, and would also invite you to look up the beautiful fractals produced by random walks in high dimensions. 


<iframe src="/448_three.pdf" width="100%" height="600px"></iframe>
