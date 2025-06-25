import {useState} from 'react'

const Dashboard = ({user, onSignOut}) => {

  const [proof, setProof] = useState('');
  const [image, setImage] = useState(null);
  const [completedDays, setCompletedDays] = useState([1]);

  const handleProofSubmit = () => {
    if (proof || image) {
      const nextDay = completedDays.length + 1;
      if (nextDay <= 7) setCompletedDays([...completedDays, nextDay]);
      setProof('');
      setImage(null);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 p-6 font-sans'>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold">Good morning, {user.name}</h1>
          <p className="text-sm text-gray-600 mt-1">Stay consistent, your future self will thank you.</p>
        </div>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          onClick={onSignOut}
        >Log out</button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow-md">
          <div className="flex items-center justify-between mb-4">
            <p className="text-3xl font-bold text-blue-900">₦1000.00</p>
            <p className="text-sm text-green-600">Today's earning: ₦10.00</p>
          </div>
          <label className="block text-sm font-medium mb-1">Task</label>
          <input 
          type="text"
          value="Post on LinkedIn for 7 days"
          className="w-full p-2 mb-4 border rounded"
          disabled 
          />
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            value="2025-06-25"
            className="w-full p-2 mb-4 border rounded"
            disabled
          />
          <label className="block text-sm font-medium mb-1">End Date</label>
          <input
            type="date"
            value="2025-07-02"
            className="w-full p-2 mb-4 border rounded"
            disabled
          />
          <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">
            Activate
          </button>
        </div>
        {/* Submission Area */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Today's Submission</h2>
          <textarea
            placeholder="Type your report..."
            className="w-full h-28 p-2 border rounded resize-none mb-4"
            value={proof}
            onChange={(e) => setProof(e.target.value)}
          />
          <div className="flex items-center gap-4 mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="hidden"
              />
              Upload Image
            </label>
            {image && <p className="text-sm text-gray-600">{image.name}</p>}
          </div>
          <button
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            onClick={handleProofSubmit}
          >
            Submit Proof
          </button>
        </div>
      </div>
      {/* Day Tracker */}
      <div className="flex gap-2 mt-6 flex-wrap justify-center items-center">
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <div
            key={day}
            className={`w-16 h-12 flex items-center justify-center rounded border ${
              completedDays.includes(day)
                ? 'bg-green-600 text-white'
                : 'border-gray-300 text-gray-700'
            }`}
          >
            Day {day}
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Dashboard