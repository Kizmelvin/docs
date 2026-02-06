export const MyInputCard = () => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    console.log("Submitted:", value);
    // Add your submit logic here
  };

  return (
    <div className="p-4">
      <div className="flex gap-4">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border p-2 rounded flex-1"
          placeholder="Your email address"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-700 text-white px-4 py-2 rounded"
        >
          Subscribe &rarr;
        </button>
      </div>
    </div>
  );
};
