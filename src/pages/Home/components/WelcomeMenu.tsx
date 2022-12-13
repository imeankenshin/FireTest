import { Btn } from "../../../assets/components/Button/Button";

interface WelcomeMenu {
  login: boolean;
}

export default function WelcomeMenu(props: WelcomeMenu) {
  return (
    <div className="border-2 shadow-md sm:col-span-1 lg:col-span-3 border-solid flex flex-col justify-between border-neutral-200 p-6 sm:mx-3 rounded-md">
      <div>
        <h2 className=" font-semibold text-3xl mb-6">Hello, user!</h2>
        <p>إذا كنت تقرأ هذا ، فقد قمت بترجمة جوجل ، أليس كذلك؟</p>
      </div>
      <div className="child:mt-3 md:child:mt-0 grid md:grid-cols-2">
        {props.login ? (
          <>
            <Btn>Start Random Talkin'</Btn>
            <Btn>Search Comunities</Btn>
          </>
        ) : (
          <a href="/login">login</a>
        )}
      </div>
    </div>
  );
}
