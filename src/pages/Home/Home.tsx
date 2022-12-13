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
    <main className="flex justify-center h-screen items-center">
      <section className="w-full">
        <div className="grid mx-6 md:m-0 sm:grid-cols-2 lg:grid-cols-5">
          <Profile userName={user?.displayName} email={user?.email} />
          {/* Welcome menu */}
          <WelcomeMenu login={user != undefined} />
        </div>
      </section>
    </main>
  );
}
