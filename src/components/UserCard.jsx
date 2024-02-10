import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="md:w-[300px]  space-y-8 shadow-[0px_0px_30px_2px_rgba(100,100,111,0.1)] mt-8 relative p-8 rounded">
      <div>
        <img
          className="w-[60px] border h-[60px] object-cover rounded-full p-2 bg-slate-100 duration-300 hover:scale-105"
          src={user?.image || "https://robohash.org/Terry.png?set=set4"}
          alt=""
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-800">
          {user?.firstName + " " + user?.lastName}
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
            Email: {user?.email}
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
            Address:{" "}
            {user?.address?.address +
              "," +
              user?.address?.city +
              "," +
              user?.address?.state}
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
            company: {user?.company?.name}
          </li>
        </ul>
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => navigate(`/users/${user?.id}`)}
            className="w-full h-16 border-2 border-sky-300 text-sky-800 font-black rounded-full hover:text-white duration-300 relative group"
          >
            <span className="absolute w-12 group-hover:w-[93%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
