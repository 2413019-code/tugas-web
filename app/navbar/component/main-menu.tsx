export default function MainMenu() {
  return (
    <div>
      <h2 className="text-amber-50">Main Menu</h2>
      <div className="flex items-center gap-2">
        <img src="/layout-dashboard.svg" alt="Design" className="w-5 h-5" />
        <p>Dashboard</p>
      </div>
      <div className="flex items-center gap-2">
        <img src="/analyze.svg" alt="Design" className="w-5 h-5" />
        <p>Overview</p>
      </div>
      <div className="flex items-center gap-2">
        <img
          src="/brand-google-analytics.svg"
          alt="Design"
          className="w-5 h-5"
        />
        <p>Analytic</p>
      </div>
    </div>
  );
}
