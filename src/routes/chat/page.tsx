import { useState } from "react";
import sendOpenaiRequest from "@/routes/chat/services.ts";

export function Component() {
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setUrl(url);
  };

  const onChangeToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    const token = e.target.value;
    setToken(token);
  };

  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const message = e.target.value;
    setMessage(message);
  };

  const handleSendRequest = async (
    url: string,
    token: string,
    message: string,
  ) => {
    const data = {
      message: message,
      model: "gpt-4o",
    };

    try {
      const response = await sendOpenaiRequest(url, token, data);
      console.log(response);
      const responseMessage = response.data.choices[0].message.content;
      setResponseMessage(responseMessage);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col">
      <input type="text" placeholder="URL" onChange={onChangeUrl} />
      <input type="text" placeholder="Token" onChange={onChangeToken} />
      <input type="text" placeholder="Message" onChange={onChangeMessage} />
      <button
        onClick={() => {
          handleSendRequest(url, token, message);
        }}
      >
        Send Request
      </button>
      {responseMessage && <p>Response: {responseMessage}</p>}
    </div>
  );
}
