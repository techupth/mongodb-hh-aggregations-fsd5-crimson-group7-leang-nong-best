// - ให้เขียน Query หายอดขายทั้งหมดในแต่ละเดือนของปีนั้นๆ
//    - โดยที่เรียงจากปีและเดือนล่าสุดไปเก่าที่สุด

db.pizzaOrders.aggregate([
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
      "_id.year": -1,
      "_id.month": -1,
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
