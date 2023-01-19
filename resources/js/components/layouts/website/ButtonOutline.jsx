const ButtonOutline = (props) => {
    return ( 
        <button className={props.className}>
           {props.children}
        </button>
     );
}
 
export default ButtonOutline;