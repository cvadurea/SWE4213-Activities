import InputField from "./InputField";
import MyButton from "./MyButton";
import { useState } from "react";

export default function Form() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function onSubmit(e) {
        e.preventDefault();

        // TODO 7: Log all of the values to the console 
        console.log(`Name: ${form.name}, Email: ${form.email}, Phone Number: ${form.phoneNumber}`);
        // TODO 7: Reset the form after submitting it 
        form.email = "";
        form.name = "";
        form.phoneNumber = "";

    }

    return (
        <form>
            <InputField label="Name" placeholder="Enter your name..." value={form.name} name="name" onChange={handleChange} />
            <InputField label="Email" placeholder="Enter your email..." value={form.email} name="email" onChange={handleChange} />
            <InputField label="Phone Number" placeholder="Enter your phone number..." value={form.phoneNumber} name="phoneNumber" onChange={handleChange} />
            <MyButton onClick={onSubmit} />

        </form>
    );
}