import React from 'react';
import ChatBot from 'react-simple-chatbot';

const Health = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <ChatBot
        headerTitle="Medical Chat"
        speechSynthesis={{ enable: true, lang: 'en' }}
        style={{ width: '1000px', height: '520px', padding: '0' }}
        
        steps={[
          {
            id: '1',
            message: 'Welcome to the Medical Chatbot! What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you! How can I assist you today?',
            trigger: 'options',
          },
          {
            id: 'options',
            options: [
              { value: 'symptoms', label: 'I want to know about symptoms', trigger: 'symptoms' },
              { value: 'treatment', label: 'I need information about treatments', trigger: 'treatment' },
              { value: 'prevention', label: 'I want to learn about prevention measures', trigger: 'prevention' },
              { value: 'emergency', label: 'I have an emergency', trigger: 'emergency' },
            ],
          },
          {
            id: 'symptoms',
            message: 'What symptoms are you experiencing?',
            trigger: 'symptoms-options',
          },
          {
            id: 'symptoms-options',
            options: [
              { value: 'headache', label: 'Headache', trigger: 'headache-symptoms' },
              { value: 'stomach-ache', label: 'Stomach ache', trigger: 'stomach-ache-symptoms' },
            ],
          },
          {
            id: 'headache-symptoms',
            message: 'Headache can be caused by various factors such as tension, dehydration, or migraines. Do you have any other symptoms along with headache?',
            trigger: 'options',
          },
          {
            id: 'stomach-ache-symptoms',
            message: 'Stomach ache can be due to digestive issues, infections, or gastritis. Are there any other symptoms accompanying your stomach ache?',
            trigger: 'options',
          },
          {
            id: 'treatment',
            message: 'What condition are you seeking treatment information for?',
            trigger: 'options',
          },
          {
            id: 'prevention',
            message: 'Would you like to know about general prevention measures or for a specific condition?',
            trigger: 'options',
          },
          {
            id: 'emergency',
            message: 'If you have a medical emergency, please call emergency services immediately.',
            trigger: 'options',
          },
        ]}
      />
    </div>
  );
};

export default Health;
