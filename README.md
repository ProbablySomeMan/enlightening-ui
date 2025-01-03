# enlightening-ui

A simple CSS UI library based on the UI that I am using in my blog website


## The goal of the library 

I wanted to share my little ui system that I use for my [blog](https://distantclicks.pl/). This repository, 
however, aims to package it into reusable elements. I plan to either implement
them as components in the near future, or to create a very serious fork that is
going to take care of aspects like these.


## Work in progress!
I have plans for releasing this library in npm. February seems like a likely 
date of that happening. I also believe that this will be the approximate time 
when the library will enter its Beta version stage.


## Usage

```html
  <button class="ui danger" id="event-01">button indicating an error</button>
  <button class="ui positive" id="event-02">button indicating a success</button>
```
These lines are the last two of first three buttons seen in demo. the class "ui"
applies styles to an element designated for interactions (like buttons, forms, 
some links, etc.). Classes that come as second in the HTML snippet mainly 
affect the color accents.


## Idea behind the project

Some concepts of styling derive from bootstrap, as for eg. applying classes to make an entire
element have a different meaning (as for the classes 'danger' and 'positive' seen in the example.) 
The library heavily relies on CSS variables as well as inheritance of states of
each element.

Simple demonstration: <img src="demo.png" alt="demo">

Link to the deployed demo: [link](https://probablysomeman.github.io/enlightening-ui/)
