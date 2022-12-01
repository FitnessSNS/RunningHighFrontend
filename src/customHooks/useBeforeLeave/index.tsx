/**
 * 새로고침 전 수행하는 Hooks
 *
 */
export const useBeforeLeave = () => {
  const listener = (event: {
    preventDefault: () => void;
    returnValue: string;
  }) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enableEvent = () => window.addEventListener("beforeunload", listener);
  const disableEvent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enableEvent, disableEvent };
};
