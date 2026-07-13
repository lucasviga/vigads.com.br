const LONG_BLOCK_CHARS = 320;
const SENTENCES_PER_GROUP = 2;

function splitLongPlainBlock(block: string): string[] {
  if (block.length <= LONG_BLOCK_CHARS) return [block];

  const sentences = block.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
  if (!sentences || sentences.length < 2) return [block];

  const groups: string[] = [];
  for (let index = 0; index < sentences.length; index += SENTENCES_PER_GROUP) {
    const group = sentences
      .slice(index, index + SENTENCES_PER_GROUP)
      .map((sentence) => sentence.trim())
      .filter(Boolean)
      .join(" ");
    if (group) groups.push(group);
  }
  return groups.length > 0 ? groups : [block];
}

export function splitMessageBlocks(text: string): string[] {
  const trimmed = text.trim();
  if (!trimmed) return [];

  const paragraphs = trimmed
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean);

  return paragraphs.flatMap((paragraph) => splitLongPlainBlock(paragraph));
}
