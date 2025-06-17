import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'
import bgImage from './assets/bg.jpeg'

function App() {

  const [amount,setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount*currencyInfo(to))
  }
   

   return (
    
        <div className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat  font-serif tracking-wide"
            style={{
                backgroundImage: `url('${bgImage}')`, }}
        >
            <div className="flex justify-center items-center w-full h-full ">
                <div className="bg-white/30 backdrop-blur-sm border-2 p-6 rounded-lg shadow-lg w-full max-w-md">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1 text-left">
                            <InputBox
                                label="From"
                                amount={amount}

                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4 text-left">
                            <InputBox
                                label="To"
                                
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg border-1">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
        
    );
}

export default App
