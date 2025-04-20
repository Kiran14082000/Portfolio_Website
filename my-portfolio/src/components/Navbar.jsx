const Navbar = () => {
    return (
      <nav className="bg-zinc-950 text-white px-6 py-3 sticky top-0 z-50 border-b border-zinc-800 flex justify-between items-center">
        <h1 className="text-xl font-bold">📓 Kiran's Portfolio</h1>
        <ul className="flex gap-4 text-sm">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  