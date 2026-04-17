import React, { useState, useReducer, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, CircuitBoard, Bot, Loader2 } from "lucide-react";
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

  // CRITICAL FIX: The Guarded Scroll Handshake
  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [state.messages, state.isThinking, isOpen]);

  const handleCommand = async (e) => {
    e.preventDefault();
    if (!input.trim() || state.isThinking) return;
    const userQuery = input;
    setInput("");
    dispatch({ type: 'ADD_MESSAGE', payload: { role: "user", content: userQuery } });
    dispatch({ type: 'START_THINKING' });

    try {
      const response = await fetch("https://udaaro-backend.onrender.com/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userQuery }),
      });
      const data = await response.json();
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: data.response } });
    } catch (err) {
      dispatch({ type: 'ADD_MESSAGE', payload: { role: "ai", content: "ERROR: Node Offline." } });
    } finally {
      dispatch({ type: 'STOP_THINKING' });
    }
  };

  return (
    <div className="fixed bottom-12 right-12 z-[10000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
            className="w-[400px] h-[600px] bg-white border border-[#D4AF37]/30 rounded-[3rem] shadow-2xl flex flex-col overflow-hidden backdrop-blur-3xl"
          >
            <div className="p-8 bg-[#0F1419] text-[#D4AF37] flex justify-between items-center">
              <h4 className="font-black italic uppercase tracking-tighter">Sovereign_AI</h4>
              <button onClick={() => setIsOpen(false)}><X /></button>
            </div>
            <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-[#FDF9F3]/50 custom-scrollbar" ref={scrollRef}>
              {state.messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm italic font-medium ${m.role === 'user' ? 'bg-[#0F1419] text-white' : 'bg-white border text-slate-700'}`}>
                    <ReactMarkdown>{m.content || ""}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleCommand} className="p-6 border-t bg-white flex gap-3">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Query logic..." className="flex-1 bg-slate-50 rounded-xl px-4 py-3 text-xs outline-none" />
              <button className="p-3 bg-[#0F1419] text-[#D4AF37] rounded-xl"><Send size={18} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button onClick={() => setIsOpen(!isOpen)} className="w-20 h-20 bg-[#0F1419] border-2 border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] shadow-2xl">
        <Bot size={32} />
      </motion.button>
    </div>
  );
};

export default SovereignAI;