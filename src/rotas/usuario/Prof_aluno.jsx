import React from 'react'
import BackgroundLayout from '../../background/VariosLayouts'

export default function Prof_aluno() {
  return (
    <div>
        <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundo0.png')`}>
        <div className='grid justify-center items-center'>
            <div className='space-x-4 mb-16 mt-16 space-y-16'>
              <h1 className='text-center font-extrabold text-5xl'>OLÁ, SEJA BEM VINDO!</h1>
              <h2 className=' text-center font-extrabold text-5xl'>POR FAVOR, NOS DIGA SE VOCÊ É <br/> PROFESSOR, RESPONSÁVEL OU ALUNO:</h2>
            </div>
        </div>
        </BackgroundLayout >
    </div>
  )
}

