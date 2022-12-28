// import './index.css'

function App() {


  return (
    <div>
    <div className='bg-black'>
      <h1 className="uppercase p-3 text-2xl text-gray-200">Notice Fetch</h1>
    </div>

    <main className="bg-gray-200">

    <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div className="card bg-gray-100">
          <iframe className="w-full h-32 sm:h-48 object-cover" src="https://docs.google.com/gview?url=https://www.heritageit.edu/NoticePDF/1208584984Not211122.pdf&embedded=true" frameborder="5"></iframe>
          <div class="m-4" >
              <span class="font-bold">Harvey Smiling</span>
              <span class="block text-gray-500 text-sm">THE SUITS</span>
            </div>
        </div>
        <div className="card">
          <iframe className="w-full h-32 sm:h-48 object-cover" src="https://docs.google.com/gview?url=https://www.heritageit.edu/NoticePDF/1208584984Not211122.pdf&embedded=true" frameborder="0"></iframe>
          <div class="m-4" >
              <span class="font-bold">Harvey Smiling</span>
              <span class="block text-gray-500 text-sm">THE SUITS</span>
            </div>
        </div>

        <div className="card">
          <iframe className="w-full h-32 sm:h-48 object-cover" src="https://docs.google.com/gview?url=https://www.heritageit.edu/NoticePDF/1208584984Not211122.pdf&embedded=true" frameborder="5"></iframe>
            <div class="m-4" >
              <span class="font-bold">Harvey Smiling</span>
              <span class="block text-gray-500 text-sm">THE SUITS</span>
            </div>
        </div>
        </div>

</main>

    </div>
  )
}

export default App
