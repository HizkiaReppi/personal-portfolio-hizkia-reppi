import { lazy } from 'react';
import { Head, Navbar, Home } from './components';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollUp = lazy(() => import('./components/ScrollUp'));

export default function App() {
  return (
    <>
      <Head
        title="Hi! Welcome to Hizkia Reppi Portfolio"
        description="Hizkia Reppi adalah seorang Junior Web Developer berasal dari Manado, Indonesia. Hizkia fokus di bidang pengembangan web, khususnya di Front-End Web Development dan Backend Development. Hizkia kompeten di Sertifikasi LSP Informatika dan LSP BPPTIK Kominfo bidang Junior Web Developer ."
        keywords={['Hizkia Reppi', 'Hizkia', 'Reppi', 'Frontend Developer', 'Web Developer', 'Software Engineer', 'Indonesia']}
      />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <ScrollUp />
    </>
  );
}
