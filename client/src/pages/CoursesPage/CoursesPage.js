import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ItemCourse from "../../components/ItemCourse/ItemCourse";
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
                <ItemCourse></ItemCourse>
            </div>

            <Footer></Footer>
        </>);
}

export default CoursesPage;