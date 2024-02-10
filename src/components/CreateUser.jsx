import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateUser = ({ setUsers }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const privateUrl = "44c26384eae4023f6064cf342eee9294";
    const formData = new FormData();
    const { image, ...info } = data;
    formData.append("image", image[0]);

    setLoading(true);

    fetch(`https://api.imgbb.com/1/upload?key=${privateUrl}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        const userInfo = {
          image: result?.data?.url,
          firstName: info?.firstName,
          lastName: info?.lastName,
          email: info?.email,
          address: {
            address: info?.address,
            city: info?.city,
            state: info?.state,
          },
          company: {
            name: info?.companyName,
            title: info?.title,
          },
        };
        console.log({ userInfo });

        fetch("https://dummyjson.com/users/add", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((finalResult) => {
            onClose();
            toast.success("added new user");
            setUsers((preUsers) => [...preUsers, finalResult]);
            console.log({ finalResult });
          });

        setLoading(false);
        reset();
      });
    console.log({ data });
  };

  return (
    <div className="pl-4 sm:pl-0 pt-4 sm:pt-0 sm:pr-12 ">
      <Button className="bg-[#001630]/15 font-bold text-[#005fce]" onPress={onOpen}>Create User</Button>
      <Modal size="lg" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create User{" "}
              </ModalHeader>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <ModalBody>
                  <div className="sm:flex sm:space-x-4 justify-between items-center">
                    <Input
                      {...register("firstName", { required: true })}
                      errorMessage={errors.firstName && "firstName is required"}
                      type="text"
                      variant="underlined"
                      label="firstName"
                    />
                    <Input
                      {...register("lastName", { required: true })}
                      errorMessage={errors.lastName && "lastName is required"}
                      type="text"
                      variant="underlined"
                      label="lastName"
                    />
                  </div>
                  <Input
                    {...register("email", { required: true })}
                    errorMessage={errors.email && "email is required"}
                    type="email"
                    variant="underlined"
                    label="Email"
                  />
                  <div className="sm:flex justify-between items-center sm:space-x-4">
                    <Input
                      {...register("address", { required: true })}
                      errorMessage={errors.address && "address is required"}
                      type="text"
                      variant="underlined"
                      label="address"
                    />
                    <Input
                      {...register("city", { required: true })}
                      errorMessage={errors.city && "city is required"}
                      type="text"
                      variant="underlined"
                      label="city"
                    />
                    <Input
                      {...register("state", { required: true })}
                      errorMessage={errors.state && "state is required"}
                      type="text"
                      variant="underlined"
                      label="state"
                    />
                  </div>
                  <div className="sm:flex justify-between items-center sm:space-x-4 ">
                    <Input
                      {...register("companyName", { required: true })}
                      errorMessage={
                        errors.companyName && "companyName is required"
                      }
                      type="text"
                      variant="underlined"
                      label="company name"
                    />
                    <Input
                      {...register("title", { required: true })}
                      errorMessage={errors.title && "title is required"}
                      type="text"
                      variant="underlined"
                      label="title"
                    />
                  </div>
                  <Input
                    type="file"
                    {...register("image", { required: true })}
                    errorMessage={errors.image && "image is required"}
                    accept="image/png, image/gif, image/jpeg"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    type="submit"
                    color="primary"
                    isLoading={loading ? true : false}
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreateUser;
