import "@/styles/global.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
        {/* <!-- Left: Image --> */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder Image" className="object-cover w-full h-full" />
      </div>
      {/* <!-- Right: Login Form --> */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">

        {children}

        {/* <!-- Sign up  Link --> */}
        <div className="mt-6 text-blue-500 text-center">
          <a href="#" className="hover:underline">Sign up Here</a>
        </div>
      </div>
    </div>
  );
}



