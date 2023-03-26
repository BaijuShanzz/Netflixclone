// import global css 
import './App.css';

// import Navbar from components
import Navbar from './Components/Navbar/Navbar';

// importing Banner from  components
import Banner from './Components/Banner/Banner';

// importing Rowpost from components
import RowPost from './Components/RowPost/RowPost';

// importing footer  components
import Footer from './Components/Footer/Footer';

// importing different caterory listed movies api from urls 
import { actionMovies,originals,trendingMovies,comedyMovies, horrorMovies, romanceMovies, documentarieMovies } from './Url';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>

      {/* passing the different movies api from props to rowpost component and passing the title and size from porps to rowpost*/}
      
      <RowPost url={originals} title="Netflix Original"/>
      <RowPost url={actionMovies} title="Action" isSmall/>
      <RowPost url={trendingMovies} title="Trending" />
      <RowPost url={comedyMovies} title="Comedy" isSmall/>
      <RowPost url={horrorMovies} title="Horror" />
      <RowPost url={romanceMovies} title="Romance" isSmall/>
      <RowPost url={documentarieMovies} title="Documentaries"/>
      <Footer/>
    </div>
  );
}

export default App;
