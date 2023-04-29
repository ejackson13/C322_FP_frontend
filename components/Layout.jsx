import NavBar from "./NavBar";

// adapted from example Layout class

const Layout = ({children}) => {
    
    return (
        <>
         <NavBar />
         {children}
        </>
    )
}

export default Layout