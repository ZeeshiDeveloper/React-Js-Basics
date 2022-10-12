function Model(props){   {/*Component name and function name must be same */}
    function onCancle(){
        props.onCancel();
    }    
    function onConfirm(){
        props.onCancel();
    }    

return(
        <div className="model">
            <p>Are You Sure ? </p>
            <button className="btn btn--alt" onClick={onCancle}>Cancel</button>
            <button className="btn" onClick={onConfirm}>Confirm</button>
        </div>
    );
}

export default Model;