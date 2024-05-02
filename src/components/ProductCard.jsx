import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function ProductCard({ product }) {
  return (
    <div className="flex justify-center ">
      <Card className="max-w-md rounded-lg overflow-hidden shadow-lg m-4">
        <CardMedia
          component="img"
          height="240"
          image={product.imageUrl}
          alt={product.name}
          className="object-cover h-56 w-full"
        />
        <CardContent className="bg-white p-4">
          <Typography gutterBottom variant="h5" component="div" className="text-lg font-semibold mb-2">
            {product.name}  
          </Typography>
          <Typography variant="body2" color="text.secondary" className="mb-4">
            {product.description}
          </Typography>
          <Typography className="text-gray-600 mb-2">Brand: {product.brand}</Typography>
          <Typography className="text-gray-600">Price: ₹{product.price}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;