import './App.css'
import CreateComponent from './components/create'
import DeleteComponent from './components/delete'
import ReadComponent from './components/read'
import UpdateComponent from './components/update'

function App() {
  return (
    <div className='w-[100vw] h-[100vh] box-border grid grid-cols-2 grid-rows-2 gap-4'>
      <div className='border border-slate-600 flex flex-col items-start justify-start p-4'>
        <div className='font-black text-lg'>CREATE</div>
        <CreateComponent/>
      </div>

      <div className='border border-slate-600 flex flex-col items-start justify-start p-4'>
        <div className='font-black text-lg'>READ</div>
        <ReadComponent/>
      </div>

      <div className='border border-slate-600 flex flex-col items-start justify-start p-4'>
        <div className='font-black text-lg'>UPDATE</div>
        <UpdateComponent/>
      </div>

      <div className='border border-slate-600 flex flex-col items-start justify-start p-4'>
        <div className='font-black text-lg'>DELETE</div>
        <DeleteComponent/>
      </div>
    </div>
  )
}

export default App
