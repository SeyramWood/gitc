const ButtonOutline = (props) => {
    return ( 
       <button className={`block p-4 border rounded-full border-primary hover:border-2 ${props.className}`}>
           {props.children}
        </button>
     );
}
 
export default ButtonOutline;