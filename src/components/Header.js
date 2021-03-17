import Navbar from './Navbar'

const Header = () => {
    return(
        <div className="header-container">
            <a href="/">
                <div className="logo">
                    World Events Timeline
                </div>
            </a>
            <Navbar></Navbar>
        </div>
    )
}

export default Header