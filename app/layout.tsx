import "./globals.css";

export const metadata = {
  title: "Bishal Patra | Product Portfolio",
  description: "Product Management and AI portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}