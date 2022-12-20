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
    <main className="flex h-screen w-full items-center justify-center">
      <div className="mx-6 flex place-items-center md:m-0">
        <Profile />
        {/* Welcome menu */}
        <WelcomeMenu login={user != undefined} />
      </div>
    </main>
  );
}
