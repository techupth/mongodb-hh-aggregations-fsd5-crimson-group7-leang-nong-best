// ให้เขียน Query กรอง Document ที่ได้จาก Exercise #2
//ให้แสดงผลแค่ข้อมูลยอดขายทั้งหมดและจำนวนของ Pizza ใน Size medium
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      total_price: { $sum: "$total_price" },
      total_quantity: { $sum: "$quantity" },
    },
  },
  {
    $match: {
      _id: "medium",
    },
  },
  { $sort: { total_price: -1 } },
]);
