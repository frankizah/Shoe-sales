import React, { useState } from 'react';
import Navbar from './Navbar';

const ChatBot = () => {
  const [messages, setMessages] = useState([{ sender: 'bot', text: "Hi, I am your Helper. Type 'quit' to end the conversation." }]);
  const [input, setInput] = useState('');

  // Updated pattern-based responses
  const pairs = [
    [/(hi|hello|hey)/i, [
      "👋 Welcome to Frankizah Shoes! How can I help you today?",
      "Hi there! Looking for a new pair of kicks?",
      "Hey! Need help finding the perfect shoes?"
    ]],

    [/how are you\?/i, [
      "I'm doing great, thanks! Ready to help you find your next favorite shoes 👟",
      "I'm good! Let’s find something stylish for your feet today 😊"
    ]],

    [/price|cost/i, [
      "Our prices vary by style and size — what kind of shoes are you interested in?",
      "Let me know your budget and preferred style, and I'll show you some great options."
    ]],

    [/size/i, [
      "We have sizes for men, women, and kids. What size are you looking for?",
      "Please tell me your size and whether it’s for men, women, or children."
    ]],

    [/color/i, [
      "We offer shoes in black, white, red, blue, and more! What’s your favorite?",
      "We’ve got plenty of colors available — which one do you prefer?"
    ]],

    [/available|in stock/i, [
      "Yes, we keep our bestsellers in stock. Which product are you asking about?",
      "Availability depends on the model — let me know which one you're looking for."
    ]],

    [/delivery|shipping/i, [
      "We offer fast and affordable delivery across the country 🚚",
      "Delivery usually takes 2–5 business days depending on your location."
    ]],

    [/return|refund/i, [
      "You can return shoes within 7 days if unworn and in original condition.",
      "We do accept returns! Would you like help starting one?"
    ]],

    [/order|buy/i, [
      "You can place your order right here on our website. Just click 'Add to Cart' and proceed to checkout!",
      "Ordering is easy! Select a product, choose your size and color, then click 'Buy Now'."
    ]],

    [/brand|type/i, [
      "We carry casual, formal, sports, and designer shoe types — what are you looking for today?",
      "From sneakers to heels to sandals — we’ve got you covered!"
    ]],

    [/who|what is frankizah/i, [
      "Frankizah Shoes is your trusted brand for stylish, affordable footwear.",
      "We’re a proudly local shoe company delivering comfort and style."
    ]],

    [/help|support/i, [
      "I'm here to help! Ask me anything about our shoes, orders, or services.",
      "Need assistance with a product or order? Just type your question!"
    ]],

    [/thank/i, [
      "You're welcome! Let me know if there's anything else I can help with 😊",
      "Always happy to help! Enjoy shopping with Frankizah Shoes!"
    ]],

    [/(.*)/, [
      "Sorry, I didn't quite catch that. Could you rephrase your question?",
      "Hmm, I’m not sure how to answer that. Try asking about shoes, sizes, prices, or orders.",
      "Can you clarify? I’m best at helping with shopping-related questions!"
    ]]
  ];

  // Function to get a random bot response based on user input
  const getBotResponse = (input) => {
    for (let [pattern, responses] of pairs) {
      if (pattern.test(input)) {
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    return "Sorry, something went wrong.";
  };

  // Handle user input and bot response
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    let botMessage;

    if (input.toLowerCase() === 'quit') {
      botMessage = { sender: 'bot', text: "Goodbye! Have a nice day." };
    } else {
      const response = getBotResponse(input);
      botMessage = { sender: 'bot', text: response };
    }

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-2">Helper ChatBot</h2>
      <div className="h-64 overflow-y-auto border p-2 mb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-1 rounded-md ${msg.sender === 'user' ? 'bg-blue-100' : 'bg-gray-200'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="bg-blue-500 text-white px-3 py-1 rounded" type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;
