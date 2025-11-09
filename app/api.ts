export async function fetchDevices(){
    try{
        const response = await fetch("https://www.bgroutingmap.com/8/houmTaimerApk.php?m=14");
        if(!response.ok){
            throw new Error("HTTP error: " + response.status);
        }
        const data = await response.json();
        return data;
    }catch(err){
        console.log("Грешка при заявката:",err);
        throw err;
    }

}