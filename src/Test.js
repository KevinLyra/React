


const Test = (props) => {

    return <p>hello, {props.name}&nbsp;
                     {props.lastName}&nbsp;
                    <br/>{props.likeJS ? "j'aime le js" : null}
          </p>
  };

export default Test;