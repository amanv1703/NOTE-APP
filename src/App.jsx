import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [tasks, setTasks] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    if (title.trim() === '' || detail.trim() === '') return

    const newTask = {
      title,
      detail,
    }

    setTasks([...tasks, newTask])
    setTitle('')
    setDetail('')
  }

  const deleteTask = (index) => {
    const copyTasks = [...tasks]
    copyTasks.splice(index, 1)
    setTasks(copyTasks)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white lg:flex">

      {/* Left Side Form */}
      <div className="lg:w-1/2 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-700">
        <form
          onSubmit={submitHandler}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            Add Notes
          </h1>

          <input
            type="text"
            placeholder="Enter note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-5 py-3 rounded-xl bg-white text-black font-medium outline-none mb-5"
          />

          <textarea
            placeholder="Write details..."
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            className="w-full h-36 px-5 py-3 rounded-xl bg-white text-black font-medium outline-none resize-none mb-5"
          />

          <button className="w-full bg-yellow-400 text-black py-3 rounded-xl font-bold hover:bg-yellow-300 transition duration-300">
            Add Note
          </button>
        </form>
      </div>

      {/* Right Side Notes */}
      <div className="lg:w-1/2 p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Your Notes
        </h1>

        {tasks.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            No notes added yet...
          </p>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
            {tasks.map((item, index) => (
              <div
                key={index}
                className="w-64 min-h-56 bg-yellow-200 text-black rounded-2xl p-5 shadow-2xl hover:scale-105 transition-all duration-300 relative"
              >
                <h2 className="text-2xl font-bold break-words">
                  {item.title}
                </h2>

                <p className="mt-3 text-gray-800 break-words">
                  {item.detail}
                </p>

                <button
                  onClick={() => deleteTask(index)}
                  className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default App