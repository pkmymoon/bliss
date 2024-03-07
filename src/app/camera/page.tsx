export default function Page() {
    async function createInvoice(formData: FormData) {
        "use server";
        const file = formData.get("file");
        await fetch("http://localhost:3000/api/image", {
            method: "POST",
            body: formData,
        });
        console.log(file);
return
        // mutate data
        // revalidate cache
    }

    return (
        <form action={createInvoice}>
            <input type="file" name="file" />
            <button type="submit">Submit</button>
        </form>
    );
}
