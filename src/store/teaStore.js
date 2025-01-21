import { create } from 'zustand';

const useStore = create((set) => ({
  // Sidebar holati
  isSidebarActive: true,
  toggleSidebar: () => set((state) => ({ isSidebarActive: !state.isSidebarActive })),

  formData: JSON.parse(localStorage.getItem('formData')) || {
		firstName: '',
		lastName: '',
		phone: '+998',
		password: '',
	},
	setFormData: newFormData => {
		set({ formData: newFormData })
		localStorage.setItem('formData', JSON.stringify(newFormData))
	},

	// User state
	user: JSON.parse(localStorage.getItem('user')) || null,
	setUser: newUser => {
		set({ user: newUser })
		localStorage.setItem('user', JSON.stringify(newUser))
	},

  // Til holati
  language: 'uz', // Default til
  setLanguage: (lang) => set({ language: lang }), // Tilni yangilash
}));

export default useStore;
