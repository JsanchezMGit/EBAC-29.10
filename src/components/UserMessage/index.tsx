import { IMessage } from "../../interfaces/Message";

export const UserMessage = ({text}:IMessage) => {
    return(
        <span>{text}</span>
    );
}