// REMOVE "example." FROM THE FILENAME AS REPLACE WITH YOUR FIREBASE DETAILS

export const environment = {
    production: false,
    firebaseConfig: {
      apiKey: '${FIREBASE_API_KEY}',
      projectId: '${FIREBASE_PROJECT_ID}',
      storageBucket: '${FIREBASE_STORAGE_BUCKET}',
      messagingSenderId: '${FIREBASE_MESSAGING_SENDER_ID}',
      appId: '${FIREBASE_APP_ID}',
    }
};