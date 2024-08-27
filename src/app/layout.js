import './globals.css'
import Providers from "./providers";



export async function generateMetadata() {
  return {
    title: 'Tuan Phuong',
    description: 'Full Stack Developer Protfilo  ',
    // metadataBase: new URL(`https://`),
    images: [
      {
        url: `https://`,
        width: 1200,
        height: 630,
      },
      {
        url: `https://`,
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    locale: "en",
    type: "website ",
  };
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <head>
       <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
