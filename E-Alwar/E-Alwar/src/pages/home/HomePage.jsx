import Layout from "../../components/layout/Layout"
import HeroSection from "../../components/heroSection/HeroSection"
import Category from "../../components/category/Category"
import HomePageProductCard from "../../components/omePageProductCard/HomePageProductCard"
import Track from "../../components/ track/Track"
import Testimonial from "../../components/testimonial/Testimonial"
// import { Loader } from "lucide-react"
// import myContext from "../../context/myContext";

const HomePage = () => {


  return (
<Layout>

<HeroSection/>
<Category/>
<HomePageProductCard/>

<Track/>

<Testimonial/>

{/* <Loader/> */}

</Layout>
  )
}

export default HomePage


