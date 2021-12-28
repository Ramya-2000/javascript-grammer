class cat {
    constructor(){
        let property = 1; // local variable 
        this.something = 2;// object property
    }
    method(){
        console.log(this.property); //undefined
        console.log(this.something);//1
    }
}