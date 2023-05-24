const Email_listing = require('../Schemas/Email')


exports.getAllEmail  = function (req, res) {
    const {email} = req.body
    const email_one  = new Email_listing({
        email:email
    })
    email_one.save().then(()=>{
        console.log('email saved successfully')
        return res.status(200).json('savedd')
    }).catch(err => {
        console.log('error saving email')
        return res.status(500).json('error email saved')
    })
}