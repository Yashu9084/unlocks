export default function Hero() {
  return (
    <>
      

      <div className="relative max-w-screen-xl mx-auto lg:px-36  z-10 text-center text-white">
        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6">
          Give A Super Boost To Your Education 
        </h1>
        <p className="md:max-w-[70%] text-center mx-auto text-[12px] md:text-[14px] mb-8">
          Connect with 3000+ investors using AI-powered investor discovery,
          personalized pitches, and intelligent outreach.
        </p>
        <button
          type="button"
          className="bg-[#3ACBBC] hover:bg-[#3ACBBC] text-white text-base font-semibold px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
        >
          Start fundraising -{">"}
        </button>
      </div>
    </>
  );
}
