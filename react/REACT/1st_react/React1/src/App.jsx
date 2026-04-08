import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [coins, setCoins] = useState(0)
  const [marioSize, setMarioSize] = useState('small')
  const timeoutRef = useRef(null)

  const clearTimeoutIfExists = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const incrementCoin = () => {
    setCoins(coins + 1)
  }

  const growMario = () => {
    clearTimeoutIfExists()
    const sizes = ['small', 'big']
    const currentIndex = sizes.indexOf(marioSize)
    const nextIndex = (currentIndex + 1) % sizes.length
    setMarioSize(sizes[nextIndex])
    
    // Auto-decrease after 3s
    timeoutRef.current = setTimeout(() => {
      const prevIndex = (nextIndex - 1 + sizes.length) % sizes.length
      setMarioSize(sizes[prevIndex])
    }, 3000)
  }

  const death = () => {
    clearTimeoutIfExists()
    setCoins(0)
    setMarioSize('small')
  }

  useEffect(() => {
    return () => {
      clearTimeoutIfExists()
    }
  }, [])

  return (
    <div className="mario-app">
      <h1>Mario's Adventure</h1>
      <div className="coins-board">
        Coins: {coins} 🪙
      </div>
      <div className="mario-info">
        Mario Size: <span className={`size-${marioSize}`}>🍄 {marioSize.toUpperCase()}</span>
      </div>
      <div className="buttons-row">
        <button onClick={incrementCoin}>+1 Coin</button>
        <button onClick={incrementCoin}>+1 Coin</button>
        <button onClick={growMario}>🍄 Grow Mario</button>
      </div>
      <div className="death-button">
        <button onClick={death}>💀 Death</button>
      </div>
    </div>
  )
}

export default App
