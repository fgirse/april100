"use client";

import "../styles/globals.css";
import { ReactNode } from "react";
import '../styles/tailwind.css';
import '../styles/tooltip.css';
import '../styles/drinks.css';
import '../styles/menudrinks.css';
import '../styles/styles.css'
import '../styles/globals.scss'
//import 'bootstrap/dist/css/bootstrap.min.css'
interface IProps {
  children: ReactNode;
}
export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        
          
        <body>{children}</body>z
        
      </body>
    </html>
  );
}