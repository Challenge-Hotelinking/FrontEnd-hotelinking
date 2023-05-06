import UseAnimations from 'react-useanimations';
import burgerMenu from 'react-useanimations/lib/menu4'
import Icon from "../../../assets/icon.png"
const Header = ({open ,setOpen}) => {
    return (
        <header className="flex items-center justify-between py-[10px] px-[15px] w-full h-[50px] shadow-md ">
            <div className="flex items-center gap-2">
                <img className="rounded-full w-[25px]" src={Icon} alt="icon" />
                <h2 className=" font-bold  text-[#fc1323] text-[20px]">cuponeria</h2>
            </div>
            <UseAnimations 
            className=' cursor-pointer'
            onClick={() => setOpen(!open)}
            size={35} animation={burgerMenu}/>
        </header>
    )
}
export default Header