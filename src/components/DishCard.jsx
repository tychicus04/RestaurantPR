
const DishCard = ({index, dish}) => {
    return (
        <div
            key={index}
            className="bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-40 object-cover rounded-md mb-5"
            />
            <h2 className="text-xl font-semibold">{dish.name}</h2>
            {/* <p className="text-yellow-400 mt-2">{dish.price}</p> */}
          </div>
    )
}

export default DishCard;