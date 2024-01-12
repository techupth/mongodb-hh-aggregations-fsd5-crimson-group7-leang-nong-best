// ให้ Query หาเดือนที่มียอดขายรวมต่ำสุดในปี 2021
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { year: { $year: "$created_at" }, month: { $month: "$created_at" } },
      total_sales: { $sum: "$total_price" },
    },
  },
  {$match:{"_id.year":2021}},
  { $sort: { total_sales: 1 } },
  { $limit: 1 },
]);
