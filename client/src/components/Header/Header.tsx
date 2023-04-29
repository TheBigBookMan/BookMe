import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
    return (
        <div className="flex justify-center items-center h-[60px]">
            <Link to="/">
                <h1 className="font-bold text-3xl">BookMe</h1>
            </Link>
        </div>
    );
};

export default Header;
