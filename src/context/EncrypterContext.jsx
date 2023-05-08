import React, {createContext, useState} from 'react'

export const EncrypterContext = createContext()

export const EncrypterProvider = ({children}) => {

    const [text, setText] = useState("")
    const [encryptDisabled, setEncryptDisabled] = useState(false)


    const handleEncrypt = () => {
        setText(text.trim().toLowerCase())
        var textEncrypted = text.replaceAll(/e/g, "enter")
        textEncrypted = textEncrypted.replaceAll(/i/g, "imes")
        textEncrypted = textEncrypted.replaceAll(/a/g, "ai")
        textEncrypted = textEncrypted.replaceAll(/o/g, "ober")
        textEncrypted = textEncrypted.replaceAll(/u/g, "ufat")
        setText(textEncrypted)
        setEncryptDisabled(true)
    }

    const handleDecrypt = () => {
        setEncryptDisabled(false)
        var txtDecrypted = text.replaceAll(/enter/g, "e");
        txtDecrypted = txtDecrypted.replaceAll(/imes/g, "i");
        txtDecrypted = txtDecrypted.replaceAll(/ai/g, "a");
        txtDecrypted = txtDecrypted.replaceAll(/ober/g, "o");
        txtDecrypted = txtDecrypted.replaceAll(/ufat/g, "u");
        setText(txtDecrypted)
    }


    return (
        <EncrypterContext.Provider value={{
            text,
            setText,
            handleEncrypt,
            handleDecrypt,
            encryptDisabled

        }}>{children}</EncrypterContext.Provider>
    )
}
