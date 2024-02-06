const PopupView = ({ setIsOpen, isOpen, posts }) => {
  return (
    <div className="grid place-items-center w-full h-full fixed bg-black bg-opacity-50 inset-0">
      <div className="w-3/4 max-w-[600px] bg-gray-800 rounded-md p-5">
        <div className="flex justify-between items-center">
          <h4>
            <span className="font-bold text-yellow-500 me-1">{isOpen}</span>{" "}
            Kullanıcısının Gönderileri
          </h4>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-gray-900 p-2 rounded-md"
          >
            Kapat
          </button>
        </div>

        {!posts ? (
          <p>Yükleniyor...</p>
        ) : (
          posts?.map((post) => (
            <div className="bg-black p-3 rounded-md my-4">
              <h2 className="font-bold">{post.title}</h2>
              <p>{post.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PopupView;
