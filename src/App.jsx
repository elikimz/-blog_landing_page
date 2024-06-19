import './App.css';
import Personal from './components/personal';
import Placeholder from './components/placeholder';

function App() {
  const name = "Kimani";
  const bio = "Passionate developer.";
  const bio1 = "Robotics engineer designing and programming.";
  const bio2 = "Blockchain expert developing decentralized applications.";
  const name2 = "Faith";
  const name3 = "Samuel";
  const age = 25;
  const age2 = 22;
  const age3 = 24;

  const src1 = 'data:image/jpeg;base64,...'; // First image base64
  const src2 = 'data:image/jpeg;base64,...'; // Second image base64
  const src3 = 'data:image/jpeg;base64,...'; // Third image base64

  return (
    <>
      <h1>Profile_Cards</h1>
      <div className="container">
        <div className="one-column">
          <Placeholder src={src1} w={100} h={100} />
        </div>
        <div className="two-column">
          <Placeholder src={src2} w={100} h={100} />
          <Personal name={name2} age={age2} bio={bio1} />
        </div>
        <div className="three-column">
          <Placeholder src={src3} w={100} h={100} />
          <Personal name={name3} age={age3} bio={bio2} />
        </div>
      </div>
    </>
  );
}

export default App;
