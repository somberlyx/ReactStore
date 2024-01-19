import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/BagSlice";
import { MdOutlineAdd } from "react-icons/md";
import { IoMdRemove } from "react-icons/io";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  useSelector();

  const handleAddToBag = () => {
    dispatch(bagAction.addToBag(item.id));
    console.log("item added");
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button className="btn btn-success btn-add-bag" onClick={handleAddToBag}>
        Add to Bag <MdOutlineAdd />
      </button>
      <button className="btn btn-add-bag btn-danger">
        Remove from bag <IoMdRemove />
      </button>
    </div>
  );
};

export default HomeItem;
