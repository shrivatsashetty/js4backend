import fs from "fs/promises";

async function writeAppendRead() {
    const filePathInfoTxt = "./files/info.txt";

    try {

        /* asynchronously creates a new file or 
         * overwrites an existing file with the specified content */
        await fs.writeFile(
            filePathInfoTxt,
            "Shrivatsa\nBengaluru"
        );

        let data = await fs.readFile(filePathInfoTxt, "utf-8");

        console.log("\nBefore Appendig:\n", data.toString());
        
        /* asynchronously appends content to a file, 
         * creating the file if it doesn't exist */
        await fs.appendFile(
            filePathInfoTxt,
            `\n${Date.now().toString()}`
            // (err, dat) => {console.log("hello!!!")}
        );

        data = await fs.readFile(filePathInfoTxt, "utf-8");

        console.log("\nAfter Appendig:\n", data.toString());

        console.log("Deleting File...");

        /* deleting an existing file */
        await fs.unlink(filePathInfoTxt);
        
    } catch (err) {
        console.log(err);
    }
    finally {
        console.log("All File operation completed!!!")
    }
}


writeAppendRead();