import { useEffect } from "react";

type ResolveRefs = () => (HTMLElement | null)[];
export const useClickOutside = (
  resolveRefs: ResolveRefs,
  isActive: boolean,
  onOutsideClick: () => void,
  excludeClass?: string 
) => {
  useEffect(() => {
    if (!isActive) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement; 
      const refs = resolveRefs();

      const clickedInside = refs.some((el) => el && el.contains(target));
      
      const clickedExcluded = excludeClass && target.closest(`.${excludeClass}`);

      if (!clickedInside && !clickedExcluded) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isActive, onOutsideClick, resolveRefs, excludeClass]);
};