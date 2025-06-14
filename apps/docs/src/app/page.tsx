import { 
  Header, 
  Hero, 
  QuickStart, 
  Footer 
} from '../components/landing';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuickStart />
      </main>
      <Footer />
    </div>
  );
}
