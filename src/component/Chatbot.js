import React from 'react';
import { useState } from 'react';
import Header from './Header';
import data from '../data/Dialogs.json';
import Footer from './Footer';
import Chatbots from "react-chatbot-kit";
import config from "./Chatbot/Config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import 'react-chatbot-kit/build/main.css';

function Chatbot() {
    return (
        <div className='bg-blue-200 min-h-screen'>
            <Header />

            <h3 className='font-bold text-center text-3xl mt-2 font-serif'>
                Chatbot
            </h3>
            <h5 className='text-center mt-2 font-serif'>
                Multi-lingual chatbot, powered by Gemini API
            </h5>

            <div className='flex items-center justify-center mt-4'>
                <img
                    className='w-20'
                    src='https://cdn.discordapp.com/attachments/1355848500180422687/1401072404079579227/Screenshot_2025-08-02_at_1.17.29_PM-removebg-preview.png?ex=688ef1db&is=688da05b&hm=df61eb9412811b4cfae7846956b6719892081ade098eca10c32e16d60c6bec6b&'
                    alt='Chatbot Logo'
                />
            </div>

            <div className='flex items-start justify-center mt-6'>
                <Chatbots
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            </div>

            <Footer />
        </div>
    );
}

export default Chatbot;
