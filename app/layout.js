import localFont from 'next/font/local';
import './globals.css'
import Header from '../components/Header'
import Toastify from '@/components/libraries/Toastify'
import NextNprogress from '@/components/libraries/NextNprogress'

// Use the bundled woff2 font inside the app/fonts folder. next/font/local
// will handle preloading and generating a className to apply the font.
const vazirFont = localFont({
  src: './fonts/Vazir.woff2',
  display: 'swap',
});




export default function RootLayout({ children }) {
  return (
    <html lang="fa"  className={vazirFont.className}>
      <body>
        <NextNprogress>
          <Header />
          {children}
          <Toastify />
        </NextNprogress>
      </body>
    </html>
  );
}
