const Product_db = require('../Schemas/Products')

exports.create_product = (req, res, next) => {
    const {title, description,price} = req.body
    const product = new Product_db({
        title:title,
        description:description,
        price:price,
        image:req.file.filename,
    })
    console.log(product)
    product.save().then(()=>{
        console.log('product added successfully')
        return res.status(201).json({success:'product added successfully'})
    }).catch(err => {
        console.log('error creating product')
        return res.status(500).json({success:'error creating product'})
    })
}


exports.getAllProducts = (req, res, next) => {
    Product_db.find()
    .then((response)=>{
        return res.status(200).json({
            response
        })
    }).catch(err => {
        return res.status(500).json({
            message:'products not found'
        })
    })
}


exports.getOneProduct = (req, res, next) => {
    const id = req.params.id
    Product_db.findById(id).then((response)=>{
        return res.status(200).json([response])
    }).catch(err => {
        return console.log(err.message)
    })
}



exports.deleteProduct = (req, res,next) =>{
    const id  = req.params.id
    console.log(id)
    Product_db.findByIdAndRemove(id)
    .then((response)=>{
        console.log('product deleted')
        return res.status(200).json('product deleted')
    }).catch(err => {
        console.log('product not deleted')
        return res.status(200).json('product not deleted')
    })

}

exports.deleteAllProduct = (req, res) => {
    Product_db.collection.deleteMany({})
    .then(()=>{
        return res.status(200).json('deleted')
    })
}


