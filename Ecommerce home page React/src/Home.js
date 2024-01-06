import Header from './components/Header';
import Footer from './components/Footer';
import HomeCover from './components/HomeCover';
import Slider from './components/Slider';

function Home() {
    return (
      <div className="Home">
        <Header></Header>
        <HomeCover></HomeCover>
        <Slider></Slider>
        <Footer></Footer> 
      </div>
    );
}
  
export default Home;
