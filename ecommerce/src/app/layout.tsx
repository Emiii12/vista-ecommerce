import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Provider from "@/utils/Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Provider >
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
