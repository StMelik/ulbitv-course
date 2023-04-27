import { useTheme } from 'app/providers/ThemeProvider';
import {
  FC, ReactNode
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?:boolean
}

export const Modal: FC<ModalProps> = ({
  className, children, isOpen, onClose, lazy
}) => {
  const { theme } = useTheme();

  const { close, isClosing, isMounted } = useModal({ onClose, isOpen });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme, 'app_modal'])}>
        <Overlay onClick={close} />

        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
