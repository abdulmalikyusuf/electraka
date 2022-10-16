import { cloneElement, useMemo, useState } from "react";
import {
  Placement,
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useHover,
  useFocus,
  useRole,
  useDismiss
} from "@floating-ui/react-dom-interactions";
import {mergeRefs} from "react-merge-refs";


export const Tooltip = ({ children, label, placement = "right-start" }) => {
  const [open, setOpen] = useState(false);

  const { x, y, reference, floating, strategy, context, middlewareData } = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    middleware: [offset(14), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate
  });
  // const {x: arrowX, y: arrowY} = middlewareData.arrow

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
    useFocus(context),
    useRole(context, { role: "tooltip" }),
    useDismiss(context)
  ]);

  // Preserve the consumer's ref
  const ref = useMemo(() => mergeRefs([reference, children.ref]), [
    reference,
    children
  ]);

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref, ...children.props }))}
      {open && (
        <div
          ref={floating}
          className="bg-primary dark:bg-gray-900 text-white dark:text-white text-white dark:text-white pointer-events-none rounded-lg py-2 px-4 text-sm z-50"
          style={{
            position: strategy,
            top: y ?? 0,
            left: x+9 ?? 0
          }}
          {...getFloatingProps()}>
          {label}
          {/* <div className="absolute bg-tertiary w-4 h-4 transform rotate-45"></div> */}
        </div>
      )}
    </>
  );
};
