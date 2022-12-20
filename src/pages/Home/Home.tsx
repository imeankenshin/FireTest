import { Btn } from "../../assets/components/Button/Button";
import { useAuth } from "../../firebase/Authentication";
import { currentUser } from "../../firebase/auth";
import { User } from "firebase/auth";
import Profile from "./components/Profile";
import WelcomeMenu from "./components/WelcomeMenu";

const user: User | undefined = await currentUser();

export function Home() {
  console.log(user);

  return (
    <main className="flex w-full justify-center h-screen items-center">
      <div className="flex mx-6 md:m-0 place-items-center">
        <Profile />
        {/* Welcome menu */}
        <WelcomeMenu login={user != undefined} />
      </div>
    </main>
  );
}
