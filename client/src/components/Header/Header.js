import { Link } from 'react-router-dom';
import style from './style.module.css';

function Header() {
    return (
        <div className={style.wrapper}>
            <Link to={'/'}><h1>Hschool</h1></Link>
            <div className={style.btns}>
                <Link to={'/log'}><div className={style.login}>Login →</div></Link>
                <Link to={'/reg'}><div className={style.reg}>Sign Up</div></Link>
            </div>
        </div>
    )
}
export default Header;