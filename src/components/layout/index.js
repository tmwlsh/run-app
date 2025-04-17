import Header from "../header";

export default function Layout({children}) {
  return (
    <div className="max-w-5xl mx-auto p-4 rounded-sm pb-20">
      <Header />
      <div className="max-w-2xl mx-auto">
        {children}
      </div>
    </div>
  );
}
