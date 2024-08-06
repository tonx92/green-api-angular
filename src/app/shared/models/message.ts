export class Message {
    idMessage: string

    constructor(data:any){
        this.idMessage = data.idMessage || null
    }
}