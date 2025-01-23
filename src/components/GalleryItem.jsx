const GalleryItem = ({ image, title, description }) => (
    <div className="relative w-full h-48 lg:h-64 transition-transform duration-300 hover:scale-105">
      <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-md" />
      {title && (
        <div className="p-5">
          <h2 className="text-xl font-semibold mb-3 text-yellow-500">{title}</h2>
          <p className="text-gray-400">{description}</p>
        </div>
      )}
    </div>
  );
  
export default GalleryItem;
  