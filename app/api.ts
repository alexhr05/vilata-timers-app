export async function fetchDevices(){
    try{
        //const response = await fetch("https://www.bgroutingmap.com/8/houmTaimerApk.php?m=14");
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        if(!response.ok){
            throw new Error("HTTP error: " + response.status);
        }
         const textData = await response.text();

        const lines = textData.trim().split("\n");

        // Преобразуваме всеки ред в обект
        const devices = lines.map((line, index) => {
        const [name, ip, status] = line.split(",");
        return {
            id: index + 1,
            name: name?.trim(),
            ip: ip?.trim(),
            status: status?.trim(),
            times: [5, 10, 15, 30], // примерно време
            lastOff: "няма данни", 
        };
        });
        return devices;
    }catch(err){
        console.log("Грешка при заявката:",err);
        throw err;
    }

}