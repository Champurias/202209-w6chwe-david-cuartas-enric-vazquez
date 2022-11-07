import { Provider } from "react-redux";
import { store } from "../redux/store";

interface StoreWrapperProps {
  children: JSX.Element | JSX.Element[];
}
const storeWrapper = ({ children }: StoreWrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default storeWrapper;
