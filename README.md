**Developer: Michael Roberts**

💻 [Visit live website](https://soundcheck-13ffdc050395.herokuapp.com/)

![Am-I-Responsive]()

## Table of Contents
  - [About](#about)
  - [Project Goals](#project-goals)
  - [User Stories](#user-stories)
  - [Design](#design)
    - [Colours](#colours)
    - [Fonts](#fonts)
    - [Wireframes](#wireframes)
  - [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Libraries, frameworks and dependencies](#libraries-frameworks-and-dependencies)
    - [Tools & Programs](#tools--programs)
  - [Front-End](#front-end)
  - [Back-End API](#back-end-api)
  - [Features](#features)
  - [Future features / improvements](#future-features--improvements)
  - [Validation](#validation)
  - [Testing](#testing)
    - [Manual testing](#manual-testing)
    - [Device testing](#device-testing)
    - [Browser compatibility](#browser-compatibility)
  - [Bugs](#bugs)
  - [Config](#config)
  - [Credits](#credits)


## About
Soundcheck is a music-based social media platform where artists and fans can share content and information on new music and upcoming shows, find new artists and friends and network with like-minded people. 
Everyone can like other users' pictures and share their opinion on every post. Users can also follow their favourite profiles and easily see updates on their activity, and save a list of posts that they like to view again later.


## Project Goals
The goal for this project was to build a platform to enable users to interact with others in various ways such as posting content, liking and commenting on posts or following their profile.
The platform is intended to be informal and based on media and entertainment.

The key functionality aspects:
- simple and intuitive navigation across all pages
- user authentication
- user interaction via posts, comments, likes, followers
- user profiles with profile pictures, bios and profile stats
- CRUD functionality for posts, comments, likes, followers and profile information
- posts filtering by caption and author
- responsiveness for consistent user experience across all devices


## User Stories
### First sprint
#### Navigation 
1. As a user, I can view the Home Page so that I can understand what the website is about.
2. As a user, I can see a navbar on every page, so that I can easily return to the main page and access my profile page.
3. As a logged-out user, I can see log in and sign up options so that I can log in or sign up.
 
#### Authentication 
4. As a new user, I can create a new account to access the app.
5. As a returning user, I can log in with my existing credentials so that I can access the app.
6. As a user, I can maintain my logged-in status until I choose to log out so that my use of the app is not compromised.

### Second sprint
#### Posts 
7. As a user, I can create posts to share my images with the community.
8. As a user, I can title my post so that other users can find it by its title.
9. As a user, I can view other people’s posts so that I can get inspired by their images.
10.  As a user, I can view the details of a single post so that I can see its full description and other users’ comments.
11. As a user, I can like a specific post to show my interest.

#### The Post Page 
 14. As a user, I can add comments to a post so that I can share my thoughts about the content with the community.
15. As a user, I can see when the comments were created so that I know how old a comment is. 
16. As a user, I can edit and update my existing comments.
17. As a user, I can delete my existing comments from a post. 
18. As a user, I can edit my post title, description and image to update my post after it was created.

### Third sprint
#### Main page 
19. As a user, I can view posts ordered by most recently added so that I am up to date with the newest content.
20. As a user, I can keep scrolling through the posts so that they are loaded automatically and I don't have to select the next page.
21. As a user, I can see all posts I have previously liked to save any content of interest.
22. As a user, I can view posts from users I have followed, so I can stay up to date with their activity.
24. As a user, I can search for posts by title so that I can find the posts I am interested in. 

#### User Profile Page 
25. As a user, I can add my profile avatar so that other users can easily identify me.
26. As a user, I can view user's avatars so that I can easily identify other users' profiles.
27. As a user, I can update my picture and description on the profile page so that other users can view up to date info about me.
28. As a user, I can change the password to my account to keep my profile secure.

### Fourth sprint
#### Other Users Profiles 
29. As a user, I can view all the posts by a specific user.
30. As a user, I can view other users’ profiles with their profile description, number of posts, followers and users followed so that I can learn more about them.
31. As a user, I can follow and unfollow other users so that I can get specific users’ posts in my posts feed.
32. As a user, I can see a list of the most followed profiles so that I can see trending content.

#### General
33. As a site owner I want my site to be fully responsive so that user experience is positive across all devices.
34. As a site owner, I want users to come to a 404 error page so that they can easily understand the error and how to return to the site pages if they enter an invalid URL.
35. As a site user, I can view feedback messages, so that I know if my comment/profile/post has been updated.

##### Back to [top](#table-of-contents)


## Design


## Technologies Used
### Languages
- HTML
- CSS
- Javascript
  - React (17.0.2)

### Libraries, frameworks and dependencies
- [Axios](https://axios-http.com/docs/intro) - axios were used for promise-based HTTP. Justification: I used axios to send API requests from the React project to the API and avoid any CORS errors when sending cookies.
- [JWT](https://jwt.io/) - library to decode JSON Web tokens. Justification: I used JWT to prevent unauthenticated users from making extra network requests to refresh their access token. Also used to remove the timestamp from the browser when the user refreshes token expires or the user logs out.
- [Popper](https://popper.js.org/) - a 3rd party library used by React-Bootstrap. Justification: I used Popper to make sure the dropdown menus position is fixed on all browsers.
- [React 17](https://17.reactjs.org/) - JavaScript library for building user interfaces
- [React-Bootstrap 4.6](https://react-bootstrap-v4.netlify.app/) - Justification: I used Bootstrap React library for UI components, styling and responsiveness.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - Justification: I used this component to load content (posts/comments) automatically as the user scrolls towards the bottom of the page without having to jump to next/previous page.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - used for dynamic routing. Justification: I used this library to enable the navigation among views of various components and control what the user sees depending on the URL they have accessed in the browser.

### Tools & Programs
- [Am I Responsive](http://ami.responsivedesign.is/) was used to create the multi-device mock-up at the top of this README.md file
- [Balsamiq](https://balsamiq.com/) to create the projects wireframes
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) was used for debugging of the code and checking site for responsiveness
- [Cloudinary](https://cloudinary.com/) to store static files
- [Favicon.io](https://favicon.io) for making the site favicon- [Font Awesome](https://fontawesome.com/) - Icons from Font Awesome were used throughout the site
- [Google Fonts](https://fonts.google.com/) - import of Inter font
- [Git](https://git-scm.com/) was used for version control within VSCode to push the code to GitHub
- [GitHub](https://github.com/) was used as a remote repository to store project code
- [Gitpod](https://gitpod.io) was used to host a virtual workspace
- [Heroku](https://heroku.com) was used to deploy the project into live environment
- Validation:
  - [WC3 Validator](https://validator.w3.org/) was used to validate the html
  - [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) was used to validate the css
  - [ESLint](https://eslint.org/) used to validate JSX code
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse/) used to validate performance, accessibility, best practice and SEO of the app
  - [Wave](https://wave.webaim.org/) - used to evaluate application accessibility
