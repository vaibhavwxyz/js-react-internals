export const metadata = {
  title: "RSC Dashboard",
  description: "React Server Components, streaming & Server Actions playground.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
