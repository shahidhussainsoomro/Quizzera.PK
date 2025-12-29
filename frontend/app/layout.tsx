import "./styles.css";

export const metadata = {
  title: "Quizzera.pk",
  description: "Pakistan-focused MCQs and exam preparation platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
