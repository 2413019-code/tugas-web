import Account from "./component/Account";
import General from "./component/General";
import MainMenu from "./component/main-menu";

export default function Navbar() {
  return (
    <div className="h-screen p-8">
      <div className="w-75 h-100 bg-blue-900 rounded-xl text-white p-8 flex flex-col gap-4">
        <div className="flex items-center justify-between font-bold">
          <h2 className="text-2xl">CodingLab</h2>
        </div>
       <MainMenu/>
       <General/>
       <Account/>
      </div>
    </div>
  );
}
