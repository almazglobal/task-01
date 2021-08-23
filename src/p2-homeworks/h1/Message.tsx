import React from 'react'
import {MessageDataType} from "./HW1";
import style from'./Message.module.css'

export const Message = (props: MessageDataType) => {
    return (
        <li className={style.message}>

            <img
                className={style.avatar}
                width="50"
                height="50"
                src={props.avatar}
                alt="avatar user"
            />
            <div className={style.dialog}>

                <div className={style.content_message}>
                    <div className={style.nick}>{props.name}</div>
                    {props.message}
                </div>

                <div className={style.time}>{props.time}</div>
            </div>

        </li>
    )
}

