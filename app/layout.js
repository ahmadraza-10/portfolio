import "@fontsource-variable/inter";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";

export const metadata = {
  title: "Ahmad Raza | Frontend Developer",
  description: "Frontend Developer specializing in React.js and Next.js. Crafting fast, responsive & beautiful web interfaces.",
  keywords: ["Frontend Developer", "React.js", "Next.js", "Portfolio", "Web Developer"],
  openGraph: {
    title: "Ahmad Raza | Frontend Developer",
    description: "Crafting fast, responsive & beautiful web interfaces.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0a0a] text-white font-inter antialiased">
        {children}
      </body>
    </html>
  );
}