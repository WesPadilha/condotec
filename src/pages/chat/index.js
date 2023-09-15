import React, { useState } from 'react';
import { useChatContext } from '../../context/Context';
import enviar from './../../assets/img/enviar.png'

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import './../chat/chat.css'

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
            <div key={message.id} className="mesagem">
                {editingMessage === message.id ? (
                <div>
                    <input
                    type="text"
                    value={editedMessage}
                    onChange={(e) => setEditedMessage(e.target.value)}
                    />
                    <button onClick={handleSaveEdit}>Salvar</button>
                </div>
                ) : (
                <div>
                    <p>{message.content}</p>
                    <button onClick={() => handleEditMessage(message.id)}>Editar</button>
                    <button onClick={() => handleDeleteMessage(message.id)}>Delete</button>
                </div>
                )}
            </div>
        ))}

        </div>
        <br/>
        <div className='caixa-enviar'>
            <input
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
