import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Provider from "./context/provider";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
