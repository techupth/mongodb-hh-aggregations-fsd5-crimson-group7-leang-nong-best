// Paste the complete MQL here
/**
**Exercise #5**

ให้เขียน Query หายอดขายทั้งหมดในแต่ละเดือนและปี
 - โดยที่เรียงจากปีและเดือนล่าสุดไปเก่าที่สุด
*/
db.pizzaOrders
  .aggregate([
    {
      $group: {
        _id: { month: "$created_at", year: "$created_at" },
        total_sales: { $sum: "$total_price" },
      },
    },
  ])
  .sort({
    _id: -1,
  });
