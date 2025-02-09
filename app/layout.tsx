import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Layout from "../components/Layout";

export const metadata = {
  title: "Navindo App",
  description: "PT Navindo Maritim Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Layout>{children}</Layout>
        </MantineProvider>
      </body>
    </html>
  );
}
