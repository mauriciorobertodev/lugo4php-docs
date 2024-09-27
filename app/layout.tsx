import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Metadata } from 'next';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    params,
    children,
}: {
    params: { lang: string };
    children: React.ReactNode;
}) {
    return (
        <html lang={params.lang} className={inter.className} suppressHydrationWarning>
            <body>
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    );
}
