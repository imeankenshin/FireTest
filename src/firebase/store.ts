import { db } from "./firebase.config";
import { doc, setDoc, getDoc } from "firebase/firestore";

export async function createUser(name: string, email: string, uid: string) {
  const reference = doc(db, "users", uid);
  await setDoc(reference, {
    name: name,
    email: email,
    introduce: "これがFirestoreか...悪くないな...",
    iconURL:
      "https://firebasestorage.googleapis.com/v0/b/firetest-a3e5a.appspot.com/o/LinoRino.PNG?alt=media&token=46b0828b-5981-4b07-8ba8-878cca632900",
  })
    .then(() => {
      console.log(
        "Success adding a new user! https://console.firebase.google.com/u/0/project/firetest-a3e5a/firestore/data/~2Fusers"
      );
    })
    .catch((err) => {
      console.error(err);
    });
}
export async function fetchStore() {
  const reference = doc(db, "users", "uET83hw5ZDUJRPiuZiiQ1NGWdc12");
  getDoc(reference)
    .then((data) => console.log(data.data()))
    .catch((err) => console.error(err));
}
