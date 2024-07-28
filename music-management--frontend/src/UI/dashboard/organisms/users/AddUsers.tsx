import { CustomDialog } from "@/components/ui/dialog";

interface IProps {
  setOpen: (value: boolean) => void;
  open: boolean;
}
const AddUsers = ({ setOpen, open }: IProps) => {
  return (
    <CustomDialog title="Add users" onClose={setOpen} open={open}>
      <div className=" flex flex-col gap-5">
        <div>

        </div>
      </div>
    </CustomDialog>
  );
};

export default AddUsers;
