interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

export function ModalHeader({ title, onClose }: ModalHeaderProps) {
  return (
    <div className="modalHeader">
      <h2 id="home-card-modal-title">{title}</h2>
      <button
        type="button"
        className="closeButton"
        onClick={onClose}
        aria-label="Close details"
      >
        x
      </button>
    </div>
  );
}
