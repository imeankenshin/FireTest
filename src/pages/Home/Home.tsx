import { Btn } from "../../assets/components/Button/Button";
import { currentUser } from "@fb/auth";
import { User } from "firebase/auth";
import Profile from "./components/Profile";
import WelcomeMenu from "./components/WelcomeMenu";
import { Dialog } from "@assets/components/Dialog/Dialog";
import { createUser, fetchStore } from "@fb/storage";

const user: User | undefined = await currentUser();

export function Home() {
  console.log(user);
  fetchStore();
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <div className="mx-6 flex place-items-center md:m-0">
        <Profile />
        {/* Welcome menu */}
        <WelcomeMenu login={user != undefined} />
        <Dialog isOpen={true}>
          <div className="w-screen max-w-xl">
            <h1 className="mb-4 border-b-2 border-gray-300 pb-2 text-3xl font-semibold">
              Feature of v3.7.15
            </h1>
            <p>
              Hi, lazy nerds!👋 We are so exited about today's awesome update!
            </p>
            <h2 className="my-3 text-2xl font-semibold">What's new?</h2>
            yoyou've got a friedn of me.
            <ul className="list-disc decoration-clone p-2 pl-6">
              <li>first</li>
              <li>second</li>
              <li>third</li>
              <li>forth</li>
            </ul>
            <Btn>hello wolrd</Btn>
          </div>
        </Dialog>
      </div>
    </main>
  );
}
