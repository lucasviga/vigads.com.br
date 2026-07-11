import type { ReactNode } from "react";
import { createElement, Fragment } from "react";

export function formatInlineMarks(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match = pattern.exec(text);
  let key = 0;

  while (match) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(createElement("strong", { key: `b-${key}` }, match[1]));
    key += 1;
    lastIndex = match.index + match[0].length;
    match = pattern.exec(text);
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes.length > 0 ? nodes : [text];
}

export function renderInlineFragment(text: string): ReactNode {
  return createElement(Fragment, null, ...formatInlineMarks(text));
}
