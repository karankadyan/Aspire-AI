import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import Header from "@/components/header";
import {ClerkProvider} from "@clerk/nextjs";
import {dark} from "@clerk/themes";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "AI Career Coach",
    description: "",
};

export default function RootLayout({children}) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
            }}
        >
            <html lang="en" suppressHydrationWarning={true}>
            <body className={`${inter.className}`}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <Header/>
                <main className="min-h-screen">
                    {children}
                </main>
                <footer className="text-gray-600 body-font">
                    <div className="container px-5 py-10 mx-auto flex items-center sm:flex-row flex-col">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span className="text-2xl gradient-title">ASPIRE AI</span>
                        </a>
                        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©
                            2025 Karan Kadyan —
                            <a href="https://www.linkedin.com/in/karankadyan20/" className="text-gray-600 ml-1"
                               rel="noopener noreferrer" target="_blank">@karankadyan20</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0"
             className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
                    </div>
                </footer>
            </ThemeProvider>
            </body>
            </html>
        </ClerkProvider>
    );
}
