import Header from '@dopos/components/Header';
import Image from 'next/image'
// import styles from './page.module.css'

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
        <p>Content goes here...</p>
      </main>
    </div>
  );
};

export default Home;
