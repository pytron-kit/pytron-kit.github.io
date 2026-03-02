
import "./globals.css";
import Navbar from '../components/Navbar';
import GlobalMobileNav from '../components/GlobalMobileNav';
import Footer from '../components/Footer';

export const metadata = {
  title: "Pytron-kit",
  description: "Pytron desktop applications toolkit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Lobster&display=swap" rel="stylesheet" />
        <meta name="google-site-verification" content="yB5w9WFiUfG90XacTiz3EZHSqfULOnx1qJvHa76QFUw" />
      </head>
      <body>
        <div id="portal-root"></div>
        <div className="app-container">
          <div className="background-beam" />
          <Navbar />
          <GlobalMobileNav />
          {children}
        </div>
      </body>
    </html>
  );
}
