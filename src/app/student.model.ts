import { Result } from "./result.model";

export class Student{
    constructor(
        public name:string,
        public examId:number, 
        public result:Result
    ){

    }
}