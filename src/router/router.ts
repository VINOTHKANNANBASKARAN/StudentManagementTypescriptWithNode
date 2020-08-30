import router from 'express'
import {
    createStudent,
    deleteStudnet,
    getAllStudentDetails,
    getStudentById,
    updateStudent
} from "../Controller/studentController";

const routes = router()

routes.get('/',getAllStudentDetails)
routes.get('/:id',getStudentById)
routes.put('/:id',updateStudent)
routes.post('/',createStudent)
routes.delete('/:id',deleteStudnet)

export default routes
