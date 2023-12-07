import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected ={} //for sorting answers.
    correctAnswers=0 // TO show the result.
    isSubmitted=false //used to show no of correct answers.
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)

    }
    get isScoreFull(){
        return `slds-m-top_small slds-text-heading_large ${this.correctAnswers===this.myQuestions.length?'slds-text-color_success':'slds-text-color_error'}`
    }
    myQuestions = [
        {
            id:"Question1",
            question: "What’s the annotation used to invoke an Apex method imperatively from LWC?",
            answers:{ 
                a:"@future",
                b:"@isTest",
                c:"@AuraEnabled",
                d:"@cacheable"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question: "What’s the annotation used to wire an Apex method to a property or function inLWC?",
            answers:{
                a:"@future",
                b:"@AuraEnabled(cacheable=true)",
                c:"@AuraEnabled",
                d:"None of these"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question: "What are the maximum no of components that we can include in an LWC?",
            answers:{
                a:"9",
                b:"25",
                c:"100",
                d:"No Limit"
            },
            correctAnswer:"d"
        },
        {
            id:"Question4",
            question: "Whoch one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop",
                d:"All of the above"
            },
            correctAnswer:"c"
        },
        {
            id:"Question5",
            question: "Which of the file is invlid in Lwc component folder ",
            answers:{
                a:".js",
                b:".apex",
                c:".svg",
                d:".css"
            },
            correctAnswer:"b"
        }
    ]

    changeHandler(event){
    console.log(event.target.name);
    console.log(event.target.value);
    const {name, value} = event.target
    this.selected = {...this.selected,[name]:value}

    }

    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter((item) => this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted=true 
        setTimeout(this.selected={}, 500)   
         
    }
    resetHandler(){       
        this.selected = {}
        this.correctAnswers=0
        this.isSubmitted=false
    }
}