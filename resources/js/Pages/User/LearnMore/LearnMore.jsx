import React from 'react';
import Navbar from '../Navbar/Navbar';
import Evd from '/public/image/video1.mp4'
import ev from '/public/image/ev.jpg'

const LearnMorePage = ({ auth }) => {
    return (
        <>
            <Navbar auth={auth} />

            <main className="bg-[#fcf4f4] text-white font-sans min-h-screen overflow-hidden mt-5">


                {/* --- Hero Section --- */}
                <section className="max-w-7xl mx-auto px-4 py-24 text-center">
                    <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">
                        The Future of Mobility
                    </p>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                        Mellso<span className="text-blue-500 shadow-blue-500/50">EV.</span><br />
                        Power redefined.
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Experience the next generation of dealership management.
                        Real-time tracking. Seamless payments. High-performance analytics.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 text-white px-8 py-4 rounded-full text-lg font-medium">
                            Get Started
                        </button>
                        <button className="w-full sm:w-auto bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all">
                            View Demo
                        </button>
                    </div>

                    {/* Dashboard / Product Preview */}
                    <div className="relative flex justify-center mt-10">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20"></div>
                        <img
                            src={ev}
                            alt="Mellso EV Interface"
                            className="relative w-full max-w-5xl rounded-2xl border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                        />
                    </div>
                </section>

                {/* --- Feature Section --- */}
                <section className="max-w-7xl mx-auto px-4 py-32 border-t border-white/5">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-blue-400 font-medium mb-2">Smart Management</p>
                            <h2 className="text-4xl  text-zinc-400  md:text-5xl font-bold mb-6 tracking-tight">
                                Intelligence in every <br />
                                <span className="text-zinc-500">single transaction.</span>
                            </h2>
                            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                                Mellso EV POS system is engineered for efficiency. From luxury EV inventory tracking
                                to automated sales reports, everything is at your fingertips.
                            </p>
                            <ul className="space-y-4">
                                {['Real-time Battery Health Status', 'Automated VIN Scanning', 'Instant Tax Calculations'].map((item, index) => (
                                    <li key={index} className="flex items-center text-zinc-300">
                                        <span className="mr-3 text-blue-500">✦</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-zinc-950 rounded-[2rem] p-3 border border-white/5 shadow-inner">
                            <div className="relative flex justify-center">
                                {/* Background Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25"></div>

                                <video
                                    className="relative w-full max-w-5xl rounded-2xl border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-[1.01] object-cover aspect-[4/3]"

                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src={Evd} />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>

    );
};

export default LearnMorePage;