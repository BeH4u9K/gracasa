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
                            гадание ggg 

                        </h2>
                        <h2 className='Stext'>
                            на новом
                        </h2>
                        <h2 className='Stext'>
                            уровне
                        </h2>
                    </div>

                    <form className='DivButton' action="https://t.me/Gracesa_bot" target="_blank">
                        <button className='Button'>Перейти</button>
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default Gracasa;