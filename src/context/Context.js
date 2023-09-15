import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { onSnapshot, collection, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { firestore } from '../services/firebaseConnetion';
import { AuthContext } from './Auth';


export const ChatContext = createContext({
    chatMessages: [],
    addMessage: () => {},
    updateMessage: () => {},
    deleteMessage: () => {},
  });
  
  export function useChatContext() {
    return useContext(ChatContext);
  }
  
  export function ChatProvider({ children }) {
    const [chatMessages, setChatMessages] = useState([]);
    const { user } = useContext(AuthContext);
  
    useEffect(() => {
      let unsubscribe;
  
      if (user) {
        unsubscribe = onSnapshot(collection(firestore, 'chat'), (snapshot) => {
          const messages = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setChatMessages(messages);
        });
      } else {
        setChatMessages([]);
      }
  
      return () => {
        if (unsubscribe) {
          unsubscribe();
        }
      };
    }, [user]);
  
    const addMessage = useCallback(
      async (content) => {
        try {
          if (user) {
            await addDoc(collection(firestore, 'chat'), {
              userId: user.uid,
              content,
              createdAt: new Date(),
            });
          }
        } catch (error) {
          console.error("Error adding message: ", error);
        }
      },
      [user]
    );
  
    const updateMessage = useCallback(
      async (messageId, newContent) => {
        try {
          if (user) {
            const messageRef = doc(firestore, 'chat', messageId);
            await updateDoc(messageRef, { content: newContent });
          }
        } catch (error) {
          console.error("Error updating message: ", error);
        }
      },
      [user]
    );
  
    const deleteMessage = useCallback(
      async (messageId) => {
        try {
          if (user) {
            const messageRef = doc(firestore, 'chat', messageId);
            await deleteDoc(messageRef);
          }
        } catch (error) {
          console.error("Error deleting message: ", error);
        }
      },
      [user]
    );
  
    const value = useMemo(
      () => ({
        chatMessages,
        addMessage,
        updateMessage,
        deleteMessage,
      }),
      [chatMessages, addMessage, updateMessage, deleteMessage]
    );
  
    return (
      <ChatContext.Provider value={value}>
        {children}
      </ChatContext.Provider>
    );
  }
  