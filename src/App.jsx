import "./App.css";
import MetaTags from "./components/extra/MetaTags";

function App() {
  return (
    <>
      <MetaTags
        title="Vintage LeftOver"
        description="This is a description of my page."
        keywords="React, Meta Tags"
      />
      <h1 className=""> Hello Vintage LeftOver</h1>
    </>
  );
}

export default App;
