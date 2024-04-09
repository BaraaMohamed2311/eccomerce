


export default function authCheck(token , setIsAccessible , location ,  navigate  ){
    console.log("authCheck entered")
    fetch("/api/user/auth-user", {
        mode: "cors",
        headers: {
            'Authorization': `Bearer ${token}` // Assuming you're using Bearer token
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log("success",data.success)
        if (data.success) {
            setIsAccessible(true);
            navigate(location)
            console.log("private success")
        } else {
            setIsAccessible(false);
            console.log("private failed")
        }
    })
    .catch(err => {
        console.log("private err", err);
        setIsAccessible(false);

    });
}