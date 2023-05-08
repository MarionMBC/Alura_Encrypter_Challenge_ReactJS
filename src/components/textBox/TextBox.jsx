import React, {useContext} from 'react'
import './TextBox.css'
import {EncrypterContext} from '../../context/EncrypterContext'

export const TextBox = () => {

    const {text, setText, textBoxDisabled} = useContext(EncrypterContext)

    return (
        <textarea
            disabled={textBoxDisabled}
            onChange={(e) =>
                setText(e.target.value)

            }

            id="message" rows="4"

            value={text}
            className="
            overflow-hidden
            hover:overflow-auto
            resize-none
            h-auto
            outline-none 
            w-full
            mt-10
            text-custom-color
            px-5
            sm:h-96
            sm:px-10 
            sm:text-4xl
            sm:empty:h-96
            md:w-full
      
            lg:empty:h-96
            empty:h-auto
            " placeholder={"Ingresar texto aquí"}/>
    )
}
