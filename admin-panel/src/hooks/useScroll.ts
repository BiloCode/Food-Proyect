const useScroll = () => {
  const disabled = () => {
    document.body.style.overflow = "hidden";
  };

  const enabled = () => {
    document.body.style.overflow = "auto";
  };

  return {
    disabled,
    enabled,
  };
};

export default useScroll;
