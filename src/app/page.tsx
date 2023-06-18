import Header from '@dopos/components/Header';
import ImageCarousel from '@dopos/components/ImageCarousel';
import Image from 'next/image';

const Home = async() => {
  return (
    <>
      <Header />
      <main className="absolute top-0 left-0 right-0 min-h-screen flex-col">
        <div className="h-[38rem]">
          {/* <ImageCarousel /> */}          
          <Image 
            src="/assets/img3.jpeg" 
            alt="Sample Image" 
            width={1920} 
            height={1080} 
            className="w-full h-full object-cover" 
          />          
        </div>
        <p>Content goes here...</p>
      </main>
    </>
  );
};

export default Home;

