import Navbar from "../NavBar/Navbar"
import Home from "../Home/Home"
import Middle from "../Middle/Middle"
import Destination from "../Destination/Destination"
import Portifolio from "../Portifolio/Portifolio"
import Review from "../Review/Review"
import Questions from "../Questions/Questions"
import Subscribe from "../Subscribe/Subscribe"
import Footer from "../Footer/Footer"

const Homepage = () => {
    return (
        <>
        <Navbar/>
        <Home/>
        <Middle/>
        <Destination/>
        <Portifolio/>
        <Review/>
        <Questions/>
        <Subscribe/>
        <Footer/>
     </>
       )
}

export default Homepage