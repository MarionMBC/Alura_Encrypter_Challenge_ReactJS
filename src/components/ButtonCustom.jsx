import React, {useContext} from 'react'
import "./components.css"
import {EncrypterContext} from '../context/EncrypterContext'

export const ButtonCustom = ({text, outlined}) => {
    const {handleEncrypt, handleDecrypt} = useContext(EncrypterContext)

    return (
        !outlined
            ?
            <button title='Encriptar' onClick={handleEncrypt}
                    className="text-white mt-2 btn-blue w-full p-0 md:w-64 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-2xl py-4 text-center md:mt-5 disabled:opacity-50 disabled:cursor-not-allowed">{text}</button>
            :
            <button title='Desencriptar' onClick={handleDecrypt}
                    className="btn-blue-outline mt-2 ms-0 w-full sm:ms-2 md:w-64 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-2xl py-4 text-center md:mt-5 disabled:opacity-50 disabled:cursor-not-allowed">{text}</button>
    )
}


