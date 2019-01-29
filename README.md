# Pixprience+

Pixprience is an anti-social media web application that allows users to document their normal everyday life by uploading photos along with a note, title, and location. There are no likes, comments, followers or following other people. Pixprience is your life. your real life. Uncurated. Unfollowed. Unfiltered. You are able to visually see your memories on either a timeline or a map. You can also see the community images.
Link: [www.pixperia.com](https://frozen-crag-27662.herokuapp.com/)

Code Refactored by Ryan Kim.

**Code refactor** includes making the site mobile responsive, code clean up, refactoring and switching from storing images in base64 format on mongoDB to saving a file url on mongoDB that reference the image firebase cloud storage.

Original Team Repo Link [https://github.com/Codevengers/PixprienceV2](https://github.com/Codevengers/PixprienceV2)

## Features

Current Supported Features Include:
* Create an account with us through passport!
* Upload your photos, along with title and notes!
* View your photos on a timeline!
* View your photos on a map!
* View the photos of the community!

### Installing

If you would like to run this application locally, clone this repo. Go to command line and type in:
```
git clone `git@github.com:roverkim/PixprienceV2.git`
```

You will need to install the modules you need. Simply go to your command line and type in:
```
yarn install
```
Build the react app. type:
```
yarn build
```
To start the app from inside your cloned project, type:
```
yarn start
```
Now go to your browser, and start uploading photos!!


## Technologies

| Tool   | Purpose|
| ------------- | ------------- |
| [Passport] |Allows users to sign up or sign in using their email! |
| [MongoDB] | Allows us to store our user and photo data |
| [Firebase] | Allows us to store image data |
| [Materialize]| Was used for the modals |
| [Particle Animations] | About page and community page background animations |
| [SVG] | Our Logo! |
| [React.js] | JavaScript framework|



## Future Updates

1. Allow users to log in through facebook and twitter
2. Create a smart search where users can ask the application complex questions like "where did I eat last week"
3. Expand this smart search to accept voice input as well as text input
4. Extraction of more data from photos using google vision
5. Allow users to take photos from the mobile site instead of re-uploading


## Built by: Team Pixprience;

* **Ryan Kim** - [roverkim](https://github.com/roverkim)
* **Paige Low** - [sk8asd123](https://github.com/sk8asd123)
* **Kiwon Nam** - [KiwonNam2016](https://github.com/KiwonNam2016)
* **Nadia N-M** - [nadianm](https://github.com/nadianm)
* **Babak** - [BabakShah](https://github.com/BabakShah)
