import ContentContainer from "./components/contentContainer/ContentContainer";
import Navbar from "./components/navbar/Navbar";
import "./style/App.css"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <ContentContainer />
      </div>
    </>

  );
}

export default App;
