import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ItemCourse from "../../components/ItemCourse/ItemCourse";
import style from './style.module.css'
import Pagination from '@mui/material/Pagination';

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

                <div className={style.pagination}>
                    <Pagination count={10} variant="outlined" color="primary" />
                </div>
            </div>
            
            <Footer></Footer>
        </>);
}

export default CoursesPage;