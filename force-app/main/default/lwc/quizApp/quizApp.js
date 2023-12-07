import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected ={}
    myQuestions = [
        {
            id:"Question1",
            question: "What’s the annotation used to invoke an Apex method imperatively from LWC?",
            answers:{
                a:"@future",
                b:"@isTest",
                c:"@AuraEnabled",
                d:"@cacheable"
            }
        },
        {
            id:"Question2",
            question: "What’s the annotation used to wire an Apex method to a property or function inLWC?",
            answers:{
                a:"@future",
                b:"@AuraEnabled(cacheable=true)",
                c:"@AuraEnabled",
                d:"None of these"
            }
        },
        {
            id:"Question3",
            question: "What are the maximum no of components that we can include in an LWC?",
            answers:{
                a:"9",
                b:"25",
                c:"100",
                d:"No Limit"
            }
        },
        {
            id:"Question4",
            question: "Whoch one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop",
                d:"All of the above"
            }
        },
        {
            id:"Question5",
            question: "Which of the file is invlid in Lwc component folder ",
            answers:{
                a:".js",
                b:".apex",
                c:".svg",
                d:".css"
            }
        }
    ]

    changeHandler(event){
    console.log(event.target.name);
    console.log(event.target.value);
    const {name, value} = event.target
    this.selected = {...this.selected,[name]:value}
    }
    submitHandler(){}
    resetHandler(){}
}