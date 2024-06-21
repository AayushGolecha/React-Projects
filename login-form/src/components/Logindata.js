export const Get=async ()=>{
    return await fetch('https://mocki.io/v1/e9e5d03f-8292-4e32-9fb0-3c3e92affc2b').then(res =>res.json())
}