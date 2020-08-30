import {Student} from "../model/Student";
import {RequestHandler} from "express";
import {Response, Request, NextFunction} from 'express'
import {convertMapToArray} from "../utility/studentUtility";


var studentMap = new Map<number, Student>()
export const createStudent: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    if (req.body.id && !studentMap.has(req.body.id)) {

        const student = new Student(req.body.name, req.body.id, req.body.rank, req.body.mark, req.body.standard, req.body.age)
        studentMap.set(req.body.id, student)

        return res.status(201)
            .json({
                message: 'Student Successfully created',
                studentRno: student.id,
                name: student.name
            })
    }else {
        return res.status(400)
            .json({
                message: 'Enter a valid Id for Student'
            })
    }
}


export const getStudentById:RequestHandler<{id:string}>=(req:Request, res:Response,next:NextFunction)=>{
    if(studentMap.has(+req.params.id)){
        return res.status(200)
            .json({
                student:studentMap.get(+req.params.id)
            })
    }else{
        res.status(204).json({
            messagge: `Student with id ${req.params.id} does not exist`
        })
    }

}


export const getAllStudentDetails:RequestHandler = (req: Request, res :Response, next:NextFunction)=>{
    if(studentMap.size>0){

        return res.status(200)
            .json({
            studentList : convertMapToArray(studentMap)
        })
    }else{
        res.status(404).json({
            messagge: 'Student list is empty'
        })
    }
}


export const updateStudent : RequestHandler<{id:string}> = (req: Request, res: Response,next:NextFunction)=>{
    if(studentMap.has(+req.params.id)){

        studentMap.set(+req.params.id,req.body)
        return res.status(202).json({
           message: 'updated successfully',
            studentRollNo : req.params.id
        })
    }else{
        res.status(204).json({
            message:  `Student with id ${req.params.id} does not exist`
        })
    }
}



export const deleteStudnet: RequestHandler<{id:string}> = (req:Request, res:Response,next:NextFunction)=>{
    if(studentMap.has(+req.params.id)){
        studentMap.delete(+req.params.id)
        return res.status(200)
            .json({
                message: `Student with id ${+req.params.id} is deleted successfully`
            })
    }else{
        res.status(204).json({
            message:  `Student with id ${req.params.id} does not exist`
        })
    }
}
