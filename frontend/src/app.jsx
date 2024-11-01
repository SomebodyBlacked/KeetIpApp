import TextEditor from "./components/TextEditor";

export default function App() {
  return (
    <>
      <div className="navbar bg-base-300 w-full">
        <div className="mx-2 flex-1 px-2 text-xl font-bold">KeetIp</div>
        <div className="hidden flex-none lg:block">
          <ul className="menu menu-horizontal"></ul>
        </div>
      </div>
      <div className="container self-center py-8 px-8 w-full">
        <TextEditor />
      </div>
    </>
  );
}
