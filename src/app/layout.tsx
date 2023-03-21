'use client'
import Footer from "@/component/Footer"
import Header from "@/component/Header"
import { ChakraProvider } from "@chakra-ui/react"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Header/>
        {children}
        <Footer/>
        </ChakraProvider>
        </body>
    </html>
  )
}
