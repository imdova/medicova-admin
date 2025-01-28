import UserSettingDrop from "./UserSettingDrop";
import UserProfileDrop from "./UserProfileDrop";
import UserAlertDrop from "./UserAlertDrop";
import UserMassegeDrop from "./UserMassegeDrop";

const Usercontent: React.FC = () => {
  return (
    <div className="relative flex items-center gap-3">
      <UserMassegeDrop />
      <UserAlertDrop />
      <UserSettingDrop />
      <UserProfileDrop />
    </div>
  );
};
export default Usercontent;
