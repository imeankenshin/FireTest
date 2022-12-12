import { Btn } from "../../assets/components/Button/Button";

export function Home() {
  return (
    <main className="flex justify-center h-screen items-center">
      <section className="w-full">
        <div className="grid mx-6 md:m-0 sm:grid-cols-2 lg:grid-cols-5">
          {/* Profile menu */}
          <div className="sm:col-span-1 shadow-md lg:col-span-2 border-2 border-solid border-neutral-200 p-6 rounded-md sm:mx-3">
            <div className="rounded bg-gray-400 p-2 overflow-hidden -m-4 mb-0 aspect-rect">
              <span className="absolute grid place-items-center select-none text-white font-['SF_Pro'] w-10 h-10 rounded-full text-lg bg-slate-600">
                􀉪
              </span>
            </div>
            <div className="mt-3 child:mt-3">
              <div>
                <h2 className="font-semibold text-3xl">العربي اكسبرس</h2>
                <p className="text-gray-500">@arabian_exp</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-xl">Detail</h3>
                <ul className="ml-4 child:text-sm child:mb-1">
                  <li>場所: place</li>
                  <li>趣味: hobby</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Welcome menu */}
          <div className="border-2 shadow-md sm:col-span-1 lg:col-span-3 border-solid flex flex-col justify-between border-neutral-200 p-6 sm:mx-3 rounded-md">
            <div>
              <h2 className=" font-semibold text-3xl mb-6">مرحبا المستخدم!</h2>
              <p>
                مرحبًا بك في لوحة التحكم الخاصة بك ، والتي يمكنها الوصول إلى
                المحادثة أو المجتمعات وإظهار نفسك!
              </p>
            </div>
            <div className="child:mt-3 md:child:mt-0 md:grid contents sm:grid-cols-2">
              <Btn>Start Random Talkin'</Btn>
              <Btn>Search Comunities</Btn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
