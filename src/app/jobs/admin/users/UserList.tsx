"use client";
import OverveiwUsersTable from "@/components/UI/Tables/OverveiwUsersTable";
const UserList: React.FC = () => {
  return (
    <>
      <div className="box-content !p-0">
        <OverveiwUsersTable Filtring={true} />
      </div>
    </>
  );
};

export default UserList;
