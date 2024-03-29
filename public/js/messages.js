async function getMessagesByChat(chatId) {
  try {
    const response = await fetch(
      `http://localhost:3000/message?chat=${chatId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function postMessage(chatId, userId, message) {
  try {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat: chatId,
        user: userId,
        message: message,
      }),
    };
    const response = await fetch("http://localhost:3000/message", fetchOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default { getMessagesByChat, postMessage };
