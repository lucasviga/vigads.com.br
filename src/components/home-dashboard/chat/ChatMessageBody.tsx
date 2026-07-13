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
  const showCaret = isStreaming && !isLoadingPhrase && Boolean(text);

  if (isLoadingPhrase || !text) {
    return (
      <div
        className={
          isLoadingPhrase ? "chatMessageText chatMessageStreaming" : "chatMessageText"
        }
      >
        <p className="chatMessageBlock">{text || (isStreaming ? "…" : "")}</p>
      </div>
    );
  }

  const blocks = splitMessageBlocks(text);
  const lastIndex = blocks.length - 1;

  return (
    <div className="chatMessageText">
      {blocks.map((block, index) => (
        <p key={`${index}-${block.slice(0, 24)}`} className="chatMessageBlock">
          {renderInlineFragment(block)}
          {showCaret && index === lastIndex ? (
            <span className="chatTypingCaret" aria-hidden="true" />
          ) : null}
        </p>
      ))}
    </div>
  );
}
