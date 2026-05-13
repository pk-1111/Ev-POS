import { Link } from '@inertiajs/react';
import Navbar from '../Navbar/Navbar';
import './Home.css';


import HeroImage from '/public/image/image3-removebg-preview.png';
import PhevImage from '/public/image/phev.jpg';

const Home = ({ auth, trendingProducts = [] }) => {


  const categories = [
    { name: 'BEV', image: '/image/bev.jpg' },
    { name: 'PHEV', image: '/image/phev.jpg' },
    { name: 'HEV', image: '/image/hev.jpg' },
    { name: 'EREV', image: '/image/erev.jpg' },
    { name: 'FCEV', image: '/image/fcev.jpg' },
    { name: 'Micro-EVs', image: '/image/micro.jpg' }
  ]
  return (
    <div className="bg-white min-h-screen font-sans antialiased pt-20">
      <Navbar auth={auth} />

      {/* --- Hero Section --- */}
      <section className="relative bg-blue-50 py-20  overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

          {/* Left Content */}
          <div className="z-10 text-center md:text-left md:w-1/2 space-y-6">
            <h2 className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
              The Next Generation
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
              The New Era of <br />
              <span className="logo">Mellso Model S</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Experience the silence, feel the power. Sustainable luxury meets unmatched performance.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href={`/product-details/${7}`}>
                <button className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition shadow-lg">
                  Available Now
                </button>
              </Link>
              <Link href="/learn-more">
                <button className="border border-gray-300 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
                  Learn More
                </button>
              </Link>

            </div>

            {/* Trust Badges / Care Section */}
            <div className="flex flex-wrap items-center gap-8 pt-10 border-t border-gray-200 justify-center md:justify-start">
              <div className="flex items-center gap-3">
                <div className="text-green-600 bg-green-100 p-2 rounded-lg">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17S5 17 5 15c0-3.866 3.134-7 7-7s7 3.134 7 7c0 2-2 2-2 2" />
                    <path d="M17 9l-5 5-5-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Mellso-Care</p>
                  <p className="text-sm font-bold text-gray-900">2 Year Protection</p>
                </div>
              </div>

              <div className="h-10 w-px bg-gray-200 hidden sm:block"></div>

              <div className="flex items-center gap-3">
                <div className="text-blue-600 bg-blue-100 p-2 rounded-lg text-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Trade-In</p>
                  <p className="text-sm font-bold text-gray-900">Best Market Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <img
              src={HeroImage}
              alt="Mellso Model S"
              className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </section >

      {/* --- Categories Section --- */}
      < section className="py-20 bg-white" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {categories.map((cat) => (
              <div key={cat.name} className="group cursor-pointer flex flex-col items-center">
                <div className="w-24 h-24  bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors border border-transparent group-hover:border-blue-100">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-contain transform group-hover:scale-110 transition duration-500 rounded-full" />
                </div>
                <p className="text-sm font-semibold text-gray-600 group-hover:text-blue-600 transition-colors">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* --- Featured Products --- */}
      < section className="py-20 bg-gray-50" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Featured Models</h2>
              <p className="text-gray-500 mt-2">Choose the best performance for your lifestyle.</p>
            </div>
            <Link href="/view-all" className="text-blue-600 font-medium hover:underline">View All Models →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {trendingProducts.map((item) => (
              <div key={item.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 border border-gray-100 group">
                <div className="p-8 pb-0">
                  <span className="bg-blue-100 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {item.category_name}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-4 group-hover:text-blue-600 transition-colors">
                    Model {item.name}
                  </h3>
                </div>

                <div className="p-4 flex items-center justify-center">
                  <img
                    src={`/product/${item.image}`}
                    alt={item.name}
                    className="h-48 object-contain transform group-hover:scale-110 transition duration-500 rounded-2xl"
                  />
                </div>

                <div className="p-8 pt-0">
                  <div className="flex justify-between border-t border-gray-100 pt-6">
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-900">396<span className="text-sm ml-0.5">mi</span></p>
                      <p className="text-xs text-gray-400 uppercase tracking-tighter">Range</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-900">1.99<span className="text-sm ml-0.5">s</span></p>
                      <p className="text-xs text-gray-400 uppercase tracking-tighter">0-60 mph</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-900">200<span className="text-sm ml-0.5">mph</span></p>
                      <p className="text-xs text-gray-400 uppercase tracking-tighter">Top Speed</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-8">
                    <span className="text-2xl font-black text-gray-900">${Number(item.price).toLocaleString()}</span>
                    <Link href={`/product-details/${item.id}`}>
                      <button className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-600 transition shadow-md">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >
    </div >
  );
};

export default Home;