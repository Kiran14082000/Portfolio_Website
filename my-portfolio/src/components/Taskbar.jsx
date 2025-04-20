const Taskbar = () => {
    return (
      <div className="bg-zinc-800 px-6 py-2 border-b border-zinc-700 sticky top-[48px] z-40 text-sm flex gap-6">
        <button className="hover:text-green-400">File</button>
        <button className="hover:text-green-400">Edit</button>
        <button className="hover:text-green-400">View</button>
        <button className="hover:text-green-400">Run</button>
        <button className="hover:text-green-400">Kernel</button>
        <button className="hover:text-green-400">Help</button>
      </div>
    );
  };
  
  export default Taskbar;
  