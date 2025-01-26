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








// import { useState } from 'react';
// import useStore from '../store/teaStore';

// function My_settings() {
//   const user = useStore(state => state.user);
//   const updateUser = useStore(state => state.updateUser); // Ma'lumotlarni yangilash uchun
//   const [formData, setFormData] = useState({
//     lastName: user.lastName,
//     firstName: user.firstName,
//     phone: user.phone,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = () => {
//     updateUser(formData); // API orqali ma'lumotlarni saqlash uchun
//     alert('Ma\'lumotlar saqlandi!');
//   };

//   const handleCancel = () => {
//     setFormData({
//       lastName: user.lastName,
//       firstName: user.firstName,
//       phone: user.phone,
//     });
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">{`Ma'lumotlarim`}</h2>
//       <form className="border-green-400 border p-4 rounded">
//         <div className="mb-4">
//           <label className="block text-sm font-bold mb-2">
//             Familiya <span className="text-[red]">*</span>
//           </label>
//           <input
//             type="text"
//             name="lastName"
//             className="w-full p-2 border border-green-300 rounded"
//             placeholder="Familiya"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-bold mb-2">
//             Ism <span className="text-[red]">*</span>
//           </label>
//           <input
//             type="text"
//             name="firstName"
//             className="w-full p-2 border border-green-300 rounded"
//             placeholder="Ism"
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-bold mb-2">Telefon raqami</label>
//           <input
//             type="text"
//             name="phone"
//             className="w-full p-2 border border-green-300 rounded bg-green-200"
//             placeholder="Telefon raqami"
//             value={formData.phone}
//             readOnly
//           />
//         </div>
//         <div className="flex justify-between">
//           <button
//             type="button"
//             className="bg-green-500 text-white px-4 py-2 rounded"
//             onClick={handleSave}
//           >
//             Saqlash
//           </button>
//           <button
//             type="button"
//             className="bg-gray-500 text-white px-4 py-2 rounded"
//             onClick={handleCancel}
//           >
//             Bekor qilish
//           </button>
//         </div>
//         <a href="/login" className="block mt-4 text-red-500 text-center">
//           Tizimdan chiqish
//         </a>
//       </form>
//     </div>
//   );
// }

// export default My_settings;

