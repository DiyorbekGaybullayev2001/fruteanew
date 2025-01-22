function My_orders() { 
  return (
    <>
      <div><button className="bg-green-500 p-[10px] rounded-2xl text-[17px] text-white font-medium">Barcha byurtmalar</button></div>

      <div className="border w-full h-full text-center mt-[20px]">
        <h1 className="  md:text-[25px] font-medium mt-[10px]">
            {`Hech narsa yo'q`}
        </h1>
        <p>
            {`Sizda buyurtmalar yo'q! Barcha kerakli narsalarni topish uchun qidirishdan foydalaning!`}
        </p><br />
        <a href="/products">
            <button className="bg-green-500 p-[10px] rounded-2xl text-[17px] text-white font-medium">Xaridlarni boshlash</button> <br /><br />
        </a>
        <a href="/">
            <button className="font-medium text-[17px] hover:text-green-400">Bosh sahifaga qaytish</button>
        </a>
      </div>
    </>
  );
}

export default My_orders;
