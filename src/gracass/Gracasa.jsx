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

                    <form className='DivButton' action="https://www.youtube.com/watch?v=Chu4fCCBylk&t=3304s&ab_channel=%D0%94%D0%96%D0%90%D0%A0%D0%90%D0%A5%D0%9E%D0%92" target="_blank">
                        <button className='Button'>Перейти</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Gracasa;