import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
  description: "",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full flex justify-center items-center">{children}</main>
  );
}
