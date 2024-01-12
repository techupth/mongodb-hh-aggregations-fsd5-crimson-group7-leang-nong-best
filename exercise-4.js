// ให้เขียน Query หายอดขายทั้งหมดในแต่ละปี
// โดยที่เรียงจากปีล่าสุดไปเก่าที่สุด
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { $year: "$created_at" },
      total_sales: { $sum: "$total_price" },
    },
  },
  { $sort: { "_id.year": -1 } },
]);
