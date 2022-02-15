import Language from "./Language";




const Student = ({name , lastName , likeJS, likePHP , action , languages}) => {

    return (
      <div>
        <p>hello, {name}&nbsp;
              {lastName}&nbsp;        
        </p>
        <p> {likeJS ? "j'aime le js" : null}
             {likePHP ? "bouh" : null}  
        </p>
          <button onClick={action}>Click</button>
          <Language lang={languages}/>
      </div>
    )};

export default Student;