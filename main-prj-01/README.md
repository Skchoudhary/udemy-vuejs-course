This project was developed during the Udemy Vue.js course. To run the project locally, it is necessary to create a Firebase project and update the WebAPI for the login and signout URLs, which are located in the `src/store/auth/actions.js` file. Additionally, the Auth rules in the Firebase settings need to be updated to reflect the following JSON:

```json

{
  "rules": {
    "coaches": {
      ".read": true,
      ".write": "auth != null"
    },
    "requests": {
      ".read": "auth != null",
      ".write": true
    }
  }
}
```
By following these steps, the project can be set up to run seamlessly on Firebase, allowing for effective and efficient development.
