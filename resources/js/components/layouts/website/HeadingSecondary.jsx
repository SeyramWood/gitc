const HeadingSecondary = (prop) => {
    return ( 
        <div className={`my-4 text-3xl text-primary ${prop.className}`}>
            {prop.children}
        </div>
     );
}
 
export default HeadingSecondary;