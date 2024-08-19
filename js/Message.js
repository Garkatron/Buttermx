export class Message {
    
    constructor(title, text) {
        this.title = title
        this.text = text
    }

    get getTitle() {
        return this.title
    }
    
    get getContent() {
        return this.text
    }
   
    
}

export let messages = {
    felizcumpleaños: new Message("🎉Feliz Cumpleaños🎉","Tengo dudas de si llegaras a leer esto 🫤.\nLo pondre en github, asi puedes ver el contenido.\nEspero que esto sea algo minimamente original o entretenido.\nAl final lo puse en vercel porque en github pages no funcionaba."),
    visteelrepo: new Message("Si ves esto es porque abriste el repo de github","No me imagine que lo llegaras a abrir.")
}