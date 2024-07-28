import { CustomBreadcrumb } from "@/components/ui/breadcrumb";
import { usePath } from "@/hooks/usePath";
import Header from "@/UI/common/molecules/Header";
import { CustomTable } from "@/UI/common/molecules/Table";
import { ColumnDef } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import AddUsers from "../organisms/users/AddUsers";
import { useDisclosure } from "@/hooks/useDisclosure";
async function getData(): Promise<any[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
}

const Users = () => {
  const [data, setData] = React.useState<any[]>([]);
  // const { isOpen, onClose, onOpen } = useDisclosure();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);
  const breadcrumbPaths = usePath();
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
  ];
  return (
    <div className="flex flex-col gap-3 px-2 py-2">
      <CustomBreadcrumb items={breadcrumbPaths} separator={"-"} />
      <Header
        title="Manage Users"
        buttonIcon={<></>}
        buttonLabel="Add"
        setOpen={() => {
          setIsOpen(!isOpen);
        }}
      />
      <CustomTable columns={columns} data={data} />
      <AddUsers open={isOpen} setOpen={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default Users;
