import Product from "../models/ProductModel.js";
import path from "path";
import fs from "fs";

export const getProduct = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const getProductById = async (req, res) => {
  try {
    const response = await Product.findOne({
      where: { id: req.params.id },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const saveProduct = (req, res) => {
  if (req.files === null) return res.status(400).json({ msg: "no file uploaded" });
  const name = req.body.title;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpeg", ".jpg"];

  if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "invalid image" });
  if (fileSize > 5000000) return res.status(422).json({ msg: "image must be less than 5 mb" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Product.create({
        name: name,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Product created successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!product) {
      return res.status(404).json({ msg: "No Data Found" });
    }

    let fileName = product.image; // Gunakan product.image yang sudah ada

    if (req.files && req.files.file) {
      const file = req.files.file;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      fileName = file.md5 + ext;
      const allowedTypes = [".png", ".jpeg", ".jpg"];

      if (!allowedTypes.includes(ext.toLowerCase())) {
        return res.status(422).json({ msg: "Invalid image" });
      }

      if (fileSize > 5000000) {
        return res.status(422).json({ msg: "Image must be less than 5 MB" });
      }

      const filePath = path.join(__dirname, `../public/images/${product.image}`);
      fs.unlinkSync(filePath);

      file.mv(path.join(__dirname, `../public/images/${fileName}`), (err) => {
        if (err) {
          return res.status(500).json({ msg: err.message });
        }
      });
    }

    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    await product.update({
      name: name,
      image: fileName,
      url: url,
    });

    return res.status(200).json({ msg: "Product Updated Successfully" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};
// export const updateProduct = async (req, res) => {
//   const product = await Product.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });
//   if (!product) return res.status(404).json({ msg: "No Data Found" });
//   let fileName = "";
//   if (req.files === null) {
//     fileName = Product.image;
//   } else {
//     const file = req.files.file;
//     const fileSize = file.data.length;
//     const ext = path.extname(file.name);
//     const fileName = file.md5 + ext;
//     const allowedType = [".png", ".jpeg", ".jpg"];

//     if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "invalid image" });
//     if (fileSize > 5000000) return res.status(422).json({ msg: "image must be less than 5 mb" });

//     const filePath = `./public/images/${product.image}`;
//     fs.unlinkSync(filePath);

//     file.mv(`./public/images/${fileName}`, (err) => {
//       if (err) return res.status(500).json({ msg: err.message });
//     });
//   }

//   const name = req.body.title;
//   const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
//   try {
//     await Product.update(
//       { name: name, image: fileName, url: url },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     );
//     res.status(200).json({ msg: "Product Updated Successfuly" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
export const deleteProduct = async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!product) return res.status(404).json({ msg: "no data found" });
  try {
    const filePath = `./public/images/${product.image}`;
    fs.unlinkSync(filePath);
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "product deleted successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
