
import fs from "fs"

console.log("First statement of the Program...");

const filePathSampleTxt = "./files/test.txt";

/* write file operation, 
note that this operation will happen asynchronously */
fs.writeFile(
    filePathSampleTxt,
    "This is a sample file",
    /* the last param is a callback function to execute after write operation is done
     this will be executed asynchronously */
    () => {
        console.log("Started File Write Operation...");
        fs.readFile(
            filePathSampleTxt,
            (err, data) => {
                console.log("Reading Text File...");

                if (err) {
                    console.log(err);
                    return
                }
                console.log("Finished Reading Text File...");
                console.log("File Text file Content:\n", data.toString());
            }
        );
    }
);


/* reading binary files like images */
fs.readFile(
    "./files/sample_image.jpeg",
    (err, data) => {
        console.log("Reading Image File...");
        if(err) {
            console.log(err);
            return
        }

        console.log("Finished Reading Image File...");
        console.log(`File Size: ${data.length} bytes`);        
    }
);


console.log("Last statement of the program...\nAll async operations still running...");
