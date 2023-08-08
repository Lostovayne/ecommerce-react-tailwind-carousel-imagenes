import { IoChevronForwardSharp } from "react-icons/io5";

export const Sidebar = () => {
    return (
        <div className="flex-1 hidden  lg:flex justify-end p-8 border-r">
            <nav className="max-w-[13rem] flex-1">
                <ul className=" text-black space-y-3 px-2">
                    <li className="text-base font-normal w-full  flex items-center justify-between">
                        <span>Woman’s Fashion</span>
                        <IoChevronForwardSharp />
                    </li>
                    <li className="text-base font-normal w-full  flex items-center justify-between">
                        <span>Men’s Fashion</span>
                        <IoChevronForwardSharp />
                    </li>

                    <li className="text-base font-normal w-full  ">
                        <span>Electronics</span>
                    </li>
                    <li className="text-base font-normal w-full  ">
                        <span>Home & Lifestyle</span>
                    </li>
                    <li className="text-base font-normal w-full  ">
                        <span>Medicine</span>
                    </li>
                    <li className="text-base font-normal w-full  ">
                        <span>Sports & Outdoor</span>
                    </li>
                    <li className="text-base font-normal w-full  ">
                        <span>Baby’s & Toys</span>
                    </li>
                    <li className="text-base font-normal w-full  ">
                        <span>Groceries & Pets</span>
                    </li>
                    <li className="text-base font-normal w-full  ">
                        <span>Health & Beauty</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
