const mangoSlice = (set) => ({
    mango: 0,
    addMango: () => set((state) => ({ mango: state.mango + 1 })),
    removeMango: () => set((state) => ({ mango: state.mango - 1 })),
});
export default mangoSlice;