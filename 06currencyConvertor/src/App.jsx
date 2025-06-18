import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import bgImage from './assets/bg.jpeg'

function App() {
        const date = new Date().toISOString().split("T")[0];
        const time = new Date().toLocaleTimeString('en-US',{
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });

  const [amount, setAmount] = useState('')
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState('')

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])
  }
   

   return (
    
        <div className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat tracking-wide"
            style={{
                backgroundImage: `url('${bgImage}')`, }}
        >
            <div className="flex justify-center items-center w-full h-full ">
                <div className="bg-white/35 backdrop-blur-sm border-[2.5px] p-7 rounded-lg mt-2 shadow-lg w-full max-w-md">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1 text-left ">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency= {from}
                                onAmountChange={(amount) => setAmount(amount)}
                                
                                
                                />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                                >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4 text-left">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency= {to}
                                amountDisable
                                
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg border-1"
                        >
                            Convert {from.toUpperCase()} To {to.toUpperCase()}
                        </button>
                    </form>
                </div>
               <h1 className='absolute bottom-12 right-4 text-lg text-white tracking-wider font-extrabold font-mono px-5.5'>Time : {time}</h1>
               <h1 className='absolute bottom-5  right-4 text-lg text-white tracking-wider font-extrabold font-mono '>Date : {date}</h1>
            </div>
            
        </div>
        
    );
}

export default App
