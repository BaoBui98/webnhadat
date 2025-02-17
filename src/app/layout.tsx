import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './index.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetUserAgentInfo } from '@hooks/useGetUserAgentInfo';
import { QueryProvider } from '@components/providers';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chuẩn nhà đất',
  description: 'Tìm bđs với chuẩn nhà đất',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isMobile } = useGetUserAgentInfo();
  const mobileClass = isMobile ? 'isMobile' : '';

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + ` ${mobileClass} `}>
        <QueryProvider>
          {children}
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </QueryProvider>
      </body>
    </html>
  );
}
