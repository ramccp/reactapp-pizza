import Navigation from "./Navigation";
function Navbar(){
    return (
      <>
        <header className="sticky top-0 z-100 bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-center">
          <h1 className="pizzeria-logo">
            CAT Pizzeria
          </h1>
        </div>
      </header>
      <Navigation/>
      </>
    )
}

export default Navbar;