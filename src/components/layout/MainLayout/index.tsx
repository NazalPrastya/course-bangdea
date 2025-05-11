import Navbar from "../../commons/molecules/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative mx-auto box-border flex min-h-screen w-full max-w-[1444px] flex-col gap-4 overflow-x-hidden">
      <Navbar />
      {children}
    </main>
  );
}
