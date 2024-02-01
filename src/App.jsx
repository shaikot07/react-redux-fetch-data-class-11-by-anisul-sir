
import './App.css'
import Todos from './component/Todos'

function App() {


  return (
    <>
      <div>
          <h1 className='text-3xl'>react-redux practices following by anisul islam sir</h1>
          <h3 className='text-2xl'>Fetching data</h3>
          <Todos></Todos>
      </div>
      
    </>
  )
}

export default App

// step 1: install packages
// step 2: constans define
// step 3: asynce action creator 
// step 4: reducer 
// step 5: create store 
// step 6 : set provider in main jsx
// step 7: use store 
// step 8: adding css for style 
