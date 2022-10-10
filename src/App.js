import './App.css';
import ProfilePic from './ProfilePic/ProfilePic'
import FullN from './FullName/FullName';
import Adress from './Adress/Adress';
function App() {
  return (
    <div className="App">
      <FullN className="name"/>
      <ProfilePic className="prof"/>
      <Adress className='add'/>
    </div>
  );
}

export default App;
