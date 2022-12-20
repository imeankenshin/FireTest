export default function AppBar(props: any): JSX.Element {
  return (
    <header>
      <nav className="fixed top-0 left-0 z-50 flex w-full justify-between bg-gradient-to-b from-white via-white to-transparent py-4 px-6">
        <p className="text-xl font-semibold">{props.title}</p>
        <div>{props.children}</div>
      </nav>
    </header>
  );
}
