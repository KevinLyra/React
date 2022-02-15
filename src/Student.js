/*const Student =  {
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
  };*/

  const Student = (props) => {
    return <p>Hello, {props.name}</p>;
   };
export default Student;