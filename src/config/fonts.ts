import { Onest, Archivo } from "next/font/google"

export const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
})

export const archivo = Archivo({
  variable: "--font-public",
  subsets: ["latin"],
  weight: ["700"],
})
