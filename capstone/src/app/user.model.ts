export class User{
    constructor(
        public id: number,
        public fname:String,
        public lname:String,
        public email:String,
        public pasword:String,
        public admin:String,
        public cart: Array<number>
        ){}
}