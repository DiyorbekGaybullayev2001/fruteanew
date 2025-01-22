import useStore from '../store/teaStore'
function My_settings() {
  const user = useStore(state => state.user);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{`Ma'lumotlarim`}</h2>
      <form className="border-green-400 border p-4 rounded">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Familiya <span className="text-[red]">*</span></label>
          <input
            type="text"
            className="w-full p-2 border border-green-300 rounded"
            placeholder="Familiya"
            value={user.lastName}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Ism <span className="text-[red]">*</span></label>
          <input
            type="text"
            className="w-full p-2 border border-green-300 rounded"
            placeholder="Ism"
            value={user.firstName}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Telefon raqami</label>
          <input
            type="text"
            className="w-full p-2 border border-green-300 rounded bg-green-200"
            placeholder="Telefon raqami"
            value={user.phone}
            readOnly
          />
        </div>
        <a href="/login">
          <button className="text-red-500">Tizimdan chiqish</button>
        </a>
      </form>
    </div>
  );
}

export default My_settings;
