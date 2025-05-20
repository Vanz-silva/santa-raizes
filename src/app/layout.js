import "./globals.css"; // Ajuste o caminho de acordo com a localização do arquivo

export const metadata = {
  title: "Santa Raizes",
  description: "Cuidando da natureza com carinho e dedicação.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
