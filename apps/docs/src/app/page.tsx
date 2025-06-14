import { 
  Header, 
  Hero, 
  ComponentShowcase, 
  SocialProof, 
  QuickStart, 
  Footer 
} from '../components/landing';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ComponentShowcase />
        <SocialProof />
        <QuickStart />
      </main>
      <Footer />
    </div>
  );
}
