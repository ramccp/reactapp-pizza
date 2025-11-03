const intl = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

function Pizza({ name, image, price, description }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">{name}</h2>
        <p className="text-gray-600 text-sm max-w-xs mx-auto leading-relaxed px-2">
          {description}
        </p>
        {price && (
          <div className="pt-2">
            <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-md">
              {intl.format(price)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pizza;
