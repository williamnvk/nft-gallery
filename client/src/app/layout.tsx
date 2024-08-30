import type { Metadata, Viewport } from "next";

import ThemeProvider from "@/providers/ThemeProvider";

import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { UserSessionProvider } from "@/providers/UserProvider";

const metaDataTitle = process.env.NEXT_PUBLIC_SITE_NAME || "";
const metaDataDescription =
  "Descubra o Futuro da Arte e Colecionáveis Digitais";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "dark",
  viewportFit: "auto",
};

export const metadata: Metadata = {
  title: {
    default: metaDataTitle,
    template: `%s | ${metaDataTitle}`,
  },
  description: metaDataDescription,
  applicationName: metaDataTitle,
  referrer: "origin-when-cross-origin",
  keywords: "nft,crypto,blockchain",
  publisher: metaDataTitle,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: metaDataTitle,
    description: metaDataDescription,
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: metaDataTitle,

    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <body>
        <UserSessionProvider>
          <ThemeProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </UserSessionProvider>
      </body>
    </html>
  );
}
