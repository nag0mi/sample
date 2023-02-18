async function callApi() {
    const obj = {
        'text' : 'とても幸せな気分でいっぱいです．'
    };
    const method = "POST";
    const body = JSON.stringify(obj);
    const headers = {
        'Content-Type' : 'application/json'
    };
    const res = await fetch("https://analyzesentiment-dpgh5e2bhq-an.a.run.app/",{method,headers,body});
    
    const users = await res.json();
    console.log(users)
  };
  
callApi();
