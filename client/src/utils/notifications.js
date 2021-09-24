import { message } from "antd";

export const errorMessage = (errorMessage) => {
  return message.error(errorMessage);
};

export const successMessage = (successMessage) => {
  return message.success(successMessage);
};
