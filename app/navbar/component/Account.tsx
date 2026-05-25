export default function Account() {
  return (
    <div>
         <h2 className="text-amber-50">Account</h2>
      <div className="flex items-center gap-2">
        <img src="/user-circle.svg" alt="Design" className="w-5 h-5" />
        <p>Profile</p>
      </div>
      <div className="flex items-center gap-2">
        <img
          src="/settings.svg"
          alt="Design"
          className="w-5 h-5"
        />
        <p>Settings</p>
      </div>
    </div>
  );
}
