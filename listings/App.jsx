
import Navbar from "../src/components/listings/Navbar"
import Dishes from "../src/components/Dishes"
import Footer from "../src/components/Footer"


import BlurBackground from "../src/components/BlurBackground"






const App = () => {
  return (
	<><BlurBackground/>
	  
    <div className="overflow-y-hidden text-neutral-200">
<Navbar/>
<div className="mt-52">
      <Dishes/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
