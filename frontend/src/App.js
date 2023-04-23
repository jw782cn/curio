import logo from './logo.svg';
import './App.css';
import ExploreButton from './components/ExploreButton';
import Layout from './components/Layout';
import EChartsGraph from './components/EChartsGraph';
import Header from './components/Header';
import Footer from './components/Footer';
import MessageBubbleSelf from './components/MessageBubbleSelf';
import MessageBubbleOther from './components/MessageBubbleOther';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>LearningGPT</h3>
      </header>
      <div className="App-Content">
        <div className="left">
          <Header />
          {/* <MessageBubbleSelf />
          <MessageBubbleOther />
          <Footer /> */}
        </div>
        <div className="right">
          <ExploreButton />
          <EChartsGraph />
          {/* <p>Mapping</p> */}
        </div>
      </div>
    </div>
  );
}

export default App;