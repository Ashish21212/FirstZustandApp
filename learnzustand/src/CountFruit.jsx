import React from 'react'
import Fruit from './fruit'
import './CountFruit.css'
import useStore from './Store'

const CountFruit = () => {
    const mango=useStore((state)=>state.mango);
    const addMango=useStore((state)=>state.addMango);
    const removeMango=useStore((state)=>state.removeMango);
    const apple=useStore((state)=>state.apple);
    const addApple=useStore((state)=>state.addApple);
    const removeApple=useStore((state)=>state.removeApple);
    const kiwi=useStore((state)=>state.kiwi);
    const addKiwi=useStore((state)=>state.addKiwi);
    const removeKiwi=useStore((state)=>state.removeKiwi);
    const avogardo=useStore((state)=>state.avogardo);
    const addAvogardo=useStore((state)=>state.addAvogardo);
    const removeAvogardo=useStore((state)=>state.removeAvogardo);
    const dragon=useStore((state)=>state.dragon);
    const addDragon=useStore((state)=>state.addDragon);
    const removeDragon=useStore((state)=>state.removeDragon);
    const banana=useStore((state)=>state.banana);
    const addBanana=useStore((state)=>state.addBanana);
    const removeBanana=useStore((state)=>state.removeBanana);
  return (
    <>
     <h1>Multiple Counter Fruits</h1>
     <div className="container">
        <div className="frow1">
           <Fruit img='Image/apple.jpg'
                   head={apple}
                  inc={addApple}
                  dec={removeApple}
           />
           <Fruit img='Image/mango.png'
                  head={mango}
                  inc={addMango}
                  dec={removeMango}
           />
           <Fruit img='Image/banana.png'
                  head={banana}
                  inc={addBanana}
                  dec={removeBanana}
           />
           <Fruit img='Image/kiwi.png'
                head={kiwi}
                  inc={addKiwi}
                  dec={removeKiwi}
           />
           <Fruit img='Image/avogardo.png'
                  head={avogardo}
                  inc={addAvogardo}
                  dec={removeAvogardo}
           />
           <Fruit img='Image/dragon.png'
                  head={dragon}
                  inc={addDragon}
                  dec={removeDragon}
           />
        </div>
        
     </div>

    </>
  )
}

export default CountFruit
