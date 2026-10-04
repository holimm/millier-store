import { CartType } from "@/models/cartModel";
import { saveCartSession } from "@/redux/entities/cart";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCart } from "@/redux/selectors/cart";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const cartData = useAppSelector(getCart);
  const [cartSession, setCartSession] = useState<CartType[]>(null);

  useEffect(() => {
    const handleStorage = () => {
      setCartSession(JSON.parse(window.localStorage.getItem("cart_session")));
    };
    setCartSession(JSON.parse(window.localStorage.getItem("cart_session")));

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    if (!isEmpty(cartSession)) dispatch(saveCartSession(cartSession));
    if (isEmpty(cartSession)) dispatch(saveCartSession([]));
    if (isEmpty(window.localStorage.getItem("cart_session")))
      dispatch(saveCartSession([]));
  }, [cartSession]);

  return !isEmpty(cartSession) ? cartSession : false;
};
