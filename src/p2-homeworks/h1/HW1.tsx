import React, {useState} from 'react'
import {MessagesList} from "./MessagesList";
import style from './HW1.module.css'

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData: MessageDataType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

const userMessages: MessageDataType[] = []

function HW1() {

    const [messages, setMessages] = useState<MessageDataType[]>(userMessages)
    const [userMessage, setUserMessage] = useState<string>('')

    function addMessage(message: string) {
        const newMessages = [...messages]
        newMessages.push({...messageData, message})
        setMessages(newMessages)
        setUserMessage('')
    }

    function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setUserMessage(event.target.value)
    }

    return (
        <div>
            <hr/>
            homeworks 1

            <MessagesList
                messages={messages}
            />

            <input
                type="text"
                value={userMessage}
                onChange={changeHandler}
                className={style.inputMessage}
            />
            <button onClick={() => addMessage(userMessage)}>Send</button>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>

        </div>
    )
}

export default HW1
