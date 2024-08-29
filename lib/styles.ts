import { Lexend_Giga, Montserrat, Playfair_Display, Space_Mono } from "next/font/google";

export const fontPrimary = Lexend_Giga({  subsets: ["latin"], weight: "400"  });
export const fontPrimaryThin = Lexend_Giga({  subsets: ["latin"], weight: "200"  });
export const fontPrimaryBold = Lexend_Giga({  subsets: ["latin"], weight: "800"  });
export const fontMono = Space_Mono({subsets: ["latin"], weight: "400"});
export const fontMonoBold = Space_Mono({subsets: ["latin"], weight: "700"});
export const fontBody = Playfair_Display({  subsets: ["latin"], weight: "400"  });
export const sanSerif = Montserrat({  subsets: ["latin"], weight: "300"  })

