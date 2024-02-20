import style from './style.module.css';

function Input({ el }) {
    return (<>
        <div><input type={el.inputType} placeholder={el.placeholderValue}></input></div>
    </>);
}

export default Input;