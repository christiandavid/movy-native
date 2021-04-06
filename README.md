
# Movy Native

[![Moove It](https://circleci.com/gh/moove-it/react-native-template.svg?style=svg)](https://app.circleci.com/pipelines/github/moove-it/react-native-template?branch=master)

Movy native is an application based on the [react-native-template](https://github.com/moove-it/react-native-template) made by moove-it. 
From the application you can see trending movies, search for movies, watch trailers and add the ones you like the most to your list.
 
 ## Features
#### Featured Movie
From the home tab we can see a movie that is trending. See the trailer and add it to our favorite list.

#### Trending List
From the home tab we can see a list of trending movies and by clicking on it see more details of the movie, watch the trailer and add it to our favorite list.

#### My List
From the my list tab we can see all the movies that we have marked as favorites. see details and watch the trailer.

#### Search
From the search tab we can search among the most recognized movies

![search3](https://user-images.githubusercontent.com/65427911/113658075-f66a7500-9664-11eb-9a03-80db2c1250da.gif)

#### Dark and Light Mode
The application has a dark and light mode that adapts to the configuration of the mobile device

<img width="451" alt="Screen Shot 2021-04-05 at 11 07 55 PM" src="https://user-images.githubusercontent.com/65427911/113657581-dd14f900-9663-11eb-8188-2b59fd49a92e.png"><img width="464" alt="Screen Shot 2021-04-05 at 11 08 16 PM" src="https://user-images.githubusercontent.com/65427911/113657591-e1d9ad00-9663-11eb-914e-c967e592bad9.png">

#### Compatibility
It is compatible with android and IOS.

  
### IOS screenshots

<img width="456" alt="Screen Shot 2021-04-05 at 11 01 44 PM" src="https://user-images.githubusercontent.com/65427911/113657148-ed78a400-9662-11eb-8a0f-a492275fe226.png"><img width="455" alt="Screen Shot 2021-04-05 at 11 02 50 PM" src="https://user-images.githubusercontent.com/65427911/113657243-244eba00-9663-11eb-8229-8c4a4d825206.png">
<img width="459" alt="Screen Shot 2021-04-05 at 11 04 08 PM" src="https://user-images.githubusercontent.com/65427911/113657379-7099fa00-9663-11eb-89d0-ccc5d048b4cb.png"><img width="454" alt="Screen Shot 2021-04-05 at 11 04 20 PM" src="https://user-images.githubusercontent.com/65427911/113657406-7c85bc00-9663-11eb-8898-72c9731d0f52.png">
<img width="1501" alt="Screen Shot 2021-04-05 at 11 05 17 PM" src="https://user-images.githubusercontent.com/65427911/113657427-87d8e780-9663-11eb-8dbc-bdd3110e15a6.png">


### Android screenshots

![image](https://user-images.githubusercontent.com/65427911/113656232-0da76380-9661-11eb-9a5b-1881bc691cb8.png) ![image](https://user-images.githubusercontent.com/65427911/113656260-1c8e1600-9661-11eb-8121-b36920603687.png) ![image](https://user-images.githubusercontent.com/65427911/113656459-94f4d700-9661-11eb-9cd9-f1b9ceb8932b.png) ![image](https://user-images.githubusercontent.com/65427911/113656492-a3db8980-9661-11eb-819d-0da831d47be1.png) ![image](https://user-images.githubusercontent.com/65427911/113656532-b1910f00-9661-11eb-80f5-280c089bbd51.png)


## Prerequisites
- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies
- [axios](https://github.com/axios/axios) for networking.
- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-localization](https://github.com/stefalda/ReactNativeLocalization) for string localization.![Uploading Screen Shot 2021-04-05 at 11.02.50 PM.png…]()


- [react-native-mmkv-storage](https://github.com/ammarahm-ed/react-native-mmkv-storage#readme) as storage solution.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

## Usage

#### Use Template button
Click the "Use this template" button above the file list, then use the Owner drop-down menu, and select the account you want to own the repository. Creating a repository from a template has the following advantages:

- A repository created from a template starts with a single commit.
- Commits to a repository created from a template do appear in your contribution graph.
- Creating a repository from a template starts a new project quickly.

### Option 1: Using React-Native-Rename
You can start by cloning this repository and using [react-native-rename](https://github.com/junedomingo/react-native-rename). In the current state of this project, it should give you no issues at all, just run the script, delete your node modules and reinstall them and you should be good to go.

Keep in mind that this library can cause trouble if you are renaming a project that uses `Pods` on the iOS side.

After that you should proceed as with any javascript project:
- Go to your project's root folder and run `npm install`.
- Run `npm run ios` or `npm run android` to start your application!

### Option 2: Copy the structure to your project
If you want to roll on your own and don't want to use this as a template, you can create your own project and then copy the `/src` folder (which has all the code of your application) and update your `index.js`.

Keep in mind that if you do this, you'll have to **install and link** all dependencies (as well as adding all the necessary native code for each library that requires it).

## Folder structure
This template follows a very simple project structure:
- `src`: This folder is the main container of all the code inside your application.
  - `actions`: This folder contains all actions that can be dispatched to redux.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `constants`: Folder to store any kind of constant that you have.
  - `controllers`: Folder to store all your network logic (you should have one controller per resource).
  - `localization`: Folder to store the languages files.
  - `navigation`: Folder to store the navigators.
  - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
  - `screens`: Folder that contains all your application screens/features.
      - `Screen`: Each screen should be stored inside its own folder, and inside it a file for its code and a separate one for the styles and tests.
        - `Screen.js`
        - `Screen.styles.js`
        - `Screen.test.js`
  - `selectors`: Folder to store your selectors for each reducer.
  - `storage`: Folder that contains the application storage logic.
  - `store`: Folder to put all redux middlewares and the store.
  - `test-utils`: Folder to store tests-related utilities and components.
  - `theme`: Folder to store all the styling concerns related to the application theme.
  - `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

## Splash screen customization
To customize the splash screen (logo and background color) use the CLI provided in the [official docs](https://github.com/zoontek/react-native-bootsplash#assets-generation).

## Setup environments
Modify the environment variables files in root folder (`.env.development`, `.env.production` and `.env.staging`)

#### Android
A map associating builds with env files is already defined in `app/build.gradle` you can modify or add environments if needed.

For multiple enviroments to work you would need to change `-keep class [YOUR_PACKAGE_NAME].BuildConfig { *; }` on `proguard-rules.pro` file.

#### iOS
The basic idea in iOS is to have one scheme per environment file, so you can easily alternate between them.

To create a new scheme:
- In the Xcode menu, go to Product > Scheme > Edit Scheme
- Click Duplicate Scheme on the bottom
- Give it a proper name on the top left. For instance: "qa"
- Then edit the newly created scheme to make it use a different env file. From the same "manage scheme" window:

Expand the "Build" settings on left
- Click "Pre-actions", and under the plus sign select "New Run Script Action"
- Where it says "Type a script or drag a script file", type: `echo ".env.qa" > /tmp/envfile` replacing `.env.qa` with your file.

## Styleguide
For coding styling we decided to go with ESLint and [React Native community's styleguide](https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community#readme).
