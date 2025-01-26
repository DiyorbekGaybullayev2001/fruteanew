import { create } from 'zustand';

const useStore = create((set) => ({
  isSidebarActive: true,
  toggleSidebar: () => set((state) => ({ isSidebarActive: !state.isSidebarActive })),

 user: JSON.parse(localStorage.getItem('user')) || null,
 setUser: newUser => {
  set({ user: newUser })
  localStorage.setItem('user', JSON.stringify(newUser))
 },

  language: 'uz', 
  setLanguage: (lang) => set({ language: lang }),
}));

export default useStore;


// bu fc userni yangilashga
// const useStore = create((set) => ({
//   user: {
//     lastName: '',
//     firstName: '',
//     phone: '',
//   },
//   updateUser: (updatedUser) => set((state) => ({
//     user: { ...state.user, ...updatedUser },
//   })),
// }));




// import { create } from 'zustand'

// const useStore = create(set => ({
// 	isSidebarActive: true,
// 	toggleSidebar: () =>
// 		set(state => ({ isSidebarActive: !state.isSidebarActive })),

// 	user: null,
// 	setUser: user => set({ user }),

// 	languagee: 'uz',
// 	setLanguage: i => set({ languagee: i }),
// }))

// export default useStore
