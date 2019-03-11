# vue-chat
Front-end only real-time chat app using VueJS and Firebase. Also includes an example of writing a Firebase server-side function. The function simply deletes new messages in the messages collection if the collection size > 10 documents.

## Live Demo  
This app is **[Live](https://gifted-mayer-f7b5c0.netlify.com)** on [Netlify](https://www.netlify.com/). It auto-builds from this repository and serves the app which is already connected to Firebase.

## Firebase  
[Firebase project link](https://console.firebase.google.com/project/vue-chat-65c52/overview). Use the firebase CLI to interact with firebase:

`firebase init #already performed to link project to firebase; repeat for new project`  
`firebase deploy --only functions #upload server-side code in functions/ to Firebase`

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
