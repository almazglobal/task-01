import React from 'react'
import {Message} from "./Message"
import {MessageDataType} from "./HW1"
import style from "./MessagesList.module.css";

type PropsMessagesListType = {
    messages: MessageDataType[]
}

export const MessagesList = (props: PropsMessagesListType) => {
    return (
        <ul className={style.messages}>
            {props.messages.map((item) => {
                return (
                    <Message
                        avatar={item.avatar}
                        name={item.name}
                        message={item.message}
                        time={item.time}
                    />
                )
            })}
        </ul>
    )
}