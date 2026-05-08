export default function ChatPage({ params }: { params: { chatId: string } }) {
  return <div className="p-6">Chat {params.chatId} — próximamente</div>;
}
