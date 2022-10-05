import logo from './logo.svg';
import logoHell from './img/logo_hell.png';
import grupo from './img/grupo.png';
import './App.css';
import Bar from './components/Bar';
import music from './img/vector-music.png';
function App() {
  return (
    <div>
      <header className='App-header'>
      <a id="bar1"  >login</a>
            </header>
      <body>
     {/* <img src={grupo} className="App-grupo" alt="logo" id='grupo' />*/}
        {/*<p>
          Edit <code>src/App.js</code> Que pasooooo!!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
  </a>*/}
  <Bar/>
  <img src={logoHell}  className="App-logo" alt="logo" />
  <div className ='sidebar'>
  AQUI VA UNA BRIEF DE LA BANDA 
Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
  </div >
  <div className = "sidebar2">
  <img src={music}  className="music-logo" alt="logo"></img>
  ¿TIPO DE MUSICA IFLUENCIAS 
Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 

  </div>

  <div className = "sidebar3">
  ¿Qué es Lorem Ipsum?
Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 

  </div>
      </body>
    </div>
  );
}

export default App;
