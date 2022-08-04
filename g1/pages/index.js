import Image from 'next/image';

function Home() {
  return (
    <>
      <div>
        <div className="bg-gray-700 text-white py-4 text-center">
          <Image src={'/menu-left.png'} width="100px" height="100px" alt="menu-left" />
        </div>
        <div className="bg-gray-800 text-white py-10 text-center">
          Header
        </div>
      </div>
      <div className="text-center text-white py-20 sm:py-2 bg-gray-900">
        <>
          Section of posts
        </>
        <>
          Publish
        </>
      </div>
      <div className="text-center">
        Footer
      </div>
    </>
  );
}

export default Home;