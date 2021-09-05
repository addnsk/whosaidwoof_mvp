import { initializeApp } from "firebase/app";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export const getNames = async () => {
  return await getDoc(doc(firestore, "whosaid", "names"));
};

export const addNameToStat = async (
  gender: string,
  name: string,
  date: number
) => {
  return await updateDoc(doc(firestore, "whosaid", "stat"), {
    [gender]: arrayUnion({ name, date }),
  });
};

export const setExpire = async <T>(obj: T, gender: string) => {
  await updateDoc(doc(firestore, "whosaid", "names"), {
    [gender]: arrayRemove(obj),
  });
  await updateDoc(doc(firestore, "whosaid", "names"), {
    [gender]: arrayUnion({
      ...obj,
      expire: new Date(Date.now() + 2.6e8).getTime(),
    }),
  });
};
