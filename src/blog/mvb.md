---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Minimum Viable Blockchain'
pubDate: 2026-09-23
description: A rant about bitcoin
author: Owen Lutz
tags: ["bitcoin","media"]
image: 
    url: ../assets/bitcoinlogo.png
    alt: "bitcoin logo"
---

In my last quarter at Cal Poly I was taking a cryptography engineering class for fun, having finished all my required classes and curious to see what it was all about. It’s interesting how you can go four full years at university and hardly touch the topic of blockchain, but it’s always the first thing that anyone asks about when I tell them I study computer science. My professor assigned us to create a client for ZachCoin, a bitcoin analog which used a hub and spoke method (so he, as the hub, can grade/verify our work).

The goal of this project was to create a minimum viable blockchain (MVB). The client for this blockchain would emulate the features of bitcoin, albeit with far fewer nodes. This required processes for sending and receiving blocks, validating mined blocks, mining blocks, making transactions, and tracking your balance. 

To keep it short: I developed a client for a bitcoin analog which allows all the above processes to be made. I successfully mined and submitted blocks to the network and made myself a thousandaire in magic internet money. 

This project, to be honest, is hard to write about in a way that sounds interesting. There isn’t a UI to speak of, the screenshots of the code are all somewhat boring, and everyone already knows that bitcoin exists. I could spend some time waffling about the origins of bitcoin, how block validation works, and how leveraging human greed was the technological leapfrog that enabled bitcoin to take off where so many other digital currencies would crash and burn. However, I’d rather just talk about proof of work systems. This is a rant about my personal favorite conspiracy theory disguised as a project brief. 

For some quick background, proof-of-work is how bitcoin establishes consensus. Miners compete to solve hash functions, and in doing so, “prove” to the network that they have expended effort. These mined blocks are verified by decentralized nodes in the network. This process ensures that it is far too costly to attempt an attack on the blockchain by trying to modify a previous block, because 51% of the network must agree on the correct blockchain to ensure consensus. 

The natural result of proof-of-work is implosion, collusion, or some combination of the two. The fact that Bitcoin is still lauded as anonymous and decentralized is a testament to the distributed effort of thousands of PR teams over the last decade and a half.

I’d argue that the result of a bitcoin esque proof of work system which allows validators to make money off of it could only ever result in a monopoly. The individual or group with the higher capital to invest in validating bitcoin will invariably come to control more and more of the network (as long as sufficient profits are invested) until they proceed to control the network. In this case, the 51% consensus needed no longer holds as sufficient safeguard against double spending. 

It took barely 5 years after bitcoin 1.0 to achieve this. In 2014 the bitcoin mining pool Ghash.io briefly achieved control of 51% of the network. The controllers of this pool could therefore reject transactions at will or double spend their own bitcoin. The fallout was limited, due to a voluntary reduction in control by the company and a statement which professed that they would never go above 40% control, but it prompted questions about the long term stability of the bitcoin project. At the time, noted bitcoin investor Peter Todd sold half of his holdings, and the price of bitcoin dropped from $633 to $600. 

While it seems that the crisis was averted, I want to look closer into the ramifications of this event. What essentially occurred was that a single entity had control of the bitcoin network but was incentivized at least in part by financial reasons (i.e. the price of bitcoin dropping) to voluntarily let go of that control. Therefore, maintaining public trust in bitcoin was more valuable than the potential monopoly of the fee market or the limited ability to double spend. 

That was back when bitcoin was $600 which further decreased the potential gains from a double spending attempt. On top of that, there were around 9 million bitcoins still to be mined. Taking down the trust in the bitcoin network for a quick buck could have imperiled huge future profits. 

On top of this, there are only about 900,000 bitcoins left to mine, and the amount of bitcoins rewarded per mined block continues to decline due to halving. This comes to my second point, which is that once bitcoin reached the point where transaction fees were necessary for profitable mining, the currency reached a state in which it cannot be independent, or open source, or any of the other things that bitcoin currently advertises itself as. 

This point has already come and gone. As the profit model of bitcoin mining slowly shifted from making money through the bitcoin reward for mining a block to making money via the fees paid by users of bitcoin, one has to think that the method of setting fees, which is that the user who is sending the transaction to the network declares a fee in the transaction, is hugely volatile and unsuited to massive corporations dedicated to mining bitcoin. The users will always want to spend the lowest possible amount to get their transaction added to the block, and the miners will invariably end up in a race to the bottom unless they cooperate to hold rates at a steady point (exactly the case with U.S. railroad companies). 

The current reward for mining a block of bitcoin is 3.125 bitcoin. At current prices, that’s about $245,421 per block. The cost of mining a block of bitcoin is anywhere from $225,000 to $275,000 depending on electricity prices. These rough figures tell us that bitcoin is basically unprofitable to mine without the transaction fees.

We know that, ideally, the user sets the transaction fee and the price is governed by simple supply and demand. That being said, very rarely does an average bitcoin user actually set the price themselves. Usually, they use the presets which are available on many popular wallet management sites. These presets are decided by internal algorithms which make an “estimate” of a good price to set to achieve the desired speed.

On top of this perceived collusion, the further bitcoin is integrated into the global financial markets the more damage a 51% attack will cause. The amount of money to be made in this type of attack has also increased as well as crashing much more developed infrastructure including wiping out all investment into bitcoin mining technology. This could be a malicious actor of any sort, including a state, which might have goals other than pure profit, such as the collapse of “anonymous” purchasing. Or even for the goal of targeting a country which accepts it as legal tender and causing a collapse of their financial markets. 

In essence, I think that there is one of two endgames for cryptocurrency based on a proof of work system. Either A: The market reaches a point where a 51% attack serves political or economic purpose and then the market crashes, never to recover, or B: the miners and brokers collude in such a way that enables consistent profits based on mining fees. In neither one of these scenarios is bitcoin anywhere close to the independent, decentralized, anonymous, and easily accessible monetary solution to all of the world's financial woes that it is so often lauded as. 

