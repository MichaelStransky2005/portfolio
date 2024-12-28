export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <div className="stars absolute top-0 left-0 w-full h-full z-0"></div>
      <div className="twinkling absolute top-0 left-0 w-full h-full z-0"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white/50 text-4xl">Michael Stránský</h1>
      </div>
    </main>
  );
}
