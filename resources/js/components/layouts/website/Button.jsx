const Button = (prop) => {
    return ( 
        <button className={`block border p-4 w-[20rem] rounded-full mx-auto hover:text-white hover:bg-[rgb(255,35,34)] ${prop.className}`}>
           {prop.children}
        </button>
     );
}
 
export default Button;
