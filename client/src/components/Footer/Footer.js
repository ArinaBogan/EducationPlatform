import style from './style.module.css'

function Footer() {
    return (
        <div className={style.wrapper}>
            <div className={style.footerInfo}>
                <div className={style.navigationFooter}>
                    <p>Home</p>
                    <p>Textbook</p>
                    <p>Statistics</p>
                    <p>Sprint</p>
                </div>
                <div className={style.namesFooter}>
                    <p>Alex</p>
                    <p>Gabriel</p>
                    <p>Marcus</p>
                </div>
            </div>

            <div className={style.vector}></div>

            <div className={style.linksFooter}>
                <div className={style.imgs}>
                    <div className={style.imgCat}></div>
                    <div className={style.imgGH}></div>
                    <div className={style.imgYT}></div>
                </div>
                <p className={style.text}>©2021 Hschool. Project for Hschool</p>
            </div>
        </div>
    );
};

export default Footer;