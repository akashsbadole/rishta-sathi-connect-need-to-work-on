
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Send, Bot, User, X, Heart } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface Message {
  id: number;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const SmartChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { user } = useAuth();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now(),
        type: 'bot',
        text: user 
          ? `Hello ${user.name}! I'm your AI matrimony assistant. How can I help you find your perfect match or plan your wedding today?`
          : 'Welcome to our matrimony platform! I can help you find matches, plan weddings, and answer questions. Please sign in for personalized assistance.',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, user]);

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Wedding Services Responses
    if (input.includes('wedding') || input.includes('marriage') || input.includes('ceremony')) {
      return "I can help you plan your perfect wedding! We offer venue booking, catering, photography, decoration, and complete wedding planning services. Would you like to explore our wedding services or get a personalized quote?";
    }
    
    // Matching Related
    if (input.includes('match') || input.includes('profile') || input.includes('partner')) {
      return "Our AI-powered matching system analyzes 50+ compatibility factors including personality, lifestyle, family background, and preferences. Would you like me to show you your top matches or help optimize your profile for better matches?";
    }
    
    // Background Verification
    if (input.includes('verification') || input.includes('background') || input.includes('verify')) {
      return "We offer 4-tier background verification: Basic (₹500), Standard (₹1,500), Premium (₹5,000), and Elite (₹15,000). Each tier includes comprehensive checks for education, employment, and character references. Which verification package interests you?";
    }
    
    // Pricing and Plans
    if (input.includes('price') || input.includes('cost') || input.includes('plan') || input.includes('subscription')) {
      return "We offer flexible plans: Basic (₹999/month), Premium (₹2,999/month), Elite (₹5,999/month), and Ultra (₹9,999/month). Each plan includes different features like advanced matching, wedding planning, and concierge services. Would you like details about any specific plan?";
    }
    
    // Technical Support
    if (input.includes('help') || input.includes('support') || input.includes('problem') || input.includes('issue')) {
      return "I'm here to help! You can also contact our support team through the ticket system. For technical issues, profile help, or account questions, I can assist immediately. What specific help do you need?";
    }
    
    // Default Intelligent Response
    const responses = [
      "That's an interesting question! Based on your query, I recommend exploring our AI-powered matching system that considers cultural compatibility, lifestyle preferences, and family values. Would you like me to explain how our matching algorithm works?",
      "I understand you're looking for assistance with matrimonial services. Our platform offers comprehensive solutions including verified profiles, background checks, and wedding planning. What aspect would you like to explore first?",
      "Great question! Our platform uses advanced AI to ensure the best matrimonial experience. Whether you're looking for matches, planning a wedding, or need verification services, I can guide you through the process. What's your priority right now?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      text: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        type: 'bot',
        text: generateAIResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const quickActions = [
    'Find matches for me',
    'Wedding planning help',
    'Background verification',
    'Pricing information',
    'Technical support'
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-lg transform transition-transform hover:scale-105"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[500px] z-50 shadow-2xl border-0 bg-white">
          <CardHeader className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-t-lg p-4">
            <CardTitle className="flex items-center space-x-2">
              <Bot className="w-5 h-5" />
              <span>AI Matrimony Assistant</span>
              <Heart className="w-4 h-4 ml-auto animate-pulse" />
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-full">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-2 max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' ? 'bg-blue-500' : 'bg-pink-500'
                    }`}>
                      {message.type === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                    </div>
                    <div className={`p-3 rounded-lg shadow-sm ${
                      message.type === 'user' 
                        ? 'bg-blue-500 text-white rounded-br-none' 
                        : 'bg-white text-gray-800 rounded-bl-none border'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <span className={`text-xs mt-1 block ${
                        message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-pink-500">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white text-gray-800 p-3 rounded-lg rounded-bl-none border">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="p-3 border-t bg-white">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs px-2 py-1 h-auto hover:bg-pink-50 hover:border-pink-300"
                    onClick={() => setInputMessage(action)}
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t bg-white">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1 border-gray-300 focus:border-pink-500"
                />
                <Button 
                  onClick={sendMessage} 
                  size="sm"
                  className="bg-pink-500 hover:bg-pink-600"
                  disabled={!inputMessage.trim() || isTyping}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default SmartChatbot;
