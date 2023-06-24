// Import bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
// import Skeleton CSS
// import 'react-loading-skeleton/dist/skeleton.css';
// import Toastify CSS
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
