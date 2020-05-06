import { useContext } from 'react'
import { StockContext  } from '../context/stock.context'


const useStock = () => {

    const context = useContext(StockContext)
    if (context === undefined) throw new Error(`useAuth must be used within a AuthProvider`)
    return context
}

export default useStock