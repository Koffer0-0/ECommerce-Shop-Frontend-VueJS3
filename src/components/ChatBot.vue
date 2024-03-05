<template>
  <div id="chatbot" class="fixed bottom-5 right-5 bg-white rounded-lg shadow-lg">
    <div class="p-4">
      <h2 class="text-lg font-semibold mb-2">Chatbot</h2>
      <ul v-if="chatHistory.length > 0" class="overflow-y-auto max-h-40">
        <li v-for="(message, index) in chatHistory" :key="index" class="mb-2">
          <div v-if="message.author === 'user'" class="text-gray-800">
            <span class="font-bold">{{ message.author }}:</span>
            <span class="ml-2">{{ message.text }}</span>
          </div>
          <div v-else class="text-gray-600">
            <span class="font-bold">Bot:</span>
            <span class="ml-2">{{ message.text }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="px-4 py-2 border-t border-gray-200 flex items-center">
      <input type="text" v-model="userInput" @keyup.enter="sendQuery" class="flex-grow bg-gray-100 outline-none px-3 py-2 rounded-lg mr-2" placeholder="Type your message..." />
      <button @click="sendQuery" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Send</button>
    </div>
  </div>
</template>

<script>
import { askChat } from "@/api/chat";

export default {
  name: "ChatBot",
  data() {
    return {
      chatHistory: [],
      userInput: '',
    };
  },
  methods: {
    async sendQuery() {
      if (!this.userInput) return;

      const response = await askChat(this.userInput);
      console.log(response.data.result)
      const { user, bot } = response.data.result;

      if (this.isAuthenticated) {
        this.chatHistory.push({
          author: this.userEmail, // Показываем адрес электронной почты, если пользователь авторизован
          text: bot,
        });
      } else {
        this.chatHistory.push({
          author: 'user',
          text: user,
        });
      }

      this.chatHistory.push({
        author: 'bot',
        text: bot,
      });

      this.userInput = ''; // Clear user input
    },
  },
};
</script>