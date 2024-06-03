import Sidenav from "../sidenav/sidenav";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className="">
        <Sidenav />
      </nav>
      {children}
    </section>
  );
}
