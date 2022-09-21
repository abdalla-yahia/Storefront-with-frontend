import {Request, Response, NextFunction } from 'express';
import productsModel from '../models/products.models';



const pro =new productsModel()

//Creat A New Product
    const CreatProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newProduct = await pro.creatProduct(req.body);
        res.redirect('/html/products.html')
        
    } catch (error) {
        next(error)
    }
}

// Get All Products 
    const GetAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getAllPro = await pro.getAllProduct()
        const size = Object.keys(getAllPro as object).length;
        if (size > 0) {
            
            res.json({
                state: "Success To Git All Products 😀",
                data:{...getAllPro}
            })
        } else {
            res.json({
                message:"Opps..Not Found Any Product 😥"
            })
        }
    } catch (error) {
        next(error)
    }
}

// Get Specific Product 
    const GetSpecificProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getPro = await pro.getSpecificProduct(req.params.id)
        if (getPro.length > 0) {
            res.json({
                state: ` <span style=color:red;> ${getPro[0].name} </span> have been imported successfully 😃 `,
                data:{...getPro}
            })
        } else {
            res.json({
                message:"No Elements Found 🙂"
            })
        }
    } catch (error) {
        next(error)
    }
}
// DELETE Specific Product 
    const DeleteSpecificProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const delPro = await pro.deleteSpecificProduct(req.params.id)
            res.json({
                state:`Deleted ${delPro[0].name} Operation Successflly 🙂`,
                data:{...delPro}
            })
    } catch (error) {
        next(error)
    }
}
// DELETE All Product 
    const DeleteAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const delAllPro = await pro.deleteAllProducts()
        res.json({
            state: "Deleted Operation Successflly 🙂",
            data:{...delAllPro}
        })
    } catch (error) {
        next(error)
    }
}

// Update Specific Product 
    const UpdateSpecificProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updateProduct = await pro.updatespecificProduct(req.body,req.params.id)
            // res.json({
            //     state: "Updated Operation Successflly 🙂",
            //     data:{...updateProduct}
            // })
        res.redirect('/html/products.html')
    } catch (error) {
        next(error)
    }
}
// Sort  Products 
    const SortProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sortProduct = await pro.sortProducts(req.params.category)
        if ([...sortProduct].length > 0) {
            
            res.json({
                state:"Success ",
                message: "Sorting Operation Successflly Done 🙂",
                data:{...sortProduct}
            })
        } else {
            res.json({
                message:'Sorry Not Found Any Thing Try Againe ☹️'
            })
        }
    } catch (error) {
        next(error)
    }
}

export default {
    SortProducts,
    UpdateSpecificProducts,
    DeleteAllProducts,
    DeleteSpecificProduct,
    GetSpecificProduct,
    GetAllProducts,
    CreatProduct
}