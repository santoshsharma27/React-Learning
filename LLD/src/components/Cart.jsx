import FormComponent from "../reusableComponents/FormComponent";
import { memo } from "react";

const Cart = memo(function Cart() {
  return (
    <>
      <div className="p-10 text-center">
        Cart Page, You can see this page because are a authenticated user
      </div>
      <FormComponent />
    </>
  );
});

export default Cart;
