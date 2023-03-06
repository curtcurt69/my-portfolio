import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer';
import MetaContainer from 'components/MetaContainer';

import {ThemeProvider} from "next-themes"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider attribute="class" enableSystem={true}>
    
    <MetaContainer>
       
        <Component {...pageProps} />
       
    </MetaContainer>
    
    </ThemeProvider>
      
    </> 
    );
}

export default MyApp
