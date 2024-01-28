const dragonSlice = (set) => ({
    dragon: 0,
    addDragon: () => set((state) => ({ dragon: state.dragon + 1 })),
    removeDragon: () => set((state) => ({ dragon: state.dragon - 1 })),
});
export default dragonSlice;