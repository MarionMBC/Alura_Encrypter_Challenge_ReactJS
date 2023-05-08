import React from 'react';
import {TbAlertCircleFilled} from 'react-icons/tb';
import './App.css';
import {TextBox} from './components/textBox/TextBox';
import logo from './img/alura_logo.svg'
import {ButtonCustom} from './components/ButtonCustom';
import {EncrypterProvider} from './context/EncrypterContext';
import {CardComponent} from './components/card/CardComponent';

function App() {

    return (
        <EncrypterProvider>
            <header className="ps-5 pt-5 md:absolute">
                <img src={logo} alt='logo'></img>
            </header>
            <div className="h-screen md:p-10 lg:grid lg:grid-cols-4 lg:gap-2 md:px-32">
                <section
                    className="col-span-3 lg:px-20 md:items-center md:justify-center lg:items-start lg:justify-start">
                    <TextBox/>
                    <footer className="">
                        <div className="ps-5 icon-color flex flex-row align-middle">
                            <TbAlertCircleFilled className='self-center me-2'></TbAlertCircleFilled>
                            <p className='self-center'>Solo letras minúsculas y sin acentos</p>
                        </div>
                        <div
                            className={"flex px-5 flex-col grow justify-center items-between sm:flex-row md:justify-between"}>
                            <ButtonCustom text={"Encriptar"} outlined={false}></ButtonCustom>
                            <ButtonCustom text={"Desencriptar"} outlined={true}></ButtonCustom>
                        </div>
                    </footer>
                </section>
                <section className="flex justify-center items-center">
                    <CardComponent></CardComponent>
                </section>
            </div>

        </EncrypterProvider>
    );
}

export default App;
