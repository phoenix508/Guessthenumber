# Continuous Deployment using AWS Code Pipeline and S3

This repo contains the code files used in this [YT video]([https://youtu.be/biYVW1TMYAU](https://www.youtube.com/watch?v=iCdGcr1jj6Q)).

## TL;DR
Code for a game is hosted in GitHub.  I create an S3 bucket for static website hosting, then create a continuous deployment pipeline (using AWS Code Pipeline) to automatically deploy the code whenever changes are made.

## The Game
A simple number-guessing game. Player gives a guess and the system will give hints about if the number is too high or too low.

The game consists of HTML, CSS and JavaScript.

Ideas for additional features:
- A scoring mechanism
- A timer
- Add additional hints
- Multi-player capabilities so you can compare scores 

## The Deployment Environment
The code will be deployed and hosted in S3.
