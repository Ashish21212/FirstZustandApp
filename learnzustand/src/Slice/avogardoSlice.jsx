const avogardoSlice = (set) => ({
    avogardo: 0,
    addAvogardo: () => set((state) => ({ avogardo: state.avogardo + 1 })),
    removeAvogardo: () => set((state) => ({ avogardo: state.avogardo - 1 })),
});
export default avogardoSlice;