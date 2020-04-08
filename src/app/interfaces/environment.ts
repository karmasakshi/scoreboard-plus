export interface Environment {
  firebaseConfiguration: {
    appId: string;
    authDomain: string;
    databaseURL: string;
    measurementId: string;
    messagingSenderId: string;
    projectId: string;
    storageBucket: string;
  };
  isProduction: boolean;
}
