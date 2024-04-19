import { create } from 'zustand';
import { SidebarState } from '../corePage/format';

const useSidebarStore = create<SidebarState>((set) => ({
	isSidebarVisible: false,
	setSidebarVisibility: (visible: boolean) =>
		set({ isSidebarVisible: visible }),
}));

export default useSidebarStore;
