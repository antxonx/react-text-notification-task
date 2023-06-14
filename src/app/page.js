"use client"

import TextNotification from "./textNotification"

export default function Home() {
  return (
    <div className='app-layout'>
      <TextNotification textMessage={{
        from: "3342079227",
        text: "This is a message from your client about a loan",
        threadId: "123456789"
      }}
        sendReply={console.log}
        navigateToInboxThread={threadId => console.log("navigate to threadId - " + threadId)}
      />
    </div>
  )
}