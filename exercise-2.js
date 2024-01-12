// หายอดขายทั้งหมดและจำนวนของ Pizza ในแต่ละ Size
// โดยที่ให้เรียงผลลัพธ์ตามยอดขายที่มากที่สุด

db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      total_price: { $sum: "$total_price" },
      total_quantity: { $sum: "$quantity" },
    },
  },
  { $sort: { total_price: -1 } },
]);
