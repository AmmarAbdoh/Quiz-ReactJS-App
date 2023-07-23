import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppIcon from "./Components/AppIcon";
import QuizzesSection from "./Components/QuizzesSection";
function App() {
  return (
    <div className="background">
      <>
        <AppIcon />
        <QuizzesSection />
      </>
    </div>
  );
}

export default App;
