import React from 'react';

const Gracasa = () => {
    const ped = (ped) => {
        console.log("ped")
    }
    return (
        <div className='p'>
            <div className='wraper'>
                <div className='fonSVG'>
                    <div className='fullText'>
                        <h2 className='Ftext'>
                            гадание

                        </h2>
                        <h2 className='Stext'>
                            на новом 
                        </h2>
                        <h2 className='Stext'>
                            уровне
                        </h2>
                    </div>
                    <div className='DivButton'>
                        <button onClick={ped} className='Button'>Перейти</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gracasa;