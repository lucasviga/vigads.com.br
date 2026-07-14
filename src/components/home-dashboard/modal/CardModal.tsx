"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/utils/cn";
import type { CardId } from "@/components/home-dashboard/home-dashboard.types";
import { isClickOutsideDialog } from "@/components/home-dashboard/modal/isClickOutsideDialog";
import { ModalBody } from "@/components/home-dashboard/modal/ModalBody";
import { ModalHeader } from "@/components/home-dashboard/modal/ModalHeader";

interface CardModalProps {
  cardId: CardId | null;
  onClose: () => void;
}

const TITLES: Record<CardId, string> = {
  about: "About me",
  experience: "Experience",
  education: "Education",
  skills: "Skills",
  follow: "Follow me",
};

export function CardModal({ cardId, onClose }: CardModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (cardId && !dialog.open) dialog.showModal();
    if (!cardId && dialog.open) dialog.close();
  }, [cardId]);

  return (
    <dialog
      ref={dialogRef}
      className={cn("modal", cardId === "experience" && "modalExperience")}
      onClose={onClose}
      onClick={(event) => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (isClickOutsideDialog(dialog, event.clientX, event.clientY)) {
          dialog.close();
        }
      }}
      aria-labelledby="home-card-modal-title"
    >
      {cardId ? (
        <div className="modalPanel">
          <ModalHeader title={TITLES[cardId]} onClose={onClose} />
          <div className="modalContent">
            <ModalBody cardId={cardId} />
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
