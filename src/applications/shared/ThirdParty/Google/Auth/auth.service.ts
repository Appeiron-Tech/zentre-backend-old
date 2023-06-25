// import { Injectable } from '@nestjs/common'
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from 'firebase/auth'

// @Injectable()
// export class AuthService {
//   async CreateUserWithGoogle() {
//     const auth = getAuth()
//     const provider = new GoogleAuthProvider()
//     provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
//     auth.useDeviceLanguage()
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result)
//         const token = credential?.accessToken
//         // The signed-in user info.
//         const user = result.user
//         // IdP data available using getAdditionalUserInfo(result)
//         console.info(user)
//       })
//       .catch((error) => {
//         const errorCode = error.code
//         const errorMessage = error.message
//         const email = error.customData.email
//         const credential = GoogleAuthProvider.credentialFromError(error)
//       })
//   }

//   async CreateUserWithEmailPassword(username: string, password: string) {
//     const auth = getAuth()
//     createUserWithEmailAndPassword(auth, username, password)
//       .then((userCredential) => {
//         const user = userCredential.user
//         console.info('Logged In')
//         console.info(user)
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code
//         const errorMessage = error.message
//       })
//   }

//   async signInWithEmailPassword(username: string, password: string) {
//     const auth = getAuth()
//     // signInWithEmailAndPassword(auth, username, password)
//     //   .then((userCredential) => {
//     //     const user = userCredential.user;
//     //     console.info('Logged In')
//     //     return user
//     //   })
//     //   .catch((error) => {
//     //     const errorCode = error.code;
//     //     const errorMessage = error.message;
//     //     throw(error)
//     //   });
//     const userCredential = await signInWithEmailAndPassword(auth, username, password)
//     // const user = JSON.stringify(userCredential.user);
//     return userCredential.user
//   }
// }
