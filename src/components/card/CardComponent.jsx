import React, {useContext} from 'react'
import muñeco from "../../img/Muñeco.svg";
import "./CardComponent.css"
import {EncrypterContext} from "../../context/EncrypterContext";

export const CardComponent = () => {
    const {text, encryptDisabled} = useContext(EncrypterContext)

    return (

        <div className='
        bg-white
        shadow-lg
        rounded-3xl
        p-5
        text-center
        my-auto
        h-full
        mx-5
        mt-2
        w-full
        justify-center
        my-3
        items-center
        lg:m-0
        lg:flex
        
           '>
            <div className={encryptDisabled ? "hidden" : "block"}>
                <img className='bg-white hidden lg:block' alt='muñeco' src={muñeco}></img>
                <div className={"bg-white"}>
                    <p className='bg-white font-bold text-1xl sm:text-2xl'>Ningún mensaje fue encontrado</p>
                    <p className='bg-white text-sm mt-2 text-gray-500 sm:text-1xl'>Ingresa el texto que desees encriptar
                        o
                        desencriptar.</p>
                </div>
            </div>
            <div className={encryptDisabled ? "block" : "hidden"}>
                <p className='bg-white break-all text-sm text-start text-gray-500 sm:text-1xl'>{text}</p>
            </div>

        </div>
    )
}
