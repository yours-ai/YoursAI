import React, { useRef, useState } from "react";
import {
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  UseFloatingOptions,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";

export interface Props {
  placement?: UseFloatingOptions["placement"];
  children: React.ReactNode;
  content: React.ReactNode;
}

export default function Tooltip({ children, content, placement }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const { refs, context, strategy, x, y } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(15),
      flip(),
      shift(),
      arrow({ element: arrowRef, padding: 10 }),
    ],
    whileElementsMounted: autoUpdate,
    placement,
  });
  const hover = useHover(context, { delay: { open: 0, close: 0 } });
  const dismiss = useDismiss(context);
  const role = useRole(context, {
    role: "tooltip",
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    dismiss,
    role,
  ]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          className={`rounded-[10px] bg-white px-[7px] py-[6px] text-13p leading-[16px]`}
          style={{
            width: "max-content",
            position: strategy,
            top: y ?? 0,
            left: x + 25,
            zIndex: 10,
            boxShadow:
              "0px 8px 40px 0px rgba(0, 0, 0, 0.25), 0px 0px 3px 0px rgba(0, 0, 0, 0.55), 0px 0px 3px 0px rgba(255, 255, 255, 0.10)",
          }}
          {...getFloatingProps()}
        >
          <p className="relative z-20">{content}</p>

          <div
            ref={arrowRef}
            style={{
              position: "absolute",
              width: "12px",
              height: "12px",
              background: "white",
              transform: "rotate(45deg)",
              bottom: "75%",
              left: "15%",
              zIndex: 2,
              marginLeft: "1px",
              borderRadius: "2px",
              boxShadow:
                "0px 8px 40px 0px rgba(0, 0, 0, 0.25), 0px 0px 3px 0px rgba(0, 0, 0, 0.55), 0px 0px 3px 0px rgba(255, 255, 255, 0.10)",
            }}
          />
          <div className="absolute inset-0 z-10 rounded-[10px] bg-white" />
        </div>
      )}
    </>
  );
}
