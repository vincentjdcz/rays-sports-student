

function Navbar() {
  return (
    <div>
      <nav className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex justify-between w-full">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                <h2 className="ml-2 font-bold text-black">Ray Sports</h2>
              </div>
         

              <div className="flex space-x-4 items-center">
                <img src="/src/assets/message.png"/>
                <img src="/src/assets/logout.png"/>
              </div>

            </div>

          </div>
        </div>


      </nav>
    </div>
  );
}

export default Navbar;