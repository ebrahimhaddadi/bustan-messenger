// Generate random integer, we will use this to use random message from list of dummy messages.
export const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  
  // Generate unique key for message component of FlatList.
  export const generateUniqueKey = () =>
    `_${Math.random().toString(36).substr(2, 9)}`;
  
  // List of test messages to generate chat data.
  export const testMessages = [
    'Hey, where were you yesterday? I was trying to call you',
    'Yeah dude!! Had a really bad night. I was really hungover',
    'lol, thats so typical you. Who did you go out with?',
    'Dont even ask me about it, I am never going drink with Uthred again. That dude is a beast',
    'hahahaha, I can totally imagine!!',
    'Ciao :)',
  ];
    
  export type Message = {
    id: string;
    text: string;
    isMyMessage: boolean;
  };
  
  /**
   * Mocks the api call to query `n` number of messages.
   * We are going to add some timeout before returning the result to simulate an api call over network.
   * 
   * We are going to generate two types of message:
   * - sent message
   * - received message
   * 
   * This will be controlled by a boolean property on message object - `isMyMessage`.
   * This will be randomly assigned to message, based on result of getRandomInt.
   * These two messages will be styled differently, which is the case for most of the
   * popular messaging applications e.g., whatsapp, messenger
   * 
   * @param n {number} Number of new messages to query
   * @param networkLatency {number} Number of milliseconds, to simulate api call.
   */
  export const queryMoreMessages: (
    n: number,
    networkLatency?: number
  ) => Promise<Array<Message>> = (n, networkLatency = 100) => {
    return new Promise((resolve) => {
      const newMessages: Array<Message> = [];
  
      for (let i = 0; i < n; i++) {
        const messageText = testMessages[getRandomInt(0, testMessages.length)];
        newMessages.push({
          id: generateUniqueKey(),
          text: messageText,
          isMyMessage: Boolean(getRandomInt(0, 2)), // Randomly assign true or false.
        });
      }
  
      // Lets resolve after 500 ms, to simulate network latency.
      setTimeout(() => {
        resolve(newMessages);
      }, networkLatency);
    });
  };