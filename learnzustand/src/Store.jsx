import { create } from 'zustand';
import appleSlice from './Slice/appleSlice';
import avogardoSlice from './Slice/avogardoSlice';
import bananaSlice from './Slice/bananaSlice';
import dragonSlice from './Slice/dragonSlice';
import kiwiSlice from './Slice/kiwiSlice';
import mangoSlice from './Slice/mangoSlice';

const useStore = create((set) => ({
    ...mangoSlice(set),
    ...appleSlice(set),
    ...kiwiSlice(set),
    ...avogardoSlice(set),
    ...dragonSlice(set),
    ...bananaSlice(set)




}))
export default useStore;