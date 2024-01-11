// Paste the complete MQL here
/**
**Exercise #4**

- ให้เขียน Query หายอดขายทั้งหมดในแต่ละปี
    - โดยที่เรียงจากปีล่าสุดไปเก่าที่สุด
 */
db.pizzaOrders
  .aggregate([
    {
      $group: {
        _id: { $year: "$created_at" },
        total_price_per_year: { $sum: "$total_price" },
      },
    },
  ])
  .sort({
    _id: -1,
  });
