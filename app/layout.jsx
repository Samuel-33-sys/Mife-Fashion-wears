import "./globals.css";

export const metadata = {
  title: "Mife's Wears | Fashion That Defines You",
  description: "Luxury-inspired fashion demo storefront for Mife's Wears.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}