import logo from '../images/logo.svg';

const Home = () => {
    return (
        <header className="App-header bg-zinc-700">
         <img src={logo} alt='logo' className='App-logo'></img>
         <p>House of Projects</p>
        </header>
    );
  };
  
  export default Home;