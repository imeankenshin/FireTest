import AppBar from "./assets/components/AppBar/AppBar";
import Sbar_item from "./assets/components/Sbar_item/Sbar_item";

function App() {
  const items: { href: string; title: string, icon: string }[] = [
    { href: "/", title: "home",icon:"🏠" },
    { href: "/", title: "profile", icon:"🕺" },
    { href: "/", title: "setting", icon:"⚙️" },
  ];
  return (
    <>
      <AppBar>jj</AppBar>
      <div className="fle">
        <div className="flex flex-col p-3 mx-2 my-3 w-64">
          {items.map((item, idx) => (
            <Sbar_item href={item.href} title={item.title} icon={item.icon}/>
          ))}
        </div>
        <main></main>
      </div>
    </>
  );
}

export default App;
