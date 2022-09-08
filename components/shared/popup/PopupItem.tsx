import { ReactNode, Ref, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { openPopup } from '../store/popupSlice';

export interface PopupItemProps {
  customRender?: ReactNode;
  children: (props: { ref: Ref<any> }) => ReactNode;
}

const PopupItem = ({ customRender, children }: PopupItemProps) => {
  const dispatch = useDispatch();
  const ref = useRef<Element>(null);

  return (
    <div
      className="w-full h-full"
      onClick={() => {
        dispatch(
          openPopup({
            el: ref.current,
            children: customRender ?? children({ ref }),
          })
        );
      }}
    >
      {children({
        ref,
      })}
    </div>
  );
};

export default PopupItem;
