export const handleLoader = (bool) => {
  return {
    type: "handleLoader",
    payload: bool,
  };
};

export const updateModal = (object) => {
  return {
    type: "updateModal",
    payload: object,
  };
};
