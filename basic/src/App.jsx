import Examples from "./components/Examples.jsx";
import CoreConsepts from "./components/core-consept/core-consepts";
import Header from "./components/header";
import Main from "./components/main";

const users = ['NIKO', 'ILYA', 'LIAM'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const username = users[genRandomInt(2)];

  return (
    <main>
      <span>My dynamic text Hello {username}</span>
      <Header/>
      <CoreConsepts/>
      <Examples/>
      <Main/>
    </main>
  );
}

export default App;

