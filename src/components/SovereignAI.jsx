import React, { useState, useReducer, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Bot, Loader2, Sparkles } from "lucide-react";
import ReactMarkdown from 'react-markdown';

const aiReducer = (state, action) => {
  switch (action.type) {
    case 'START_THINKING': return { ...state, isThinking: true };
    case 'STOP_THINKING': return { ...state, isThinking: false };
    case 'ADD_MESSAGE': return { ...state, messages: [...state.messages, action.payload] };
    default: return state;
  }
};

const SovereignAI = () => {
  const [state, dispatch] = useReducer(aiReducer, {
    messages: [{ role: "ai", content: "Neural Node Active. Awaiting founder query." }],
    isThinking: false
  });
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);

  // Robust Scroll Handshake
  const scrollToBottom = () => {
    if (scrollRef.current) {
      const { scrollHeight, clientHeight } = scrollRef.current;
      scrollRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Small timeout ensures the DOM has rendered the new message before scrolling
      const timeout = setTimeout(scrollToBottom, 100);
      return () => clearTimeout(timeout);
    }
  }, [state.messages, state.isThinking, isOpen]);

  const handleCommand = async (e) => {
    e.preventDefault();
    if (!input.trim() || state.isThinking) return;

    const userQuery = input.trim();
    setInput("");
    
    dispatch({ type: 'ADD_MESSAGE', payload: { role: "user", content: userQuery } });
    dispatch({ type: 'START_THINKING' });

    try {
      const response = await fetch("https://udaaro-backend.onrender.com/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userQuery }),
      });

      if (!response.ok) throw new Error("Network Response Fail");
      
      const data = await response.json();
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: data.response } });
    } catch (err) {
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: "⚠️ **SYSTEM_ERROR:** Neural link severed. Please verify connectivity." } });
    } finally {
      dispatch({ type: 'STOP_THINKING' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[10000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="w-[90vw] md:w-[450px] h-[600px] bg-white border border-[#D4AF37]/30 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl flex flex-col overflow-hidden backdrop-blur-3xl mb-6"
          >
            {/* Header */}
            <div className="p-6 md:p-8 bg-[#0F1419] text-[#D4AF37] flex justify-between items-center border-b border-[#D4AF37]/20">
              <div className="flex items-center gap-3">
                <Sparkles size={18} className="animate-pulse" />
                <h4 className="font-black italic uppercase tracking-widest text-sm">Sovereign_AI_v4</h4>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:rotate-90 transition-transform duration-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div 
              className="flex-1 p-6 overflow-y-auto space-y-6 bg-[#FDF9F3]/40 scroll-smooth" 
              ref={scrollRef}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {state.messages.map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm italic shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-[#0F1419] text-white rounded-tr-none' 
                      : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'
                  }`}>
                    <article className="prose prose-sm prose-slate max-w-none">
                      <ReactMarkdown>{m.content || ""}</ReactMarkdown>
                    </article>
                  </div>
                </motion.div>
              ))}
              
              {state.isThinking && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none flex items-center gap-3">
                    <Loader2 size={16} className="animate-spin text-[#D4AF37]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Synthesizing...</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleCommand} className="p-6 border-t bg-white flex gap-3 items-center">
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Query logic matrix..." 
                className="flex-1 bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-xs outline-none focus:border-[#D4AF37]/50 transition-all font-medium italic" 
              />
              <button 
                disabled={state.isThinking || !input.trim()}
                className="p-4 bg-[#0F1419] text-[#D4AF37] rounded-2xl hover:bg-[#D4AF37] hover:text-white transition-all disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)} 
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 border-2 ${
          isOpen ? 'bg-white border-slate-200 text-[#0F1419]' : 'bg-[#0F1419] border-[#D4AF37] text-[#D4AF37]'
        }`}
      >
        {isOpen ? <X size={28} /> : <Bot size={32} />}
      </motion.button>
    </div>
  );
};

export default SovereignAI;