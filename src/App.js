import Header from './Hd'
import Chachaswiper from './Chachaswiper';
import Preinterview from './Preinterview';
import Footer from './Ft';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Chachaswiper></Chachaswiper>
      <Preinterview contentid="portfolio" title="포트폴리오" num="0"></Preinterview>
      <Preinterview contentid="notice" title="공지사항" num="1"></Preinterview>
      <Preinterview contentid="interview" title="사전인터뷰" num="2"></Preinterview>
      <Footer></Footer>
    </div>
  );
}

export default App;
