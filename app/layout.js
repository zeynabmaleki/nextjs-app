import localFont from 'next/font/local';
import './globals.css'
import Header from '../components/Header'
import Toastify from '@/components/libraries/Toastify'
import NextNprogress from '@/components/libraries/NextNprogress'
import { AuthProvider } from '@/context/AuthContext';



const vazirFont = localFont({
  src: './fonts/Vazir.woff2',
  display: 'swap',
});



export default function RootLayout({ children }) {
  return (
    <html lang="fa" className={vazirFont.className}>
      <body>
        <AuthProvider>
          <NextNprogress>
            <Header />
            {children}
            <Toastify />
          </NextNprogress>
        </AuthProvider>
      </body>
    </html>
  );
}
