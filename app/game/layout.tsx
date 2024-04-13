export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="h-screen w-full bg-red-500">
        <div>{children}</div>
        <p>Footer</p>
      </main>
    </>
  );
}
