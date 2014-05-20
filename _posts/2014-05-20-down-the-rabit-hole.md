---
layout: post
title: Down the rabbit hole
---
This past week I finally identified one of my fatal learning flaws, getting sidetracked. Last Monday I decided I was going to learn how to use Action Mailer in Ruby on Rails. I've been weary about attempting to do anything with email because I thought it would be really difficult. But I'm helping a friend build a site for her new business and I've been missing email functionality in my own Rails projects, so I figured now was as good a time as any to learn.

- Plan to learn Action Mailer
- Decide I should probably write tests to start my friend's new site (go TDD!)
- Think I should use RSpec, maybe now's a good time to delve a little deeper.
- Hello "[The RSpec Book](http://pragprog.com/book/achbd/the-rspec-book)". Oh and what is this Cucumber thing you want to tell me about.
- So I don't need to use or learn Cucumber right now (thanks for the [advice Tweeps](https://twitter.com/britneywright/status/466743291728650240)).
- I'd love to have users fill out interest forms on the site and get email notifications when they do. So of course I'll write JavaScript to create pop-up forms on the home page.
- JavaScript is coming along. I sure wish this looked prettier. Let me add Twitter Bootstrap.
- Oh fudge! Bootstrap has modal window functionality built in. Spent a whole night writing JavaScript for nothing.

By the last realization it was Friday in the timeline and did you see Action Mailer anywhere after the initial "plan"?  No, because I allowed myself to get distracted by new learning opportunity after new learning opportunity. A friend pointed this out and I quickly put my foot down and said, "I'm not going to do anything else until I successfully implement email in my friend's Rails application."

And surprise, surprise, it wasn't difficult at all. The Ruby on Rails documentation for Action Mailer is very clear. Then I found [Postmark](http://postmarkapp.com) through Heroku and followed the [instructions](https://devcenter.heroku.com/articles/postmark) to set up an account hook it into my app to send transactional emails. I did have one hiccup with the api key that I didn't figure out until Sunday morning, but when I filled out one of the forms and immediately received a transaction email I was so overjoyed.

So now I'm going to try to make a concerted effort to take things one at a time. Learn one thing at a time. Make a small goal and finish it before moving to the next one. I've been doing a pretty good job of it since Saturday and hopefully by the end of the week I'll be able to report how much more productive and successful it's made me.
