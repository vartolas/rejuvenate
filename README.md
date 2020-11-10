# Welcome to our Rejuvenate website! 💪 🏃 🥗 🍲 🛏️ 

Here at Rejuvenate, we believe in sharing fitness, nutrition, and sleep advice in our journey to good health.

# What Libraries Did We Use?

- MaterialUI (to improve the appearance of the login page)
- Bootstrap (for the navigation bar and add image buttons)
- Chart.js (for creating bar graphs)

# Login Page

![Login Page](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/LoginPage.png)

You can log into the user home page with these credentials:

- username: user
- password: user

or the admin home page with these credentials:

- username: admin
- password: admin

and then clicking on the ```Login``` button.

```Currently, any error messages (e.g. blank field or incorrect credentials) that occur will appear as the contents of the username and password fields are updated, as opposed to after the user presses the login button.```

# Register Page

![Register Page](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/RegisterPage.png)

You can sign up for a new user account with these credentials:

- username: user
- password: user

You can sign up for a new admin account with these credentials:

- username: admin
- password: admin

and then clicking on the ```Register``` button.

```The same "instant error message" problem occurs as the login page.```
```Moreover, there is no "new email" field, confirm password field, or the ability to confirm the user's new password via a confirmation email.```

# Reset Password Page

![Reset Password Page](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/ResetPasswordPage.png)

You can reset a user's password with these credentials:

- username: user
- password: user

You can reset an admin's password with these credentials:

- username: admin
- password: admin

and then clicking on the ```Reset Password``` button.

```The same "instant error message" problem occurs as the login page.```
```Moreover, there is no "current email" field, confirm password field, or the ability to confirm the user's new password via a confirmation email.```

# Home Page

![Create Post Corner](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/CreatePostCorner.png)

In the home page, you can post content in one of the following categories: "General," "Fitness," and "Recipe."
Users also have the option to add a message to their post, or add images to their post. 

```However, user cannot save uploaded photos because we don't have a backend yet.```

![Sample User Post](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/SamplePost.png)

You can like other people's posts, and other people can like your posts as well.
You can also comment on other people's posts, ```although comments don't have the ability to track like counts yet.```

![User Connections](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/UserConnections.png)

On the left, the user can see who they follow, and who follows them. As well, you can unfollow users by clicking on the ```Unfollow``` button.
You can click on one of your followers or followees to visit their profile page.

At the top of the page in the navbar there is a search bar which allows users to search through all users on the plaform to view their profile and follow them.
```However, for now clicking on an user in the drop down of the search bar does not automatically redirect user to the desired user's profile page. The url is changed so going to url and hit enter would redirect the user to the desired profile page.```

# Profile Page

![Profile Picture and Bio](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/ProfilePictureAndBio.png)

![User Favourites](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/UserFavourites.png)

On the left, you can view your profile picture, your bio, and your favourite activities.

![User Pinned Statistics](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/UserPinnedStats.png)

At the top center of the page, you can view sample charts for your favorite statistics.
To see all of your statistics, click on the "See more of your stats" link.

```We haven't figured out how other users can see all of your statistics, or how you can all of another user's statistics yet.```

Below, you can see all of your posts you've made.

![User Profile Connections](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/UserConnectionsFollowing.png)

Lastly, on the right you can see your list of followers and followees, and access their profiles the same way as in the home page.

# Record Statistics Page

![Add New Entry Corner](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/AddNewEntryCorner.png)

Users can add new entries to their data for this statistic by writing valid numbers tot eh input boxes and clicking "add new entry". All changes will be refelected in a local copy of the statistic as they happen so the user can see exactly what their changes look like

![Existing Entries](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/ExistingEntriesCorner.png)

Users can see all of the existing entries for their statistic here, and delete any as necessary.

Once a user is satisfied with their changes, they can click on the "confirm all changes" button to commit their changes to the database (only a placeholder for now) and go to the View Statistics page.

# View Statistics Page

![View Statistics](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/ViewStatistics.png)

Users can view all their statistics as nicely graphed charts on this page, organized by their category.
Click the "+" button to create a new statistic. 
Click on any of the charts to navigate to the record statistics page and edit the data for that chart/statistic.

# Create Statistic Page

![Create New Statistic](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/CreateStatistic.png)

Users can create their own statistic by navigating her via the "+" button on the view statistics page, and filling out the form, note that this is only a placeholder right now because we need to write the newly created statisitc to the database for full functionality.

# Settings Page

![Settings Page](https://github.com/csc309-fall-2020/team01/blob/master/readme_images/SettingsPage.png)

Users can change their username, password, or their profile picture.

```However, user cannot save uploaded photos because we don't have a backend yet.```

# Admin Home Page

(TODO: insert jpg of admin home page)

```Clicking on the top left hand corner where the name of the app is navigates the admin to regular user's home page, instead of admin's home page.```

# Admin Dashboard Page

(TODO: insert jpg of admin dashboard page)
