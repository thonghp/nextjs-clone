import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased này là của taiwind để chỉnh cho đẹp */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
