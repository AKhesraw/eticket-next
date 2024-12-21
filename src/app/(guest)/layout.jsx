import "@/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const metadata = {
  title: {
    template: "%s | Eticket",
    default: "Eticket",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
