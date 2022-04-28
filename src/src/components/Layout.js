import NavBar from "./NavBar"



const Layout = ({children}) => {
  return (
    <>
      <NavBar />
      <div className="font-syne">
            <main className="sm:container sm:mx-auto">
              {children}
            </main>
        {/* <Footer /> */}
      </div>
    </>
    
  )
}

export default Layout