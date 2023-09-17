import React, { useState } from 'react';
import { useChatContext } from '../../context/Context';
import enviar from './../../assets/img/enviar.png'

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import './../chat/chat.css'
import lixo from './../../assets/img/lixeira.png'
import disquete from './../../assets/img/disquete.png'
import lapis from './../../assets/img/lapis.png'

export default function Chat() {
  const { chatMessages, addMessage, updateMessage, deleteMessage } = useChatContext();
  const [newMessage, setNewMessage] = useState('');
  const [editingMessage, setEditingMessage] = useState(null);
  const [editedMessage, setEditedMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      addMessage(newMessage);
      setNewMessage('');
    }
  };

  const handleEditMessage = (messageId) => {
    setEditingMessage(messageId);
    const messageToEdit = chatMessages.find((message) => message.id === messageId);
    if (messageToEdit) {
      setEditedMessage(messageToEdit.content);
    }
  };

  const handleSaveEdit = () => {
    if (editedMessage.trim() !== '') {
      updateMessage(editingMessage, editedMessage);
      setEditingMessage(null);
      setEditedMessage('');
    }
  };

  const handleDeleteMessage = (messageId) => {
    deleteMessage(messageId);
  };

  return (
    <div>
    <Header/>
    <br/>
    <div className="chat-messages">
        <h1 className='titulo'>Bem-vindo(a) ao Chat</h1>
        <div>
        {chatMessages.map((message) => (
            <div key={message.id}>
                {editingMessage === message.id ? (
                <div className='edit-text'>
                    <textarea
                    style={{ width: "400px", height: "30px" }}
                    className='text'
                    type="text"
                    value={editedMessage}
                    onChange={(e) => setEditedMessage(e.target.value)}
                    />
                    <button className='bnt2' onClick={handleSaveEdit}><img src={disquete} width="30" height="30"/></button>
                </div>
                ) : (
                <div className='mensagem'>
                    <p>{message.content}</p>
                    <button className='bnt' onClick={() => handleEditMessage(message.id)}><img src={lapis} width="30" height="30"/></button>
                    <button className='bnt' onClick={() => handleDeleteMessage(message.id)}><img src={lixo} width="30" height="30"/></button>
                </div>
                )}
            </div>
        ))}

        </div>
        <br/>
        <div className='caixa-enviar'>
            <input
            style={{ width: "600px", height: "30px" }}
            className="caixa-text"
            type="text"
            placeholder="Digite sua mensagem"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            />
            <button className='enviar' onClick={handleSendMessage}><img src={enviar} width='40' height='40'/></button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
