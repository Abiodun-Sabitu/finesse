export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="w-full h-screen  xl:bg-[url('/bg-190.png')] bg-[#ccbca325] bg-[url('/bg-10.png')] bg-cover bg-right-top bg-no-repeat overflow-x-hidden">
        <div className="font-extrabold text-[1.9rem] pt-5 ml-10 text-seaGreen">
          Finesse
        </div>
        {/* Form Wrapper */}
        <section className="flex flex-col justify-center place-items-center px-6  py-28 md:py-20 w-full">
          <div className="lg:w-4/12 md:w-7/12 w-11/12">{children}</div>
        </section>
      </main>
    </>
  );
}
