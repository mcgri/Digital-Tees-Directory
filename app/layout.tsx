import { Header } from "@/components/Header";
import "./app.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Digital Tees Directory",
  description:
    "Find an extensive collection of local digital businesses, ranging from tech solutions to web development and digital marketing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-800 bg-[#F6F4ED]">
        <div className=" flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow"> {children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
