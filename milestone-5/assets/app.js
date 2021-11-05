const app = new Vue({
    el: '#root',
    data: {
        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },


                ],
            },
        ],
        //valore indice oggetto
        counterContact: 0,
        //valore messaggio inviato
        newMessage: "",
        //valore input inserito per la ricerca
        searchContact: "",
        //valore indice singolo messaggio
        counterMessage: "",
        //variabile sentinella per la funzione dropOption(i)
        flagDrop: false,

    },
    methods: {

        //funzione per eliminare il singolo messaggio
        deleteMessage(i){
            this.contacts[this.counterContact].messages.splice(i, 1)
        },
        //funzione per fare apparire/scromparire il menu per il singolo messaggio
        dropOption(i){
            if(this.flagDrop === false){
                this.flagDrop = true
                this.counterMessage = i
            }
            else{
                this.flagDrop = false
                this.counterMessage = ""
            }
        },
        //funzione per ciclare nell'array contatti e visualizzare solo quelli che contengono le lettere inserite
         searchFunction() {
           this.contacts.forEach(element =>{
               
               if (element.name.toLowerCase().includes(this.searchContact.toLowerCase())) {

                 element.visible = true
             } else {
                 element.visible = false
             }
           })

        },
        //funzione per ricevere un messaggio automatico dopo l invio
        receiveMessage() {
            this.contacts[this.counterContact].messages.push({

                date: dayjs().format('DD/MM/YYYY H:mm:ss'),
                text: "ok",
                status: 'received'
            })

        },
        //funzione per rivere l indice dell oggetto cliccato 
        selectContact(i) {
            this.counterContact = i

        },
        //funzione per il push di un messggio inviato nella lista dei messggi con il singolo contatto
        sendText() {
            if (this.newMessage != "") {
                this.contacts[this.counterContact].messages.push({

                    date: dayjs().format('DD/MM/YYYY H:mm:ss'),
                    text: this.newMessage,
                    status: 'sent'
                })
                setTimeout(this.receiveMessage, 1000);
            }
            this.newMessage = ""
        }
    }
})
