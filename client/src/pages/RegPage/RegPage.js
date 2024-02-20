import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import style from './style.module.css'

function RegPage() {
    const inputArray = [
        {
            id: 1,
            placeholderValue: 'Enter name...',
            inputType: 'text'
        },
        {
            id: 2,
            placeholderValue: 'Enter surname...',
            inputType: 'text'
        },
        {
            id: 3,
            placeholderValue: 'Enter email...',
            inputType: 'text'
        },
        {
            id: 4,
            placeholderValue: 'Enter password...',
            inputType: 'password'
        },
        {
            id: 5,
            placeholderValue: 'Enter confirm password...',
            inputType: 'password'
        }
    ];

    return (
        <>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.textBlock}>
                    <h1>Sign Up</h1>
                    {inputArray.map((el) => <Input el={el}></Input>)}
                    <div className={style.btn}>Sign Up</div>
                </div>
                <div className={style.img}></div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default RegPage;