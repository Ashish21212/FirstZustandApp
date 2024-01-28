const bananaSlice = (set) => ({
    banana: 0,
    addBanana: () => set((state) => ({ banana: state.banana + 1 })),
    removeBanana: () => set((state) => ({ banana: state.banana - 1 })),
});
export default bananaSlice;