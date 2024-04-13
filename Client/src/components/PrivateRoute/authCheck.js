


export default function authCheck(token , setIsAccessible , location ,  navigate  ){
    console.log("authCheck entered")
    fetch("/api/user/auth-user", {
        mode: "cors",
        headers: {
            
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Assuming you're using Bearer token
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log("success",data.success)
        if (data.success) {
            setIsAccessible(true);
            navigate(location)
        } else {
            setIsAccessible(false);
            console.error("privateRoute fetch failed")
        }
    })
    .catch(err => {
        console.log("privateRoute fetch err", err);
        setIsAccessible(false);

    });
}