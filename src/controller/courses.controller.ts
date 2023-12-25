import express,{Request,Response} from 'express';
import { buildResponse } from '../helper/buildResponse';
import{getAllCourses,getCourseById} from '../service/courses.service';

const route = express.Router();

route.get('/', async (req: Request, res: Response) => {
    try {
      const data = await getAllCourses();
      buildResponse(res, 200, data);
    } catch (error: any) {
      buildResponse(res, 404, error.message);
    }
  });
  
  route.get('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await getCourseById(id);
      buildResponse(res, 200, data);
    } catch (error: any) {
      buildResponse(res, 404, error.message);
    }
  });
  
  export default route;