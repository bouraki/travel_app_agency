const jwt = require('jsonwebtoken');

const auth =  (req,res,next) =>{
    const jwtCookie = req.headers.cookie.split('; ').find(row => row.startsWith('jwt='));
  const token = jwtCookie ? jwtCookie.split('=')[1] : null;
    console.log(token)
    if(!token){
        console.log('no token')
        return res.status(400).end()
    }
    try{
        const decoded = jwt.verify(token, 'secret',{},async (err,userData)=>{
            const {username,userid} =  await userData
            res.status(200).json({
                username: username,
            })
            next()
        })
    }catch{

    }
}

module.exports = auth
