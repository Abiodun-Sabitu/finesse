export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="w-full h-screen overflow-x-hidden overflow-y-hidden">
        <section className="flex">
          <div className="md:static w-full absolute bg-[#f5efe614]">
            <header>
              <div className=" font-extrabold text-2xl ml-10 mt-5 text-[#259062]">
                Finesse
              </div>
            </header>
            {children}
          </div>
          <div className="w-full sm:bg-[url('/finesse_login_pattern.png')]  bg-[url('/finesse_login_pattern_mobile.png')] h-screen bg-no-repeat bg-right "></div>
        </section>
      </main>
    </>
  );
}
