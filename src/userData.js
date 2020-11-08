const favouriteThings = {
  'Bananas': 'https://pixy.org/src/442/thumbs350/4428098.jpg',
  'Hockey': 'https://pixy.org/src/428/4282288.jpeg',
  'Salads': 'https://pixy.org/src/419/4197778.jpeg',
  'Jogging': 'https://pixy.org/src/86/865694.jpg',
  'Skiing': 'https://pixy.org/src/107/1074423.jpg',
  'Tennis': 'https://pixy.org/src/183/thumbs350/1838426.jpg',
  'Push-ups': 'https://pixy.org/src/183/thumbs350/1830402.jpg',
  'Biking': 'https://pixy.org/src/336/thumbs350/3368963.jpg',
  'Basketball': 'https://pixy.org/src/76/760790.jpg',
  'Smoothies': 'https://pixy.org/src2/582/5823753.jpg'
}

// The key of the user whose profile page was last displayed (or is otherwise being displayed).
const currentUser = 0;

// The user with key 0 is the logged-in user.
const users = {
  0: {
    firstName: 'John',
    lastName: 'Doe',
    username: 'user',
    profilePic: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
    bio: "Hi, my name is John and I like to run. Bananas are my favourite fruit because they're easy to pack.",
    favouriteThings: ['Bananas', 'Jogging', 'Hockey', 'Salads'],
    posts: [
        {
          tag: 'Advice/Fitness',
          content: {
            text:'What do you guys think of my new kicks?!',
            have_pic: true,
            picture:'https://www.womenshealthsa.co.za/wp-content/uploads/2019/03/PUMA-Hybrid-NX-TZ.jpg'
          },
          uid: 0,
          comments: [
            {uid: 1, comment: "Looks like you figured out how to post a pic!"},
            {uid: 2, comment: 'Fresh! Where from? I might have to get myself a pair!'}
          ],
          likes: [1, 2]
        },
        {
          tag: 'Help',
          content: {
            text:'How do I post a picture?! I NEED to show off my new kicks!!!!!',
            have_pic: false,
            picture:''
          },
          uid: 0,
          comments: [
            {uid: 0, comment: "Click on 'add image' after clicking the '+' icon on the home page!"}
          ],
          likes: [3]
        }
      ],
    following: [1, 3],
    followers: [1, 3],
    numFollowing: 2,
    numFollowers: 2
  },
  1: {
    firstName: 'Cathy',
    lastName: 'Jones',
    username: 'basketballfan23',
    profilePic: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
    bio: "‘You must expect great things of yourself before you can do them.’ - MJ",
    favouriteThings: ['Basketball', 'Push-ups'],
    posts: [
        {
          tag: '',
          content: {
            text: 'Hitting the gym early todayyy!',
            have_pic: true,
            picture:'https://pixy.org/src2/587/5879220.jpg'
          },
          uid: 1,
          comments: [
            {uid: 0, comment: "I'm still in bed lol"}
          ],
          likes: [0]
        }
      ],
    following: [0, 2, 3],
    followers: [0, 3],
    numFollowing: 3,
    numFollowers: 2
  },
  2: {
    firstName: 'Jim',
    lastName: 'Lu',
    username: 'jimmmmlu',
    profilePic: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
    bio: "bikes r life",
    favouriteThings: ['Biking'],
    posts: [],
    following: [3],
    followers: [2, 3],
    numFollowing: 2,
    numFollowers: 1
  },
  3: {
    firstName: 'Nikolas',
    lastName: 'Karlsson',
    username: 'nikolas.karlsson',
    profilePic: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
    bio: "This app really motivates me to stay fit! I use it everyday! :)",
    favouriteThings: ['Hockey', 'Skiing', 'Smoothies'],
    posts: [
        {
          tag: '',
          content: {
            text: "I'm skiing with the boys todayyyy",
            have_pic: true,
            picture:'https://pixy.org/src2/595/5950971.jpg'
          },
          uid: 3,
          comments: [
            {uid: 0, comment: "Im still in bed lol"},
            {uid: 1, comment: "Cool!"},
            {uid: 3, comment: "So much snow... where r u?"}
          ],
          likes: [0, 1, 2, 3]
        },
        {
          tag: '',
          content: {
            text: "1 banana, 1 apple, 250mL cashew milk, 2 kiwis, 1 carrot, handful of berries - soooo gooood!!!",
            have_pic: true,
            picture:'https://pixy.org/src/14/141396.jpg'
          },
          uid: 3,
          comments: [
            {uid: 0, comment: "great - now i want one"},
            {uid: 3, comment: "We should grab smoothies some time!"}
          ],
          likes: [0, 2, 3]
        }
      ],
    following: [0, 1, 2, 3],
    followers: [0, 1, 2, 3],
    numFollowing: 4,
    numFollowers: 4
  },
  4: {
    firstName: 'Jennifer',
    lastName: 'Jones',
    username: 'jennifer9375082',
    profilePic: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
    bio: "",
    favouriteThings: [],
    posts: [],
    following: [],
    followers: [],
    numFollowing: 0,
    numFollowers: 0
  }
}
