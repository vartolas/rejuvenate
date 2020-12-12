# Welcome to our Rejuvenate website! 💪 🏃 🥗 🍲 🛏️ 

Website URL: https://rejuvenate309.herokuapp.com

Here at Rejuvenate, we believe in sharing fitness, nutrition, and sleep advice in our journey to good health.

## What Libraries Did We Use?

### phase 1
- MaterialUI (to improve the appearance of the login page)
- Bootstrap (for the navigation bar and add image buttons)
- Chart.js (for creating bar graphs)

### phase 2
- Mongoose, MongoDB, Cloudinary (for all our database operations)
- Express session (for maintaining user log in sessions)
- Body parser (for json middleware parsing of requests)

# Login Page

![Login Page](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/LoginPage.png)

You can log into the user home page with these credentials:

- username: user
- password: user

or the admin home page with these credentials:

- username: admin
- password: admin

and then clicking on the ```Login``` button.

In addition, for phase 2 users with existing accounts can login in using their own credentials.

# Register Page

![Register Page](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/RegisterPage.png)

You can sign up for a new user account with these credentials:

- username: user
- password: user

You can sign up for a new admin account with these credentials:

- username: admin
- password: admin

and then clicking on the ```Register``` button. If your registration is successful you'll get this message:

![Registration Success](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/SuccessfullyRegisteredUser.png)

otherwise you get an error saying that this username is already taken.

In addition, for phase 2 users can create new accounts by specifying their first and last name, and their new username and password.

# Reset Password Page

```We had to remove access to the reset password page since we couldn't figure out a way to save new passwords into our user account database.```

# Home Page

![Create Post Corner](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/CreatePostCorner.png)

In the home page, you can post content in one of the following categories: "General," "Fitness," "Recipe," and "Sleep."
Users also have the option to add a message to their post, or add images to their post.

![Upload a Post](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/UploadedImage.png)

Then you can press ```Post``` to create a new post, along with any image.

![Sample User Post](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/SamplePost.png)

Users can like all posts, and comment on any post., ```although comments don't have the ability to track like counts yet.```

On the left, the user can see who they follow, and who follows them. As well, you can unfollow users by clicking on the ```Unfollow``` button.
You can click on one of your followers or followees to visit their profile page.

![User Followers](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/UserConnectionsFollowers.png)

![User Follwoing](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/UserConnectionsFollowing.png)

At the top of the page in the navbar there is a search bar which allows users to search through all users on the plaform to view their profile and follow them.
```However, for now clicking on an user in the drop down of the search bar does not automatically redirect user to the desired user's profile page. The url is changed so going to url and hit enter would redirect the user to the desired profile page.```

# Profile Page

![Profile Picture and Bio](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/ProfilePictureAndBio.png)

![User Favourites](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/UserFavourites.png)

On the left, you can view your profile picture, your bio, and your favourite activities.
```However, users can no longer see their pinned statistics, nor click on them to go to the View Statistics page for phase 2.```
```We also haven't figured out how other users can see all of your statistics, or how you can all of another user's statistics yet.```

In the middle of the screen, you can see all of your posts you've made.

![User Profile Connections](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/UserConnectionsFollowing.png)

Lastly, on the right you can see your list of followers and followees, and access their profiles the same way as in the home page.

# Record Statistics Page

![Add New Entry Corner](https://github.com/csc309-fall-2020/team01/blob/CreateStatisticView/readme_images/AddNewEntryCorner.png)

Users can add new entries for existing statistics by entering numbers into these input boxes and clicking "Add New Entry."
This creates a local copy of the updated statistics. To save these changes into our database, click "Confirm All Changes." Afterwards, you'll see your updated statistics data.

![Existing Entries](https://github.com/csc309-fall-2020/team01/blob/CreateStatisticView/readme_images/ExistingEntriesCorner.png)

At the bottom of the screen, users can see existing values for their statistic, and delete any as necessary.
Once a user is satisfied with their changes, they can click on the "Confirm All Changes" button to commit their changes to the database and go back to the View Statistics page.

# View Statistics Page

![View Statistics](https://github.com/csc309-fall-2020/team01/blob/CreateStatisticView/readme_images/ViewStatistics.png)

Users can view graphs of all of their statistics on this page, organized by category.
To edit a statistic's value, click on the statistic you want to change.

# Create Statistic Page

![Create New Statistic Button](https://github.com/csc309-fall-2020/team01/blob/CreateStatisticView/readme_images/CreateNewStatisticsButton.png)

Users can create new statistics by clicking on the "Create New Statistics" button at the bottom of the page.

![Create New Statistic](https://github.com/csc309-fall-2020/team01/blob/CreateStatisticView/readme_images/CreateStatistic.png)

Then, enter in the title, category, and label names for the x-axis and y-axis of this statistic.
When you're done, click on the "Create New Statistic" button to save this new statistic to our database.

# Settings Page

![Settings Page](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/SettingsPage.png)

Users can change their username, password, or their profile picture.

```However, user cannot save uploaded photos because we don't have a backend yet.```

# Admin Home Page

```Clicking on the top left hand corner where the name of the app is navigates the admin to regular user's home page, instead of admin's home page.```

# Admin Dashboard Page

In the admin dashboard page, the admin can search through all users and posts, and delete unwanted ones. 
To search for a post, the admin has to enter the prefix (first n characters) of the post content or its comment.

```For now the deletion button does not work since we cannot delete any hardcoded data. This can be fixed during phase 2.```
