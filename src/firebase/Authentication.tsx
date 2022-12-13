import { useContext, useReducer, createContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { currentUser } from "./auth";

// 認証状態を管理するためのコンテキストを作成
const AuthenticationContext: React.Context<undefined | any> =
  createContext(undefined);

// コンテキストの初期状態
const initialState: { logged: undefined | any } = {
  logged: undefined,
};

// コンテキストの更新ルール
const redcure = (state: any, action: any) => {
  switch (action.type) {
    case "logout":
      return {
        ...state,
        logged: false,
      };
    case "login":
      return {
        ...state,
        logged: true,
      };
    default:
      throw new Error("reducer undefined action type");
  }
};

// コンテキストのを他のコンポーネントに提供するためのプロパイダーを定義
export const AuthProvider: ({
  children,
}: {
  children: React.ReactNode;
}) => JSX.Element = ({ children }) => {
  const [state, dispatch] = useReducer(redcure, initialState);
  // 初期レンダリング時にクライアントが保持しているデータを元に認証情報を取得する
  useEffect(() => {
    (async () => {
      const user = await currentUser();
      if (user) {
        // 認証情報があれば、ログイン状態にする
        dispatch({ type: "login" });
      } else {
        // 認証情報がなければ、未ログイン状態にする
        dispatch({ type: "logout" });
      }
    })();
  }, []);
  return (
    <AuthenticationContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

// 認証用のフックを定義
export const useAuth = () => {
  const context = useContext(AuthenticationContext);
  return context;
};

// 認可用のフックを定義
export const useAuthorization = () => {
  const { state } = useAuth();

  return { logged: state.logged, loading: state.logged === undefined };
};

// ログイン確認を行うコンポーネント
const ForbiddenComponent = () => {
  const { logged, loading } = useAuthorization();

  return (
    <>{loading ? <p>loading......</p> : !logged && <Navigate to="/login" />}</>
  );
};

// ユーザー認証が必要なコンポーネントをラップするコンポーネント
// ラップされた子コンポーネントは、ログイン状態でないとレンダリングされなくなる
export const Authoraization = (children: JSX.Element) => {
  const { logged } = useAuthorization();
  return <>{logged ? children : <ForbiddenComponent />}</>;
};
