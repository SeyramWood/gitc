const ButtonOutline = (props) => {
    return ( 
       <button className={`block p-4 border rounded-full  ${props.className}`}>
           {props.children}
        </button>
     );
}
 
export default ButtonOutline;