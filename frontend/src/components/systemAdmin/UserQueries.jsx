import React, { useState } from "react";

const dummyQueries = [
  { id: 1, user: "John Doe", message: "I can't book my bus ticket.", replies: [] },
  { id: 2, user: "Jane Smith", message: "Is my refund processed?", replies: [] },
  { id: 3, user: "Rahul Kumar", message: "How can I change my seat?", replies: [] },
];

const UserQueries = () => {
  const [queries, setQueries] = useState(dummyQueries);
  const [selectedQueryId, setSelectedQueryId] = useState(null);
  const [adminReply, setAdminReply] = useState("");

  const handleReply = () => {
    if (!adminReply) return;
    const updatedQueries = queries.map((q) =>
      q.id === selectedQueryId
        ? { ...q, replies: [...q.replies, { sender: "admin", message: adminReply }] }
        : q
    );
    setQueries(updatedQueries);
    setAdminReply("");
  };

  const selectedQuery = queries.find((q) => q.id === selectedQueryId);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row p-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      {/* Queries List */}
      <div className="lg:w-1/3 bg-white rounded-xl shadow-lg p-4 overflow-y-auto h-[95vh] mb-4 lg:mb-0">
        <h2 className="text-xl font-bold mb-4 text-gray-700">User Queries</h2>
        <ul className="space-y-3">
          {queries.map((q) => (
            <li
              key={q.id}
              onClick={() => setSelectedQueryId(q.id)}
              className={`p-3 rounded-lg cursor-pointer transition ${
                selectedQueryId === q.id ? "bg-yellow-200" : "hover:bg-yellow-100"
              }`}
            >
              <p className="font-semibold text-gray-800">{q.user}</p>
              <p className="text-gray-600 text-sm truncate">{q.message}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div className="lg:w-2/3 bg-white rounded-xl shadow-lg flex flex-col p-4 h-[95vh]">
        {selectedQuery ? (
          <>
            <h2 className="text-xl font-bold mb-4 text-gray-700">{selectedQuery.user}</h2>
            <div className="flex-1 overflow-y-auto space-y-4 p-2">
              {/* User initial message */}
              <div className="flex justify-start">
                <div className="bg-yellow-200 text-gray-800 p-3 rounded-xl max-w-xs shadow-sm">
                  {selectedQuery.message}
                </div>
              </div>

              {/* Replies */}
              {selectedQuery.replies.map((reply, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    reply.sender === "admin" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl max-w-xs shadow-sm ${
                      reply.sender === "admin"
                        ? "bg-yellow-500 text-white"
                        : "bg-yellow-200 text-gray-800"
                    }`}
                  >
                    {reply.message}
                  </div>
                </div>
              ))}
            </div>

            {/* Input box */}
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Type your reply..."
                value={adminReply}
                onChange={(e) => setAdminReply(e.target.value)}
                className="flex-1 border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                onClick={handleReply}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl transition"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a query to reply
          </div>
        )}
      </div>
    </div>
  );
};

export default UserQueries;
