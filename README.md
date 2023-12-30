# <img src="src/assets/soundcheck-logo-light.png">

**Developer: Michael Roberts**

💻 [Visit live website](https://soundcheck-13ffdc050395.herokuapp.com/)

![Am-I-Responsive](docs/readme/am-i-responsive-soundcheck.png)

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
### Colours
It was my intention to keep the colours simple in order to draw the users attention to the photographs and content posted on the site without distraction. I have used a simple white background with black text. Buttons are black with white text and turn grey when hovered over. The likes feature uses a dark red for the heart once the post is liked.      
These colours were used throughout the pages to ensure consistent contrast and good user experience.

### Fonts
The Google Font family "Righteous" was used as I felt it was a clear and understandable font that wasn't overly formal and fitted the atmosphere of the site.

##### Back to [top](#table-of-contents)

### Wireframes
<details><summary>Landing Page</summary>
<img src="docs/wireframes/wireframe-landing-page.png">
</details>
<details><summary>Sign Up</summary>
<img src="docs/wireframes/wireframe-signup.png">
</details>
<details><summary>Sign In</summary>
<img src="docs/wireframes/wireframe-signin.png">
</details>
<details><summary>Home/Feed/Liked</summary>
<img src="docs/wireframes/wireframe-home-feed-liked.png">
</details>
<details><summary>Add Post</summary>
<img src="docs/wireframes/wireframe-add-post.png">
</details>
<details><summary>Post</summary>
<img src="docs/wireframes/wireframe-post.png">
</details>
<details><summary>Profile</summary>
<img src="docs/wireframes/wireframe-profile.png">
</details>

##### Back to [top](#table-of-contents)

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

##### Back to [top](#table-of-contents)

## Front-End
### React
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Its primary goal is to make it easy to reason about an interface and its state at any point in time, by dividing the UI into a collection of independent and reusable components ([source](https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/)).

I used React for this application for several reasons:
- Most used library for developing social networking and media content applications - e.g. Meta (formerly Facebook), Instagram, Netflix, Airbnb, etc.
- Flexibility - the React code is easier to maintain and is flexible due to its modular structure, compared to other front-end frameworks.
- Speed - applying React significantly increases the page loading speed and reducing the wait, which affects user experience and satisfaction.
- React Bootstrap - excellent choice for improving user experience, used for styling and responsiveness. It comes with ready-to-use React built components. They are implemented with accessibility in mind, which is a vital factor when creating a front-end application. I used plain Bootstrap in my previous projects, so it was an easy choice to use React Bootstrap in this app.
- Reusability of components - no need to write various codes for the same features.

There were various components created and reused across this application.

- `<Asset />` - multi purpose component, used to display a range of items by being passed props. Those include an image with source and alt attribute or a message consisting of a paragraph.
- User stories covered: 18

- `<Avatar />` - reusable component, used to display the user profile picture. This component uses props which can specify the source of the image and also its size. An example of this component's reusability is the image size on the profile page being bigger than that of the one in the Nav Bar yet it is the same component and source image used.
- User stories covered: 22, 23, 24

- `<DropdownMenu />` - reusable component, used to display the three dots dropdown menu. These menus are used to display options to edit or delete your posts and comments or to edit your profile details.
- User stories covered: 14, 15, 24, 25

- `<FeedbackMessage />` - component for displaying feedback messages to the user upon editing/deleting comments, deleting post, updating profile information or a password.
- User stories covered: 32

- `<NavBar />` - reusable component that features on each page of the application. For signed in users it shows links to Home, Feed, Liked, Add Post, Profile, Sign Out and user avatar/picture. For signed out users, it displays links to sign up or sign in.
- User stories covered: 2, 3

- `<PageNotFound />` - component for displaying a 404 graphic error message with a return to menu button when a user enters an invalid URL.
- User stories covered: 31

- `<PopularProfiles />` - reusable component showing up ten of the most followed profiles in the app, or four on smaller screen sizes. The component displays user avatar, name and follow/unfollow button.
- User stories covered: 29


## Back-End API
### Django REST Framework
The API for this Front-End application was built with the Django REST Framework. The repository with a README file for the DRF Back-End can be found [here](https://github.com/mykki92/CI_PP5_SOUNDCHECK_DRF_API).

##### Back to [top](#table-of-contents)

## Features


## Validation


## Testing
### Manual testing of user stories

1. As a user, I can view the landing page so that I can understand the purpose of the website..

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Home | Navigate to https://soundcheck-13ffdc050395.herokuapp.com/ | Landing page loads if logged out, redirected to home page if logged in | Works as expected |
 
<details><summary>Screenshots</summary>
<img src="docs/testing/user-story-testing-01.png">
</details>
<br>
<hr>
<br>

2. As a user, I can see a navbar on every page, so that I can easily see the features of the site and access my profile page.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Navbar | Go to the top of any page of the application | Navbar with all page links is displayed | Works as expected |
 
<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-02-01.png">
  <img src="docs/testing/user-story-testing-02-02.png">
</details>
<br>
<hr>
<br>

3. As a logged-out user, I can see links to log in or sign up, so that I can access my account or create a new one. 

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| SignUp/SignIn | If signed in, click on the sign out button in the navbar | Redirects to the home page and navbar displays options to sign in or sign up | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-story-testing-03.png">
</details>
<br>
<hr>
<br>

4. As a new user, I can create a new account so that I can access the applications features.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| SignUp/SignIn | From the landing page, click the sign up button in the navbar, enter a username and password | Redirects user to sign up page, after entering their credentials the user is taken to the sign in page where they can access their profile and the site features | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-04-01.png">
  <img src="docs/testing/user-story-testing-04-02.png">
  <img src="docs/testing/user-story-testing-04-03.png">
</details>
<br>
<hr>
<br>

5. As a returning user, I can log in with my existing credentials so that I can access the app and my profile.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| SignUp/SignIn | If signed out, click on the ‘sign in’ button in the navbar, enter your username and password | Signs user in and displays the main posts page. Links to features and profile now appear in the navbar | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-05-01.png">
  <img src="docs/testing/user-story-testing-05-02.png">
</details>
<br>
<hr>
<br>

6. As a user, I can maintain my logged-in status until I choose to log out so that my use of app is not compromised.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
|  | Sign in to the application and do not sign out within 24 hours | Users stay signed in for 24 hours unless they sign out themselves | Works as expected |

<br>
<hr>
<br>

7. As a user, I can create posts so that I can share my content and experiences with the community.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Add Post | Click the ‘Add post’ icon to the left of the navbar | A form page is displayed where you can upload an image and give it a title and caption. Once posted it will appear in the main posts page and on your profile page | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-07-01.png">
  <img src="docs/testing/user-story-testing-07-02.png">
  <img src="docs/testing/user-story-testing-07-03.png">
</details>
<br>
<hr>
<br>

8. As a user, I can caption my post so that other users can find it when searching by its caption.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Add Post | Navigate to the “Add Post” page . Add a caption when posting an image | Post is added and a caption is displayed under the post with an optional post section underneath | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-08-01.png">
  <img src="docs/testing/user-story-testing-08-02.png">
</details>
<br>
<hr>
<br>
 
9. As a user, I can view other users posts so that I can stay up to date with content and information of interest. 

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Home | Navigate to the “Home” page | See a feed of all posts on the site | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-09-01.png">
  <img src="docs/testing/user-story-testing-09-02.png">
  <img src="docs/testing/user-story-testing-09-03.png">
</details>
<br>
<hr>
<br>

10.  As a user, I can view the details of a single post so that I can see its full caption and the comments section. 

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Post Page | Click on any post from the home page, feed or a users profile page | See all post details below the image and a comments section | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-10-01.png">
  <img src="docs/testing/user-story-testing-10-02.png">
</details>
<br>
<hr>
<br>

11. As a user, I can like a specific post so that I can show my interest and support for content that I like.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Likes | Click the like icon under any post | Post is liked and like icon is marked red | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-11.png">
</details>
<br>
<hr>
<br>
 
12. As a user, I can add comments to a post so that I can share my thoughts about the content with the community.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Comments | Click the text box under the expanded post view and enter a comment | Comment is added to the comments list | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-12-01.png">
  <img src="docs/testing/user-story-testing-12-02.png">
</details>
<br>
<hr>
<br>
 
13. As a user, I can see when the comments were created so that I know how recent a comment is. 

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Comments | Scroll down to the comment section under any post | All comments have a time stamp to the right of the comment | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-13.png">
</details>
<br>
<hr>
<br>

14. As a user, I can edit and update my existing comments so that I can correct any mistakes.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Comments | Click on the dropdown icon to the right of your comment and select the edit icon | Comment can be edited and reposted | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-14-01.png">
  <img src="docs/testing/user-story-testing-14-02.png">
  <img src="docs/testing/user-story-testing-14-03.png">
</details>
<br>
<hr>
<br>


15. As a user, I can delete my existing comments from a post.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Comments | Click on the dropdown icon to the right of your comment and select the delete icon | Comment will be removed from the comments list | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-15-01.png">
  <img src="docs/testing/user-story-testing-15-02.png">
</details>
<br>
<hr>
<br>

16. As a user, I can edit my post title, description and image to update my post after it was created.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Post Update | Click on the dropdown icon to the right of your post and select the edit icon | Image, title and caption can all be edited and reposted | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-16-01.png">
  <img src="docs/testing/user-story-testing-16-02.png">
  <img src="docs/testing/user-story-testing-16-03.png">
</details>
<br>
<hr>
<br>

17. As a user, I can view posts ordered by most recently added so that I am up to date with the newest content.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| | Navigate to the home, feed or liked page | Posts are displayed with a date stamp with most recent posts at the top of the list | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-17.png">
</details>
<br>
<hr>
<br>

18. As a user, I can keep scrolling through the posts so that they are loaded automatically and I don't have to select the next page.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Infinite Scroll | Navigate to the home, feed, liked or profile page | Displays list of all available posts without changing pages. Displays a spinning icon if the posts have not been loaded | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-18-01.png">
  <img src="docs/testing/user-story-testing-18-02.png">
  <img src="docs/testing/user-story-testing-18-03.png">
  <img src="docs/testing/user-story-testing-18-04.png">
  <img src="docs/testing/user-story-testing-18-05.png">
</details>
<br>
<hr>
<br>

19. As a user, I can see all posts I have previously liked so that I can save any content of interest.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Likes | Click the “Liked” button on the nav bar  | A list is displayed of all posts that you have previously liked | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-19-01.png">
  <img src="docs/testing/user-story-testing-19-02.png">
</details>
<br>
<hr>
<br>

20. As a user, I can view posts from users I have followed, so I can stay up to date with content of interest.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Follow/Unfollow | Click the “Feed” button on the nav bar  | A list is displayed of all posts by profiles that you have followed | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-20-01.png">
  <img src="docs/testing/user-story-testing-20-02.png">
  <img src="docs/testing/user-story-testing-20-03.png">
</details>
<br>
<hr>
<br>

21. As a user, I can search for posts by title using keywords so that I can find the posts I am interested in.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Search Bar | Select the search bar at the top of the home, feed or liked pages and enter a keyword  | A list is displayed of all posts with the keyword in the title | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-21.png">
</details>
<br>
<hr>
<br>

22. As a user, I can add my profile avatar so that other users can easily identify me.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Avatar | Upload profile avatar or keep default avatar  | Avatar is displayed on your profile page and alongside your username in posts and comments | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-22-01.png">
  <img src="docs/testing/user-story-testing-22-02.png">
  <img src="docs/testing/user-story-testing-22-03.png">
  <img src="docs/testing/user-story-testing-22-04.png">
</details>
<br>
<hr>
<br>
 
23. As a user, I can view other user's avatars so that I can easily identify their profiles.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Avatar | Navigate to the home, feed or liked page, or any users profile page  | User avatars are displayed on their profile page and alongside their username in posts and comments | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-23-01.png">
  <img src="docs/testing/user-story-testing-23-02.png">
</details>
<br>
<hr>
<br>

24. As a user, I can update my avatar and bio on the profile page so that I can keep my profile current. 

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Profile | Click the dropdown menu on the profile page, select the edit profile option and upload an image with a bio  | New avatar and bio displays on your profile page  | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-24-01.png">
  <img src="docs/testing/user-story-testing-24-02.png">
  <img src="docs/testing/user-story-testing-24-03.png">
  <img src="docs/testing/user-story-testing-24-04.png">
</details>
<br>
<hr>
<br>

25. As a user, I can change the password to my account so that I can keep my account secure.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Change Password | Click the dropdown menu on the profile page, select the change password option and enter a new password  | Your account can now only be accessed with your new sign in credentials | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-25-01.png">
  <img src="docs/testing/user-story-testing-25-02.png">
</details>
<br>
<hr>
<br>

26. As a user, I can view all the posts by a specific user so that I can see if I want to follow their profile.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Profile Page | Navigate to a users profile page by clicking their avatar or username  | A list of all their posts is displayed, most recent posts first | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-26.png">
</details>
<br>
<hr>
<br>
 
27. As a user, I can view other users’ profiles so that I can see their bio, number of posts, followers and users followed.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Profile Page | Navigate to a users profile page by clicking their avatar or username  | Counters are displayed at the top of the page with number of posts, followers and users followed. A bio section is underneath | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-27.png">
</details>
<br>
<hr>
<br>

28. As a user, I can follow and unfollow other users so that I can get specific users’ posts in my posts feed.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Follow/Unfollow | Click on the 'follow' or ‘unfollow’ button within the user profile page or by the username in ‘Popular Profiles’' menu | Follows or unfollows the user, increases or decreases the 'following' number on current profile and increases or decreases the number of followers on followed user's profile | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-28-01.png">
  <img src="docs/testing/user-story-testing-28-02.png">
  <img src="docs/testing/user-story-testing-28-03.png">
  <img src="docs/testing/user-story-testing-28-04.png">
</details>
<br>
<hr>
<br>

29. As a user, I can see a list of the most followed profiles so that I can see trending content.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Popular Profiles | Navigate to the home page | A box on the right of the page displays a list of the ten most popular profiles | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-29.png">
</details>
<br>
<hr>
<br>

30. As a site owner I want my site to be fully responsive so that user experience is positive across all devices.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| | Change device screen size using chrome dev tools | The web functionality remains the same on various screen sizes | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-30-01.png">
  <img src="docs/testing/user-story-testing-30-02.png">
  <img src="docs/testing/user-story-testing-30-03.png">
  <img src="docs/testing/user-story-testing-30-04.png">
  <img src="docs/testing/user-story-testing-30-05.png">
  <img src="docs/testing/user-story-testing-30-06.png">
</details>
<br>
<hr>
<br>

31. As a site owner, I want users to come to a 404 error page so that they can easily understand the error and how to return to the site pages if they enter an invalid URL.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| 404 Page | Enter an invalid url into the browser e.g. https://soundcheck-13ffdc050395.herokuapp.com/a | Reroutes to a customised 404 page | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-31.png">
</details>
<br>
<hr>
<br>

32. As a site user, I can view feedback messages, so that I know if my comment/profile/post has been updated.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|------------|------------|---------------------|-------------------|
| Feedback | In the post page comments section click on the dropdown menu and 'edit' icon to edit your existing comment. Make changes to your comment and click 'Update' | Saves the comment, changes time display to 'now' and displays the feedback message to the user | Works as expected |
| Feedback | In the post page comments section click on the dropdown menu and 'bin' icon to delete your existing comment | Deletes the comment and displays the feedback message in its place | Works as expected |
| Feedback | In the profile page click on the dropdown menu and 'edit' icon to edit user profile. Make desired changes and click 'Save' | Updates the profile, displays the feedback message and redirects the user to their profile page after a short delay | Works as expected |
| Feedback | In the profile page click on the dropdown menu and the key icon to change user password. Update the password and click 'Save' | Updates the password, displays the feedback message and redirects the user to their profile page after a short delay | Works as expected |
| Feedback | Within the post page click on the dropdown menu and 'bin' icon to delete the post | Deletes the post, displays the feedback message and redirects the user to the main posts page | Works as expected |

<details><summary>Screenshots</summary>
  <img src="docs/testing/user-story-testing-32-01.png">
  <img src="docs/testing/user-story-testing-32-02.png">
  <img src="docs/testing/user-story-testing-32-03.png">
  <img src="docs/testing/user-story-testing-32-04.png">
  <img src="docs/testing/user-story-testing-32-05.png">
</details>
<br>
<hr>
<br>

### Device testing
The website was tested on the following devices:
- Google Pixel 7
- Apple iMac
- HP 14 Laptop
- Samsung Galaxy Tab S5

### Browser testing
Testing has been carried out on the following browsers:
- Google Chrome
- Firefox
- Microsoft Edge
- Safari


## Bugs
| **Bug** | **Fix** |
| ------- | ------- |
| Upload and No Results icons are displaying too large | Resize original images and reupload |
| Infinite scroll is not displaying in grid format on the profile page | Put the grid format as part of the infinite scroll elements properties rather than its parent div container |


## Config
### Forking the GitHub Repository
1. Go to the GitHub repository
2. Click on Fork button in top right corner
3. You will then have a copy of the repository in your own GitHub account.
   
### Making a Local Clone
1. Go to the GitHub repository 
2. Locate the Code button above the list of files and click it
3. Highlight the "HTTPS" button to clone with HTTPS and copy the link
4. Open commandline interface on your computer
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard 
  ```
  $ git clone https://github.com/mykki92/CI_PP5_SOUNDCHECK.git
  ```
7. Press Enter to create your local clone


## Credits
### Images
- 404, No Results and Upload icons were sourced from [Flaticon.com] (https://www.flaticon.com/)
- Landing page images were sourced from [Pexels.com] (https://www.pexels.com/)
- Sign Up/Sign In page image is owned by myself
- Logo was generated at [Logo.com] (https://logo.com/)

### Code
This project was inspired by the ['Moments'](https://github.com/Code-Institute-Solutions/moments) social media platform project by Code Institute. I have built my own styles and added extra functionality, 

### Acknowledgements
My Code Institute Mentor Mo Shami for his guidance and advice.
Code Institute learning modules and tutor support.
