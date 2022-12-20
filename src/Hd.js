import Navi from './Navi';

function Hd(){
    return(
        <header className="App-header d-flex justify-content-between align-items-center px-lg-5">
        <h1 className="mb-0">
          <a href="" className="d-block">
            <img src="./img/logo.svg" className="img-fluid w-100" alt="logo" />
          </a>
        </h1>
        <Navi />
      </header>    
    )
}

export default Hd;