# Giftwrap

## Link 

[Giftwrap](https://giftwrap-app.vercel.app/)

## Screenshot
![Screenshot](https://user-images.githubusercontent.com/65912593/105913612-19d8ca00-5ffb-11eb-851b-bc519e4d689e.png)

## Server/Backend 
[Link to server](https://github.com/Matt-Moo16/giftwrap-app-server)

### API Endpoints

#### /auth
To use this endpoint /login is also needed to make the api call, and this endpoint is used to login users. This endpoint has only one CRUD operation and that is POST. No authorization needed for this endpoint. 

#### /users
This endpoint has one CRUD operation and this is POST. No authorization is needed for the endpoint. This endpoint is used to sign up users and add them to the /auth/login endpoint. 

#### /names
The /names endpoint uses both GET and POST CRUD operations. Authorization is needed for the POST operation of the endpoint. The GET operation will get all the names and the POST will add a new name to the list of names. 

##### /names/:name_id 
This endpoint uses both GET and DELETE CRUD operations. Authorization is needed for both of these operations for this endpoint. The GET operation will get a certain name after a name id is inputed as a paramater. The DELETE operation will delete a name by getting the name id. 

#### /gifts
The /gifts endpoint uses both GET and POST CRUD operations. Authorization is needed for the POST operation of the endpoint. The GET operation will return a list of all the gifts. The POST operation will add a new gift to the list of gifts.

##### /gifts/:gift_id
This endpoint uses both GET and DELETE operations. Authorization is needed for both of the operations for this endpoint. The GET will get a certain gift after a gift id is inputed as a paramater. The DELETE operation will delete a gift using the gift id. 

## About/Synopsis
Giftwrap is an app that allows users to keep track of gifts that they want to purchase for their family or friends. Users can create lists to represent the people they want to gift to and add links from across the web. When the links are added as gifts, Giftwrap does the rest by taking the OG tags from the link to display product information at a glance for the user. 

## Technologies Used
* React
* JavaScript
* CSS
* HTML
* Node
* PostgreSQL

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

