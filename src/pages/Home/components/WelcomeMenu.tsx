import { Btn } from "../../../assets/components/Button/Button";
import { user } from "../../../firebase/auth";
import { Link } from "react-router-dom";

interface WelcomeMenu {
  login: boolean;
}

export default function WelcomeMenu(props: WelcomeMenu) {
  return (
    <div className="flex min-h-[18rem] flex-col justify-between rounded-md bg-slate-800 p-6 shadow-md transition-all sm:mx-3">
      <div>
        <h2 className=" mb-6 text-3xl font-semibold">
          Hello, {user != undefined ? user.displayName : `new one`}!
        </h2>
        <p>إذا كنت تقرأ هذا ، فقد قمت بترجمة جوجل ، أليس كذلك؟</p>
      </div>
      <div className="grid child:mt-3 md:grid-cols-2 md:child:mt-0">
        {props.login ? (
          <>
            <Btn
              onClick={(e) => {
                console.log(e);
              }}
            >
              Start Random Talkin'
            </Btn>
            <Btn>Search Comunities</Btn>
          </>
        ) : (
          <Link to="/login">login</Link>
        )}
      </div>
    </div>
  );
}
