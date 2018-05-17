import { Region } from "./region";

export class Ad {

    public id: number;

    constructor(
        public title: String,
        public description: String,
        public region: Region,
        public price: Number,
        public images: Array<String>
    ) {
        this.id = new Date().getTime();
    }
}