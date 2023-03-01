const Button = (prop) => {
    return ( 
        <button className={`block border p-4 sm:w-[20rem] rounded-full mx-auto text-white bg-[rgb(255,35,34)] hover:scale-110 transition ease-in-out ${prop.className}`}>
           {prop.children}
        </button>
     );
}
 
export default Button;
