---
layout: post
title: Red, Green, Refactor
---
I seemed to havea bit of a breakthrough with Rails testing last week. 

After completing the first three of six levels in [Rails Testing for Zombies](rtfz.codeschool.com) I felt like it was time to try and tackle the many failing tests I had in my [job search tracking app](http://jobsearchtracker.herokuapp.com/). At the time I think I had 29 failing rspec tests. Even though the Rails Testing for Zombies course is on unit tests, not rspec, I felt like I learned enough basics about how tests are structured that I could tackle most of which I assumed was just bad formatting. After a few hours I managed to clean up my entire test suite and have all green tests. I actually only have 33 test, down from about 40-something. While I was fixing my tests I managed to remove a lot that just didn't match up with how I set up certain views and routes.

On Saturday I finished Rails Testing for Zombies. I struggled with the level on mocks and stubs. My biggest hangup is mixing up the formatting between the two. I'll definitely revisit that level and try to read up on it a little more to make sure I understand it. I also didn't realize the last two levels would cover [Capybara](https://github.com/jnicklas/capybara) and [FactoryGirl](https://github.com/thoughtbot/factory_girl_rails). Writing integration tests for my jobsearch tracker app as I followed along with the course really helped me understand the rspec tests I already wrote and which gems are responsible for what parts of my tests.

So my next steps are to refactor my existing tests. Even though they all pass, there is a lot of repitition, definitely not DRY. After I refactor I'll work on creating additional tests for parts of the app I've already developed. And finally I'll create tests for features I'm planning on adding in true TDD fashion. I'm probably going to go back and forth between unit tests and rspec tests, and also look at the Code School [Testing with RSpec](https://www.codeschool.com/courses/testing-with-rspec) course.

In other news, tonight I learned through Twitter that RailsConf is offering [Opportunity Scholarships](http://railsconf.com/scholarship) to select attendees. The scholarship is open to anyone, although they are specifically encouraging students, women, minorities and underrepresented groups to apply. The scholarship includes free admission to the conference as well as a Guide, a more experienced programmer, throughout the conference. A fellow RailsGirls DC member earned a similar scholarship to RubyConf in Miami last year and spoke very highly of the opportunity so I've already submitted my application for RailsConf. No point in procrastnating on something that could be so beneficial.

- b