export default function Task({id, activity, completed, onToggle}) {
    return (
        <div className="flex items-center justify-between p-4 bg-emeerald-500 rounded mb-2">
            <span className={completed ? "line-through text-gray-500" : ""}>
                {activity}
            </span>

            <button
                className={`px-4 py-2 rounded ${completed ? "bg-orange-200" : "bg-teal-200"}`}
                onClick={() => onToggle(id)}
            >
                {completed ? "Undo" : "Done"}
            </button>
        </div>
    );
}