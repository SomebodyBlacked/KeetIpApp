import ChangeThemeButton from "./components/ChangeThemeButton";
import TextEditor from "./components/TextEditor";

export default function App() {
  return (
    <>
      <div className="navbar bg-base-300 w-full">
        <div className="mx-2 flex-1 px-2 text-xl font-bold">KeetIp</div>
        <ChangeThemeButton />
      </div>
      <div className="py-8 px-8">
        <TextEditor />
      </div>
    </>
  );
}
