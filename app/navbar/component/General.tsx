export default function Account() {
  return (
    <div>
      <h2 className="text-amber-50">General</h2>
      <div className="flex items-center gap-2 bg-white text-black">
        <img src="/File.svg" alt="Design" className="w-5 h-5" />
        <p>Projects</p>
      </div>
      <div className="flex items-center gap-2">
        <img src="/user.svg" alt="Design" className="w-5 h-5" />
        <p>Groups</p>
      </div>
      <div className="flex items-center gap-2">
        <img src="/flag.svg" alt="Design" className="w-5 h-5" />
        <p>Report</p>
      </div>
    </div>
  );
}
