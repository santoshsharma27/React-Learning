import FormComponent from "../reusableComponents/FormComponent";

function Cart() {
  return (
    <>
      <div className="p-10 text-center">
        Cart Page, You can see this page because are a authenticated user
      </div>
      <FormComponent />
    </>
  );
}

export default Cart;
