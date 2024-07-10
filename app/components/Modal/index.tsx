"use client"
import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from './Modal.module.css'

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const AppModal = ({ isOpen, onClose, children }: IModalProps) => {
  const modalRootRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const modalRoot = document.createElement("div");
      modalRootRef.current = modalRoot;
      document.body.appendChild(modalRoot);

      const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          onClose();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.body.removeChild(modalRoot);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [onClose]);

  if (!isOpen || !modalRootRef.current) return null;

  return ReactDOM.createPortal(
    <div ref={modalRef} className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>,
    modalRootRef.current
  );
};
