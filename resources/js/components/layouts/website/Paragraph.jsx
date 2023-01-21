const Paragraph = (prop) => {
    return ( 
        <div className={`text-lg text-grey ${prop.className}`}>
            {prop.children}
        </div>
     );
}
 
export default Paragraph;