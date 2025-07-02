export default function Task({id, activity, completed, onToggle}) {
    return (
        <div className="flex items-center justify-between p-4 bg-blue-50 rounded mb-2">
            <span className={completed ? "line-through text-red-900" : ""}>
                {activity}
            </span>

            <button
                className={`px-4 py-2 rounded ${completed ? "bg-green-300" : "bg-yellow-500"}`}
                onClick={() => onToggle(id)}
            >
                {completed ? "Undo" : "Done"}
            </button>
        </div>
    );
}