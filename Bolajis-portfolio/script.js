async function substackFetch() {
    try{
        const response = await fetch('https://substack.com/profile/search/linkedin/whatwasntsaid');
        if(!response.ok){
            throw new Error(`Network response was not ok ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(err){
        console.error(err)
    }
}

substackFetch()