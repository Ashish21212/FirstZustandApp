const kiwiSlice = (set) => ({
    kiwi: 0,
    addKiwi: () => set((state) => ({ kiwi: state.kiwi + 1 })),
    removeKiwi: () => set((state) => ({ kiwi: state.kiwi - 1 })),
});
export default kiwiSlice;