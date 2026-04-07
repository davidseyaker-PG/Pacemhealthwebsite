import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, User, Loader2 } from 'lucide-react';

import adaAvatar from '../assets/4c5515bdefb686d908038e9baa0d278c3bc9eae3.png';

interface Message {
  id: number;
  type: 'user' | 'bot';
  text: string;
}

export default function AdaChatDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const conversation = [
    { type: 'user', text: 'What career opportunities are available at Pacem Health?' },
    { 
      type: 'bot', 
      text: 'Great question! We have openings across Clinical & Pharmacy, Technology & Innovation, Distribution Operations, and Health Systems Advisory. Would you like to explore roles in a specific area?' 
    },
    { type: 'user', text: 'Tell me about the Healthcare Development Program' },
    { 
      type: 'bot', 
      text: 'The Healthcare Development Program is perfect for those passionate about building sustainable healthcare systems in underserved communities across Africa. It offers hands-on experience with mentorship and professional growth opportunities. Can I help you apply?' 
    }
  ];

  useEffect(() => {
    let isActive = true;

    const runSequence = async () => {
      while (isActive) {
        // Wait initial delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        for (let i = 0; i < conversation.length; i++) {
          if (!isActive) break;
          
          const message = conversation[i];
          
          if (message.type === 'user') {
            // Simulate typing for user message
            setCurrentMessageIndex(i);
            setCurrentCharIndex(0);
            
            for (let j = 0; j <= message.text.length; j++) {
              if (!isActive) break;
              setCurrentCharIndex(j);
              await new Promise(resolve => setTimeout(resolve, 30));
            }
            
            // Add complete user message
            if (isActive) {
              setMessages(prev => [...prev, { id: Date.now() + i, type: 'user', text: message.text }]);
              await new Promise(resolve => setTimeout(resolve, 500));
            }
            
          } else {
            // Show bot typing indicator
            if (isActive) {
              setIsTyping(true);
              await new Promise(resolve => setTimeout(resolve, 1200));
            }
            
            // Add bot message
            if (isActive) {
              setMessages(prev => [...prev, { id: Date.now() + i, type: 'bot', text: message.text }]);
              setIsTyping(false);
              await new Promise(resolve => setTimeout(resolve, 1500));
            }
          }
        }

        // Restart after completion
        if (isActive) {
          await new Promise(resolve => setTimeout(resolve, 3000));
          setMessages([]);
          setCurrentCharIndex(0);
          setCurrentMessageIndex(0);
        }
      }
    };

    runSequence();

    return () => {
      isActive = false;
    };
  }, []);

  const currentTypingText = currentMessageIndex < conversation.length 
    ? conversation[currentMessageIndex].text.substring(0, currentCharIndex)
    : '';

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Chat Interface */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue to-teal p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
            <img 
              src={adaAvatar} 
              alt="Ada" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-white">Ada</h3>
            <p className="text-xs text-white/80">Digital Assistant</p>
          </div>
          <div className="ml-auto">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs text-white/90">Online</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-start gap-2 ${
                  message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${
                  message.type === 'user' 
                    ? 'bg-navy' 
                    : 'border-2 border-blue'
                }`}>
                  {message.type === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <img 
                      src={adaAvatar} 
                      alt="Ada" 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className={`max-w-[75%] p-3 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-navy text-white rounded-tr-none'
                    : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                }`}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </motion.div>
            ))}

            {/* User typing animation */}
            {currentMessageIndex < conversation.length && 
             conversation[currentMessageIndex].type === 'user' && 
             currentCharIndex > 0 && 
             currentCharIndex < conversation[currentMessageIndex].text.length && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2 flex-row-reverse"
              >
                <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="max-w-[75%] p-3 rounded-2xl bg-navy text-white rounded-tr-none">
                  <p className="text-sm leading-relaxed">
                    {currentTypingText}
                    <span className="inline-block w-1 h-4 bg-white ml-0.5 animate-pulse"></span>
                  </p>
                </div>
              </motion.div>
            )}

            {/* Bot typing indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-start gap-2"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-blue flex-shrink-0">
                  <img 
                    src={adaAvatar} 
                    alt="Ada" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Type your message..."
              disabled
              className="flex-1 bg-transparent border-0 focus:outline-none text-sm text-gray-500 cursor-not-allowed"
            />
            <button 
              disabled
              className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center cursor-not-allowed"
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center mt-2">Demo mode - Watch Ada in action!</p>
        </div>
      </div>
    </div>
  );
}