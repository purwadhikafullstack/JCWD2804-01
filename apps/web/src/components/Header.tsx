export const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white text-black py-4 px-10">
      <div>
        <a href="/" className="font-bold text-2xl">
          EasyStay
        </a>
      </div>
      <div className="flex gap-12 items-center">
        <div className="flex gap-6">
          <a href="/" className="hover:underline">
            Hotel
          </a>
          <a href="/" className="hover:underline">
            Jadi Tenant
          </a>
          <a href="/" className="hover:underline">
            Bantuan
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <button className="border-2 border-gray-500 py-1 px-2 rounded-md bg-black text-white hover:bg-white hover:text-black">
            Masuk
          </button>
          <button className="border-2 border-gray-500 py-1 px-2 rounded-md bg-black text-white hover:bg-white hover:text-black">
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
};
