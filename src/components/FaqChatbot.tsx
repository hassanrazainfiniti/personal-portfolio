import React, { useState, useRef, useEffect } from 'react';
import { Send, RotateCcw, Bot, User, Sparkles, MessageSquare, ChevronRight, HelpCircle } from 'lucide-react';
import { FAQ_KNOWLEDGE_BASE, PERSONAL_INFO } from '../data/portfolioData';
import { FaqItem } from '../types';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  followUps?: string[];
  timestamp: string;
}

export const FaqChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hello! I'm Muhammad Hassan Raza's portfolio assistant. Ask me anything about Hassan's technical stack, full-stack development process, past projects, availability, or contact channels!`,
      followUps: [
        'What technologies do you work with?',
        'Can you build a complete full-stack application?',
        'Are you available for freelance projects?',
        'How can I contact you?'
      ],
      timestamp: 'Just now',
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const findBestAnswer = (query: string): FaqItem | null => {
    const cleanQuery = query.toLowerCase().trim();

    // Direct match against known questions
    for (const item of FAQ_KNOWLEDGE_BASE) {
      if (cleanQuery.includes(item.question.toLowerCase()) || item.question.toLowerCase().includes(cleanQuery)) {
        return item;
      }
    }

    // Keyword scoring
    let bestItem: FaqItem | null = null;
    let highestScore = 0;

    for (const item of FAQ_KNOWLEDGE_BASE) {
      let score = 0;
      for (const keyword of item.keywords) {
        if (cleanQuery.includes(keyword.toLowerCase())) {
          score += 2;
        }
      }
      const words = item.question.toLowerCase().split(' ');
      for (const word of words) {
        if (word.length > 3 && cleanQuery.includes(word)) {
          score += 1;
        }
      }

      if (score > highestScore) {
        highestScore = score;
        bestItem = item;
      }
    }

    return highestScore >= 2 ? bestItem : null;
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // Realistic typing latency ~600-900ms
    setTimeout(() => {
      const match = findBestAnswer(text);

      let replyText = '';
      let followUps: string[] = [];

      if (match) {
        replyText = match.answer;
        followUps = match.followUps || [
          'What technologies do you work with?',
          'How can I contact you?',
        ];
      } else {
        replyText = `I don't have a direct answer in my portfolio knowledge base for "${text}". However, Hassan is available directly via email at ${PERSONAL_INFO.email} or WhatsApp at ${PERSONAL_INFO.phoneFormatted}. Feel free to ask about his tech stack, process, or projects!`;
        followUps = [
          'What technologies do you work with?',
          'What is your development process?',
          'How can I contact you?',
        ];
      }

      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        followUps,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 750);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'assistant',
        text: `Conversation restarted! What would you like to know about Muhammad Hassan Raza's full-stack work?`,
        followUps: [
          'What technologies do you work with?',
          'How do you approach a new project?',
          'Are you available for freelance projects?',
        ],
        timestamp: 'Just now',
      },
    ]);
  };

  const suggestedQuestions = [
    'What technologies do you work with?',
    'How do you approach a new project?',
    'Can you build a complete full-stack application?',
    'How do you handle responsive design?',
    'What is your testing and deployment process?',
    'Are you available for freelance projects?',
    'How can I contact you?',
    'Where can I view your resume?',
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#fafbfc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-purple-700 uppercase mb-2">
            08. Interactive Assistant
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 [text-wrap:balance]">
            Questions? Let's Clear Things Up.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Interact with Hassan's knowledge base. Ask about tech stacks, engineering methodology, rates, or availability.
          </p>
        </div>

        {/* Chat Interface Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col h-[650px] sm:h-[700px]">
          {/* Chat Window Header */}
          <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-700 flex items-center justify-center text-white shadow-xs">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-2">
                  <span>Hassan's Portfolio Assistant</span>
                  <span className="text-[10px] font-mono font-normal text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded-sm">
                    Local Intent Engine
                  </span>
                </div>
                <div className="text-xs text-slate-400">
                  Instant answers on skills, workflows & contact info
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 text-xs cursor-pointer"
              title="Reset conversation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>

          {/* Quick Suggested Chips Strip */}
          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 overflow-x-auto flex items-center gap-2 scrollbar-none shrink-0">
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap pl-1">
              Popular questions:
            </span>
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => handleSendMessage(q)}
                disabled={isTyping}
                className="text-xs text-slate-700 bg-white hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300 border border-slate-200 rounded-lg px-2.5 py-1 whitespace-nowrap transition-colors cursor-pointer shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                    msg.sender === 'user'
                      ? 'bg-purple-700 text-white'
                      : 'bg-slate-900 text-white'
                  }`}
                >
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div className="space-y-2">
                  <div
                    className={`p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-2xs ${
                      msg.sender === 'user'
                        ? 'bg-purple-700 text-white rounded-tr-xs'
                        : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-xs'
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>

                  {/* Follow-up suggested buttons */}
                  {msg.sender === 'assistant' && msg.followUps && msg.followUps.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.followUps.map((fu) => (
                        <button
                          key={fu}
                          type="button"
                          onClick={() => handleSendMessage(fu)}
                          disabled={isTyping}
                          className="text-[11px] text-purple-700 bg-white hover:bg-purple-50 border border-purple-200 rounded-md px-2 py-1 transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <span>{fu}</span>
                          <ChevronRight className="w-3 h-3 text-purple-500" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div
                    className={`text-[10px] text-slate-400 font-mono ${
                      msg.sender === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {/* Animated Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 max-w-[80%] mr-auto">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-3.5 bg-white border border-slate-200/80 rounded-2xl rounded-tl-xs flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-bounce [animation-delay:0.4s]" />
                  <span className="text-xs text-slate-500 ml-1">Analyzing query...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box Bar */}
          <div className="p-3 sm:p-4 bg-white border-t border-slate-200 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question (e.g., 'What tech stack do you use?')..."
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all text-slate-900"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="px-4 py-2.5 bg-purple-700 hover:bg-purple-800 disabled:opacity-50 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                aria-label="Send question"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            <div className="text-[11px] text-slate-400 text-center mt-2 font-mono">
              Press Enter to send · Instant client-side intent matching
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
