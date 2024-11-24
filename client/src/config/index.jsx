import { Component } from "lucide-react";

export const registerFormControls= [
    {
        name:'username',
        label:'User Name',
        placeholder :'Enter your user name',
        ComponentType:'input',
        type:'text',

    },

    {
        name:'email',
        label:'Email',
        placeholder :'Enter your email',
        ComponentType:'input',
        type:'email',

    },
    {
        name:'password',
        label:'Password',
        placeholder :'Enter your password ',
        ComponentType:'input',
        type:'password',

    },

]

export default registerFormControls;
