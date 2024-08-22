import { useDispatch, useSelector } from "react-redux";

import { clearWishlist } from "../../redux/reducers/wishlistSlice";
import CardOfWishlist from "../../components/Cards/CardOfWishlist";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const clearAllWishlist = () => {
    dispatch(clearWishlist());
  };
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-black flex justify-center  ">
        Your Wishlist
      </h2>
      {wishlist.length === 0 ? (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center text-black mb-6 ">
            Your wishlist is empty.
          </h2>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-4 mt-6  ">
          <button
            className="btn glass bg-purple-600 hover:bg-purple-900 hover:text-white  btn-md"
            onClick={clearAllWishlist}
          >
            Clear Wishlist
          </button>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-4 mt-9">
        {wishlist.map((course) => (
          <CardOfWishlist
            key={course.id}
            course={course}
            title={course.title}
            price={course.price}
            instructor={course.instructor}
            description={course.description}
            rating={course.rating}
            image={course.image}
            isInCart={false}
          />
        ))}
      </div>
    </>
  );
}

export default Wishlist;
