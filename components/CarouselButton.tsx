

const CarouselButton = ({ direction, onClick } : any) => {
    return (
      <button 
        className={`absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ${
          direction === 'left' ? 'left-4' : 'right-4'
        }`}
        onClick={onClick}
      >
        {direction === 'left' ? '◀' : '▶'}
      </button>
    );
  };
  
  export default CarouselButton;
  