import type { Metadata } from "next";
import { Barlow, Source_Sans_3 } from "next/font/google";
import { Header, Footer } from "@/components/site";
import "./globals.css";
const display = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "Frutas e Legumes | Da Guiné-Bissau para o mundo",
    template: "%s | Frutas e Legumes",
  },
  description:
    "Produção, conservação e comercialização de frutas tropicais e hortícolas. Conheça os produtos e a agroindústria da Frutas e Legumes Guiné-Bissau, SARL.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Frutas e Legumes Guiné-Bissau, SARL",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body className={`${display.variable} ${body.variable}`}>
        <a href="#conteudo" className="skip-link">
          Saltar para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
