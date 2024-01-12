//ให้ Query หาเดือนที่มียอดขายรวมต่ำสุดในปี 2021

db.pizzaOrders.aggregate([
  {
    $match: {
      created_at: {
        $gte: ISODate("2021-01-01"),
        $lt: ISODate("2022-01-01"),
      },
    },
  },
  {
    $group: {
      _id: {
        year: { $year: "$created_at" },
        month: { $month: "$created_at" },
      },
      total_sales: { $sum: "$total_price" },
    },
  },
  {
    $sort: {
      "_id.year": 1,
      "_id.month": 1,
    },
  },
  {
    $project: {
      _id: 0,
      year: "$_id.year",
      month: "$_id.month",
      total_sales: 1,
    },
  },
]);
