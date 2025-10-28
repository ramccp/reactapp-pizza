let date = 0
function Pizza({ name, image, price, description }) {
  date = Date.now();
  return (
    <div onClick={()=>{}} className="bg-white rounded-lg m-4 shadow-md p-4 max-w-xs mx-auto flex w-xl flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{name} </h2>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <p className="text-gray-600 text-sm mb-2">Date: {date}</p>
    </div>
  );
}

export default Pizza;
