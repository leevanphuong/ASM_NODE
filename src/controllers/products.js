import Joi from "joi";
import Product from "../models/products"

const checkItem = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    desc: Joi.string(),
    status: Joi.boolean(),
    quantily: Joi.number()
})

export const getAll = async function(req, res){
    try {
        const data = await Product.find()
        if(data.length===0){
            return res.status(400).json({message: "Khong co san pham "})
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.json({
            message: error
        })
    }
}
export const add= async function(req, res){
    try {
        const body = req.body
        const {error} = checkItem.validate(body)
        if(error){
            const errors = error.details.map((errorItem)=> errorItem.message)
            return res.status(400).json({message: errors})
        }
        const data = await Product.create(body)
        if(!data){
            return res.status(400).json({message:"Khong the them san pham"})
        }
        return res.status(200).json({message:"Them san pham thanh cong", data})
    } catch  (error) {
        return res.json({
            message: error
        })
    }
}
export const getOne= async function(req, res){
    try {
        const data = await Product.findOne({_id: req.params.id})
        if(!data){
            return res.status(400).json({message: "Khong co san pham "})
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.json({
            message: error
        })
    }
}
export const remove= async function(req, res){
    try {
        const data = await Product.findByIdAndDelete(req.params.id)
        if(!data){
            return res.status(400).json({message: "Khong co san pham "})
        }
        return res.status(200).json({message:"Xoa thanh cong san pham", data})
    } catch (error) {
        return res.json({
            message: error
        })
    }
}
export const update = async function(req,res){
    try {
        const id= req.params.id
        const body = req.body
        const data = await Product.findOneAndUpdate({_id:id}, body,{new:true})
        if(!data){
            return res.status(400).json({message:"Khong the update san pham"})
        }
        return res.status(200).json({message:"Cap nhap thanh cong", data})
    } catch (error) {
        return res.json({
            message: error
        })
    }
}