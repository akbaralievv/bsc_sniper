import { useState } from "react";
import { useSelector } from "react-redux";

type Props = {
    newMessage: string
}

export const Logs = ({ newMessage }: Props) => {

    // state will be provided from redux storage
    const logs = useSelector<any, any>(state => state.logs.logs)
    const textAreaReadOnly: boolean = true
    return (
        <div className="text-center">
            <textarea className="h-52 w-[90%] rounded-md outline-none" readOnly={textAreaReadOnly} value={logs.join("\n")}>
            </textarea>
        </div>
    )
}