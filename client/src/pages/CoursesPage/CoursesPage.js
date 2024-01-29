import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./style.module.css"

function CoursesPage() {
    return (
        <>
            <Header></Header>

            <div className={style.wrapper}>
                <div className={style.title}>
                    <div className={style.imgHat}></div>
                    <h1>Courses</h1>
                </div>

                <div className={style.sectionJS}>
                    <div className={style.itemsJS}>
                        <div className={style.imgJS}></div>
                        <div className={style.textContentJS}>
                            <h1>JavaScript</h1>
                            <div className={style.line}></div>
                            <p>JavaScript is a practical course where students learn the basics of JavaScript.
                                It covers variables, operators, conditionals, loops, functions, and data manipulation.</p>
                        </div>
                    </div>

                </div>

                <div className={style.sectionTS}>
                    <div className={style.itemsTS}>
                        <div className={style.imgTS}></div>
                        <div className={style.textContentTS}>
                            <h1>TypeScript</h1>
                            <div className={style.line}></div>
                            <p>TypeScript is a course that provides an introduction to TypeScript.
                                Students will learn about TypeScript's key features, such as type annotations, interfaces, classes, and modules</p>
                        </div>
                    </div>
                </div>

                <div className={style.sectionPython}>
                    <div className={style.itemsPython}>
                        <div className={style.imgPython}></div>
                        <div className={style.textContentPython}>
                            <h1>Python</h1>
                            <div className={style.line}></div>
                            <p>Students will learn about variables, data types, conditionals, loops, functions, and file handling.
                                Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.</p>
                        </div>
                    </div>
                </div>
            </div>



            <Footer></Footer>
        </>);
}

export default CoursesPage;