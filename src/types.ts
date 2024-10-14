import { Dispatch, SetStateAction } from "react";

export interface ButtonType{
    text:string;
    disabled:boolean;
}
export interface InputType{
    type:string;
    placeholder:string;
    onChange: Dispatch<SetStateAction<string>>;
    value:string;
}
export interface GroupType{
    groupId:string;
    name:string;
    createdAt: string;
    groupMembers:string[];
}