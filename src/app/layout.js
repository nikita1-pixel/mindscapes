import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import AuthProvider from "@/components/providers/AuthProvider";
// import { ThemeContextProvider } from "@/context/ThemeContext";
// import ThemeProvider from "@/providers/ThemeProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MIINDSCAPES",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
{/* some bug with with the theme provider code */}
          {/* <ThemeContextProvider>
            <ThemeProvider> */}
              <AuthProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </AuthProvider>
            {/* </ThemeProvider>
          </ThemeContextProvider> */}

      </body>
    </html>
  );
}