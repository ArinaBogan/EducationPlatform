import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import style from './style.module.css';

function LoginPage() {

    const inputArray = [{
        id: 1,
        placeholderValue: 'Enter email...',
        inputType: 'text'
    }, {
        id: 2,
        placeholderValue: 'Enter password...',
        inputType: 'text'
    }];

    return (
        <>
            <Header></Header>

            <div className={style.wrapper}>
                <div className={style.textBlock}>
                    <h1>Login</h1>
                    <div>{inputArray.map((el) => <Input el={el}></Input>)}</div>
                    <div className={style.btn}>Login</div>
                </div>
                <div className={style.img}></div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default LoginPage;