import AppBar from "./assets/components/AppBar/AppBar";
import Sbar_item from "./assets/components/Sbar_item/Sbar_item";

function App() {
  const items: { href: string; title: string }[] = [
    { href: "/", title: "home" },
    { href: "/", title: "profile" },
  ];
  return (
    <>
      <AppBar>jj</AppBar>
      <div className="fle">
        <div className="flex flex-col p-3 mx-2 my-3 w-60">
          {items.map((item, idx) => (
            <Sbar_item href={item.href} title={item.title} />
          ))}
        </div>
        <main></main>
      </div>
    </>
  );
}

export default App;
