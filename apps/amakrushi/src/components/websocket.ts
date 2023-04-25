import { Socket } from 'socket.io-client';

type SendType={
  text:string;
  socketSession:{userID:string;socketID:string},
  socket: any;
  conversationId:string
}

export const send = ({text, socketSession:session,  socket,conversationId}:SendType) => {
  localStorage.setItem('conversationId',conversationId)
  console.log("debug:",{text});
    socket.emit("botRequest", {
      content: {
        text,
        userId: session.userID,
        appId: "AKAI_App_Id",
        channel: "AKAI",
        from: session.socketID,
        context: null,
        accessToken: null,
      },
      to: `akai:${localStorage.getItem('phoneNumber')}`, 
      conversationId
    });
  
}