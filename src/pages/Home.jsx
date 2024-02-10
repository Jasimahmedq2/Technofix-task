import { useEffect, useState } from "react";
import FilterComponent from "../components/FilterComponent";
import UserCard from "../components/UserCard";
import { FetchData } from "../utiles/fetchData";
import CreateUser from "../components/CreateUser";
import SkeletonComponent from "../components/Skeleton";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch data by getUsers Function
    const showUsers = async () => {
      const result = await FetchData.GetUsers(
        `https://dummyjson.com/users/search?q=${search}`
      );
      console.log(result);
      setUsers(result?.data?.users);
      setLoading(false);
    };
    showUsers();
  }, [search]);

  return (
    <div>
      <div className="sm:flex justify-between">
        <FilterComponent
          setSearch={setSearch}
          setUsers={setUsers}
          users={users}
        />
        <CreateUser setUsers={setUsers} />
      </div>
      {loading ? (
        <SkeletonComponent />
      ) : (
        <div className="pl-2 pr-2 sm:pl-12 sm:pr-12 pb-6 sm:pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6">
          {users &&
            users?.map((user, index) => <UserCard key={index} user={user} />)}
        </div>
      )}
    </div>
  );
};

export default Home;
