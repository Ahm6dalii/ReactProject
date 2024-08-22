import { useSelector } from "react-redux";
import CardOfCart from "../../components/Cards/CardOfCart";

function CoursesCart() {
  const cart = useSelector((state) => state.cart);

  const calcTotals = () => {
    return cart.reduce((total, course) => total + course.price, 0).toFixed(2);
  };
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          <div className="dark:bg-black bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Your Shopping Cart
            </h1>

            <div className="space-y-4">
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cart.map((course) => (
                  <CardOfCart
                    key={course.id}
                    course={course}
                    title={course.title}
                    price={course.price}
                    instructor={course.instructor}
                    description={course.description}
                    rating={course.rating}
                    image={course.image}
                    isInCart={true}
                  />
                ))
              )}
            </div>
          </div>

          <div className="mt-6 mx-7">
            <div className="flex items-center justify-between my-4">
              <p className="text-xl font-bold text-gray-800">Total:</p>
              <p className="text-2xl font-bold text-gray-800">
                ${calcTotals()}
              </p>
            </div>
            <div className="my-4">
              <button className="w-full bg-[#7e22ce] text-white text-lg py-3 rounded-lg hover:bg-[#581c87]">
                Checkout
              </button>
            </div>
            <hr className="border-t border-gray-300 my-" />
            <label
              htmlFor="coupon"
              className="block text-sm font-medium text-gray-700 mt-2"
            >
              Promotions
            </label>
            <div className="flex mt-1">
              <input
                type="text"
                id="coupon"
                className="w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter Coupon"
              />
              <button className="bg-[#7e22ce] text-white px-4 py-2 rounded-r-lg hover:bg-[#581c87]">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CoursesCart;
