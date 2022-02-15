import './App.css';
import Student from './Student';
import Compteur from './Compteur';
import MyDate from './Date';




function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        
        {/*students.map((item ,index) =>{
         return <Student 
                  key={index} 
                  {...item}
                  />
                
                  
                  
        })*/}
        <Compteur />
        <MyDate />
      </header>
    </div>
  );
}

const students = [{
  name: "Paul",
  lastName: "Dumont",
  birthdate: "12/07/1990",
  campus: "Aubagne",
  avatar:
    "https://cdn0.iconfinder.com/data/icons/kawaii-male-expressions/64/11-01-512.png",
  likeJS: true,
  likePHP: false,
  languages: ["JS", "PHP", "HTML", "CSS", "PYTHON", "TYPESCRIPT"],
  yearsOfExperience: 0,
  action: () => alert("Bonjour je m'appelle Paul")
},
{
  name: "albert",
  lastName: "Dumont",
  birthdate: "12/07/1990",
  campus: "Aubagne",
  avatar:
    "https://cdn0.iconfinder.com/data/icons/kawaii-male-expressions/64/11-01-512.png",
  likeJS: false,
  likePHP: true,
  languages: ["JS", "PHP", "HTML", "CSS", "PYTHON", "TYPESCRIPT"],
  yearsOfExperience: 0,
  action: () => alert("Bonjour je m'appelle Paul")
},{
  name: "Yan",
  lastName: "Dumont",
  birthdate: "12/07/1990",
  campus: "Aubagne",
  avatar:
    "https://cdn0.iconfinder.com/data/icons/kawaii-male-expressions/64/11-01-512.png",
  likeJS: true,
  likePHP: false,
  languages: ["JS", "PHP", "HTML", "CSS", "PYTHON", "TYPESCRIPT"],
  yearsOfExperience: 0,
  action: () => alert("Bonjour je m'appelle Paul")
}]


export default App;
