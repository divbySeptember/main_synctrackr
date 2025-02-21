import Sidenav from "./sidenav/sidenav";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" h-screen bg-contrastBG">
      <nav className=" ">
        <Sidenav />
      </nav>
      {children}
    </section>
  );
}
