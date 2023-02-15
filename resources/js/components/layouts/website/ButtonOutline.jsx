const ButtonOutline = (props) => {
    return ( 
       <button className={`block p-4 border rounded-full border-primary/40 hover:border-primary ${props.className}`}>
           {props.children}
        </button>
     );
}
 
export default ButtonOutline;