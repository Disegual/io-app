/**
 * Generic utilities for messages
 */

import { CreatedMessageWithContent } from "../../definitions/backend/CreatedMessageWithContent";
import { isTextIncludedCaseInsensitive } from "./strings";

export function messageContainsText(
  message: CreatedMessageWithContent,
  searchText: string
) {
  return (
    isTextIncludedCaseInsensitive(message.content.subject, searchText) ||
    isTextIncludedCaseInsensitive(message.content.markdown, searchText)
  );
}

export function messageNeedsDueDateCTA(message: MessageWithContentPO): boolean {
  return message.content.due_date !== undefined;
}

export function messageNeedsPaymentCTA(message: MessageWithContentPO): boolean {
  return message.content.payment_data !== undefined;
}

export function messageNeedsCTABar(message: MessageWithContentPO): boolean {
  return messageNeedsDueDateCTA(message) || messageNeedsPaymentCTA(message);
}
