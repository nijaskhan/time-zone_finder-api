const axios = require('axios');

// get-client-timezone
const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log("client_time_zone : ", clientTimeZone);

axios.post('http://localhost:4500/getTimeZone', {
    timezone: clientTimeZone
})
.then((res)=>{
    console.log(res.data);
})
.catch((err)=>{
    console.log(err.message);
});