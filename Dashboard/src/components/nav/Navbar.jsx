import './navbar.css';
function Nav(){
    return(
        <div className='navbar'>
            <div className="nav-wrapper">
                    <div className="logo">
                        <img src="imgs/logo.png" alt="" />
                        <span>Logo</span>
                    </div>

                <div className="icons">
                        <div className="notifications">
                            <div className="user">
                                <img src="imgs/user.webp" alt="" />
                                <span>UserName</span>
                            </div>
                        </div>
                </div>

            
            </div>
        </div>
    )
}


export default Nav;