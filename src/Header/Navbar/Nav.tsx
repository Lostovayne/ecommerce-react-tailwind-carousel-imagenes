import { IoCartOutline, IoHeartOutline, IoSearchOutline, IoPersonOutline, IoMenuSharp } from "react-icons/io5";

export const Nav = () => {
    return (
        <div className="border-b">
            <div className="h-10 w-full bg-black flex justify-center items-center gap-4 ">
                <p className="text-xs lg:text-base text-white font-normal ">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                </p>
                <p className="hidden lg:block text-base font-medium text-white  ">ShopNow</p>
            </div>

            <header className=" flex justify-between max-w-7xl mx-auto lg:py-3 items-center px-4 lg:px-0">
                {/* Menu Hamburguesa */}

                <IoMenuSharp className="lg:hidden text-3xl text-black" />

                <h1 className="font-bold text-2xl lg:text-3xl text-black">Exclusive</h1>

                <nav>
                    <ul className="hidden lg:flex text-gray-900 text-base font-normal items-center  gap-6">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Sign Up</li>
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex bg-gray-100/70 py-2 px-3 justify-center rounded-lg">
                        <input
                            type="text"
                            className="bg-transparent outline-none text-gray-800 placeholder:text-sm"
                            placeholder="What are you looking for?"
                        />
                        <IoSearchOutline className="text-xl text-gray-700 cursor-pointer" />
                    </div>

                    <div className="icons flex gap-2 text-xl">
                        <IoHeartOutline />
                        <IoCartOutline />
                        <IoPersonOutline />
                    </div>
                </div>
            </header>
        </div>
    );
};
