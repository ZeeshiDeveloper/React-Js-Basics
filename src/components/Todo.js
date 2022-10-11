function Todo(props){
    return(
    <div className="card">    {/*class name element in javascript is className and in html class and this is not html file sooo we use here className */}
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
    );
}

export default Todo;