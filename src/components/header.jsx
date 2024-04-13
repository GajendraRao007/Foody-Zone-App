import Logo from '../Images/Foody Zone.png'
function Header(){
    return(
        <div className='header-bar'>
            <div className="header">
                  <img className='logo' src={Logo} alt="" srcset="" />
                  <input type="text" placeholder="Search Food...." />  
            </div>

            <div className='tabs'>
                <button>All</button>
                <button>Breakfast</button>
                <button>Lunch</button>
                <button>Dinner</button>
            </div>
        </div>
    )
}

export default Header;