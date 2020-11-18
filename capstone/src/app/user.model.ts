export class User{
    constructor(
        public _id: number,
        public fname:String,
        public lname:String,
        public email:String,
        public pasword:String,
        public admin:String,
        public cart: Array<number>
        ){}
}