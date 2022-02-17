

export class Usuario{
    constructor(

        public nombre:string,
        public email:string,
        public token:string,
        public password?:string,
        public google?:boolean,
        public uid?:string

    ){}
}