import { Firebase_auth } from "./firebase.config";
import {
  connectAuthEmulator,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import { useReducer } from "react";

export async function login(email: string, password: string) {
  try {
    const user = await signInWithEmailAndPassword(
      Firebase_auth,
      email,
      password
    );
    return user;
  } catch (e) {
    console.error(e);
  }
}

export async function singup(email: string, password: string) {
  try {
    const user = await createUserWithEmailAndPassword(
      Firebase_auth,
      email,
      password
    );
    return user;
  } catch (e) {
    console.error(e);
  }
}

export async function currentUser() {
  try {
    // クライアントが保持しているログイン状態が有効であれば、ユーザーの認証情報が返される
    const user: User = await new Promise((res, rej) => {
      onAuthStateChanged(Firebase_auth, (user) => {
        if (user) {
          res(user);
        } else {
          rej(user);
        }
      });
    });
    return user;
  } catch {
    return undefined;
  }
}

// ログアウト処理
export async function logout() {
  return await Firebase_auth.signOut();
}
