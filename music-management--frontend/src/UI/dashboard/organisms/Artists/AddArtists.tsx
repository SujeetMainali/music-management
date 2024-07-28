import { Button } from "@/components/ui/button";
import { CustomDialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { artistsSchema } from "@/schema/artists.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

interface IProps {
  setOpen: (value: boolean) => void;
  open: boolean;
}
const AddArtists = ({ setOpen, open }: IProps) => {
  const defaultValues = {
    name: "",
    dob: "",
    gender: "",
    address: "",
    first_release_year: "",
    no_of_albums_released: "",
  };
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues,
    resolver: yupResolver(artistsSchema),
  });
  const handleAddArtists = (data: any) => {
    console.log(data);
  };
  return (
    <CustomDialog title="Add artists" onClose={setOpen} open={open}>
      <form onSubmit={handleSubmit(handleAddArtists)}>
        <div className=" flex flex-col gap-5">
          <div className=" flex justify-between gap-2  ">
            <div className=" w-1/2">
              <Input
                label="Name"
                type="text"
                placeholder="Enter your name"
                register={register("name")}
                error={errors.name?.message}
                isRequired
              />
            </div>
            <div className=" w-1/2">
              <Input
                label="DOB"
                type="date"
                placeholder="DOB"
                register={register("dob")}
                error={errors.dob?.message}
                isRequired
              />
            </div>
          </div>
          <div className=" flex justify-between gap-2  ">
            <div className=" w-1/2">
              <label htmlFor="gender">Gender</label>
              <Select
                onValueChange={(e) => {
                  console.log(e);
                  setValue("gender", e);
                }}
              >
                <SelectTrigger className="">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="m">Male</SelectItem>
                  <SelectItem value="f">Female</SelectItem>
                  <SelectItem value="o">Others</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className=" w-1/2">
              <Input
                label="Address"
                type="text"
                placeholder="Enter your address"
                register={register("dob")}
                error={errors.address?.message}
                isRequired
              />
            </div>
          </div>
          <div className=" flex justify-between gap-2  ">
            <div className=" w-1/2">
              <Input
                label="First release year"
                type="number"
                placeholder="Enter your first release year"
                register={register("first_release_year")}
                error={errors.first_release_year?.message}
                isRequired
              />
            </div>
            <div className=" w-1/2">
              <Input
                label="Number of albums released"
                type="number"
                placeholder="Enter your number of albums released"
                register={register("no_of_albums_released")}
                error={errors.no_of_albums_released?.message}
                isRequired
              />
            </div>
          </div>
          <div className=" flex justify-end">
            <Button type="submit">Add</Button>
          </div>
        </div>
      </form>
    </CustomDialog>
  );
};

export default AddArtists;
