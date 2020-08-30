import {Student} from "../model/Student";

export const convertMapToArray=(map :Map<number,Student>)=>{
    if(map.size>0) {
        let studentArray: Student[] = []
        map.forEach((k, v) => {
            //console.log('student : ' + k + 'v is ' + v)
            studentArray.push(k)
        })
        return studentArray
    }
}


