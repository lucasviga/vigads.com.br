import { renderInlineFragment } from "@/components/home-dashboard/chat/formatInlineMarks";
import { splitMessageBlocks } from "@/components/home-dashboard/chat/splitMessageBlocks";

interface ChatMessageBodyProps {
  text: string;
  isLoadingPhrase: boolean;
  isStreaming: boolean;
}

export function ChatMessageBody({
  text,
  isLoadingPhrase,
  isStreaming,
}: ChatMessageBodyProps) {
  if (isLoadingPhrase || !text) {
    return (
      <div className={isLoadingPhrase ? "chatMessageText chatMessageStreaming" : "chatMessageText"}>
        <p className="chatMessageBlock">{text || (isStreaming ? "…" : "")}</p>
      </div>
    );
  }

  const blocks = splitMessageBlocks(text);

  return (
    <div className="chatMessageText">
      {blocks.map((block, index) => (
        <p key={`${index}-${block.slice(0, 24)}`} className="chatMessageBlock">
          {renderInlineFragment(block)}
        </p>
      ))}
    </div>
  );
}
