"use client"
import React, { useRef, useEffect } from "react";
import styles from './Modal.module.css';
import CloseIcon from '../../assets/closeCircle.svg'

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const AppModal = ({ isOpen, onClose, children }: IModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div ref={modalRef} className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon className={styles.closeIcon}/>
        </button>
        {children}
      </div>
    </div>
  );
};
