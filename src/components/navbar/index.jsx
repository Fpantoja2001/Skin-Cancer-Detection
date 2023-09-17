import './main.scss'

export default function Navbar(){
    return (
        <div className='wrapperNavbar'>
            <div className='navContainer'>
                <div className='title'>SCD by AFTA</div>
                <div className='nav'>
                    <div className='about'><a href="#info">About</a></div>
                    <div className='contact'><a href="#contact">Contact</a></div>
                </div>
            </div>
        </div>
    )
}